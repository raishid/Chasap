import { Op } from "sequelize";
import TicketTraking from "./models/TicketTraking";
import moment from "moment";
import Ticket from "./models/Ticket";
import Whatsapp from "./models/Whatsapp";
import { getIO } from "./libs/socket";
import { logger } from "./utils/logger";
import ShowTicketService from "./services/TicketServices/ShowTicketService";

export const TransferTicketQueue = async (): Promise<void> => {
  const io = getIO();

  // Buscar tickets pendientes sin fila asignada
  const tickets = await Ticket.findAll({
    where: {
      status: "pending",
      queueId: { [Op.is]: null },
    },
  });

  for (const ticket of tickets) {
    const wpp = await Whatsapp.findOne({
      where: { id: ticket.whatsappId },
    });

    if (!wpp || !wpp.timeToTransfer || !wpp.transferQueueId || wpp.timeToTransfer === 0) {
      continue;
    }

    const deadline = new Date(ticket.updatedAt);
    deadline.setMinutes(deadline.getMinutes() + wpp.timeToTransfer);

    if (new Date() > deadline) {
      await ticket.update({ queueId: wpp.transferQueueId });

      const ticketTraking = await TicketTraking.findOne({
        where: { ticketId: ticket.id },
        order: [["createdAt", "DESC"]],
      });

      if (ticketTraking) {
        await ticketTraking.update({
          queuedAt: moment().toDate(),
          queueId: wpp.transferQueueId,
        });
      }

      const currentTicket = await ShowTicketService(ticket.id, ticket.companyId);

      io.to(ticket.status)
        .to("notification")
        .to(ticket.id.toString())
        .emit(`company-${ticket.companyId}-ticket`, {
          action: "update",
          ticket: currentTicket,
          traking: "created ticket 33",
        });

      logger.info(
        `Transferencia de ticket automática - Ticket ID: ${ticket.id}, Nueva Fila: ${wpp.transferQueueId}`
      );
    }
  }
};
