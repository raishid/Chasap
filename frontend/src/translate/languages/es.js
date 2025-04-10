const messages = {
  es: {
    translations: {
      signup: {
        title: "Registrarse",
        toasts: {
          success: "¡Usuario creado con éxito! ¡Inicia sesión!",
          fail: "Error al crear el usuario. Verifique los datos ingresados.",
        },
        form: {
          name: "Nombre",
          email: "Correo electrónico",
          password: "Contraseña",
        },
        buttons: {
          submit: "Registrar",
          login: "¿Ya tienes una cuenta? ¡Inicia sesión!",
        },
      },
      login: {
        title: "Iniciar sesión",
        form: {
          email: "Correo electrónico",
          password: "Contraseña",
        },
        buttons: {
          submit: "Entrar",
          register: "¡Regístrate ahora!",
        },
      },
      plans: {
        form: {
          name: "Nombre",
          users: "Usuarios",
          connections: "Conexiones",
          campaigns: "Campañas",
          schedules: "Programaciones",
          enabled: "Habilitado",
          disabled: "Deshabilitado",
          clear: "Cancelar",
          delete: "Eliminar",
          save: "Guardar",
          yes: "Sí",
          no: "No",
          money: "€",
        },
      },
      companies: {
        title: "Registrar empresa",
        form: {
          name: "Nombre de la empresa",
          plan: "Plan",
          token: "Token",
          submit: "Registrar",
          success: "¡Empresa registrada con éxito!",
        },
      },
      auth: {
        toasts: {
          success: "¡Inicio de sesión exitoso!",
        },
        token: "Token",
      },
      dashboard: {
        conexAct: "Conexiones activas",
        companies: "Empresas",
        inConv: "En Conversa",
        waiting: "Esperando",
        completed: "Completados",
        newContacts: "Nuevos contactos",
        tmConversations: "T.M. Conversa",
        evaluations: "Evaluaciones",
        agent: "Agente",
        status: "Status",
        tmEspera: "T.M. Espera",
        charts: {
          perDay: {
            title: "Atenciones hoy: ",
          },
        },
      },
      connections: {
        title: "Conexiones",
        toasts: {
          deleted: "¡Conexión con WhatsApp eliminada con éxito!",
        },
        confirmationModal: {
          deleteTitle: "Eliminar",
          deleteMessage: "¿Estás seguro? Esta acción no se puede revertir.",
          disconnectTitle: "Desconectar",
          disconnectMessage:
            "¿Estás seguro? Necesitarás leer el código QR nuevamente.",
        },
        buttons: {
          add: "Agregar WhatsApp",
          disconnect: "Desconectar",
          tryAgain: "Intentar nuevamente",
          qrcode: "CÓDIGO QR",
          newQr: "Nuevo CÓDIGO QR",
          connecting: "Conectando",
        },
        toolTips: {
          disconnected: {
            title: "Error al iniciar sesión en WhatsApp",
            content:
              "Asegúrate de que tu celular esté conectado a Internet e intenta nuevamente, o solicita un nuevo código QR.",
          },
          qrcode: {
            title: "Esperando la lectura del código QR",
            content:
              "Haz clic en el botón 'CÓDIGO QR' y lee el código QR con tu celular para iniciar sesión.",
          },
          connected: {
            title: "¡Conexión establecida!",
          },
          timeout: {
            title: "Se perdió la conexión con el celular",
            content:
              "Asegúrate de que tu celular esté conectado a Internet y de que WhatsApp esté abierto, o haz clic en el botón 'Desconectar' para obtener un nuevo código QR.",
          },
        },
        table: {
          name: "Nombre",
          number: "Número",
          status: "Estado",
          lastUpdate: "Última actualización",
          default: "Predeterminado",
          actions: "Acciones",
          session: "Sesión",
        },
      },
      whatsappModal: {
        title: {
          add: "Agregar WhatsApp",
          edit: "Editar WhatsApp",
        },
        tabs: {
          general: "General",
          messages: "Mensajes",
          assessments: "Evaluaciones",
          integrations: "Integraciones",
          schedules: "Horario de atención",
        },
        form: {
          name: "Nombre",
          default: "Predeterminado",
          sendIdQueue: "Cola",
          timeSendQueue: "Redirigir a la cola en X minutos",
          queueRedirection: "Redirección de Cola",
          outOfHoursMessage: "Mensaje fuera de horario",
          queueRedirectionDesc: "Selecciona una cola para redirigir los contactos sin cola.",
          prompt: "Prompt",
          expiresTicket: "Cerrar chats abiertos después de x minutos",
          expiresInactiveMessage: "Mensaje de cierre por inactividad",
          greetingMessage: "Mensaje de saludo",
          complationMessage: "Mensaje de finalización",
          sendIdQueue: "Cola",
        },
        buttons: {
          okAdd: "Agregar",
          okEdit: "Guardar",
          cancel: "Cancelar",
        },
        success: "WhatsApp guardado con éxito.",
      },
      qrCode: {
        message: "Lee el código QR para iniciar sesión",
      },
      contacts: {
        title: "Contactos",
        toasts: {
          deleted: "¡Contacto eliminado con éxito!",
          deletedAll: "¡Todos los contactos eliminados con éxito!",
        },
        searchPlaceholder: "Buscar...",
        confirmationModal: {
          deleteTitle: "Eliminar",
          deleteAllTitle: "Eliminar Todos",
          importTitle: "Importar contactos",
          deleteMessage: "¿Estás seguro de que deseas eliminar este contacto? Todos los tickets relacionados se perderán.",
          deleteAllMessage: "¿Estás seguro de que deseas eliminar todos los contactos? Todos los tickets relacionados se perderán.",
          importMessage: "¿Deseas importar todos los contactos del teléfono?",
        },
        buttons: {
          import: "Importar Contactos",
          importSheet: "Importar Excel",
          add: "Agregar Contacto",
          export: "Exportar Contactos",
          delete: "Eliminar Todos los Contactos",
        },
        table: {
          name: "Nombre",
          whatsapp: "WhatsApp",
          email: "Correo electrónico",
          actions: "Acciones",
          interaction: "Última interacción",
        },
      },
      queueIntegrationModal: {
        title: {
          add: "Agregar proyecto",
          edit: "Editar proyecto",
        },
        form: {
          id: "ID",
          type: "Tipo",
          name: "Nombre",
          projectName: "Nombre del Proyecto",
          language: "Idioma",
          jsonContent: "JsonContent",
          urlN8N: "URL",
          typebotSlug: "Typebot - Slug",
          typebotExpires: "Tiempo en minutos para expirar una conversación",
          typebotKeywordFinish: "Palabra para finalizar el ticket",
          typebotKeywordRestart: "Palabra para reiniciar el flujo",
          typebotRestartMessage: "Mensaje al reiniciar la conversación",
          typebotUnknownMessage: "Mensaje de opción inválida",
          typebotDelayMessage: "Intervalo (ms) entre mensajes",
        },
        buttons: {
          okAdd: "Agregar",
          okEdit: "Guardar",
          cancel: "Cancelar",
          test: "Probar Bot",
        },
        messages: {
          testSuccess: "¡Integración probada con éxito!",
          addSuccess: "¡Integración agregada con éxito!",
          editSuccess: "¡Integración editada con éxito!",
        },
      },
      sideMenu: {
        name: "Menú lateral inicial",
        note: "Si está habilitado, el menú lateral comenzará cerrado",
        options: {
          enabled: "Abierto",
          disabled: "Cerrado",
        },
      },
      promptModal: {
        form: {
          name: "Nombre",
          prompt: "Prompt",
          voice: "Voz",
          max_tokens: "Máximo de Tokens en la respuesta",
          temperature: "Temperatura",
          apikey: "API Key",
          max_messages: "Máximo de mensajes en el historial",
          voiceKey: "Clave de la API de Voz",
          voiceRegion: "Región de Voz",
        },
        success: "¡Prompt guardado con éxito!",
        title: {
          add: "Agregar Prompt",
          edit: "Editar Prompt",
        },
        buttons: {
          okAdd: "Agregar",
          okEdit: "Guardar",
          cancel: "Cancelar",
        },
      },
      prompts: {
        title: "Prompts",
        table: {
          name: "Nombre",
          queue: "Sector/Fila",
          max_tokens: "Máximo Tokens Respuesta",
          actions: "Acciones",
        },
        confirmationModal: {
          deleteTitle: "Eliminar",
          deleteMessage: "¿Estás seguro? ¡Esta acción no puede revertirse!",
        },
        buttons: {
          add: "Agregar Prompt",
        },
      },
      contactModal: {
        title: {
          add: "Agregar contacto",
          edit: "Editar contacto",
        },
        form: {
          mainInfo: "Datos del contacto",
          extraInfo: "Información adicional",
          name: "Nombre",
          number: "Número de WhatsApp",
          email: "Correo electrónico",
          extraName: "Nombre del campo",
          extraValue: "Valor",
          disableBot: "Deshabilitar chatbot",
          whatsapp: "Conexión de origen: ",
        },
        buttons: {
          addExtraInfo: "Agregar información",
          okAdd: "Agregar",
          okEdit: "Guardar",
          cancel: "Cancelar",
        },
        success: "Contacto guardado con éxito.",
      },
      queueModal: {
        title: {
          add: "Agregar fila",
          edit: "Editar fila",
        },
        confirmationModal: {
          deleteTitle: "Eliminar",
        },
        form: {
          name: "Nombre",
          color: "Color",
          greetingMessage: "Mensaje de saludo",
          complationMessage: "Mensaje de finalización",
          outOfHoursMessage: "Mensaje fuera de horario",
          ratingMessage: "Mensaje de evaluación",
          filas: "Filas",
          token: "Token",
          orderQueue: "Orden de la fila (Bot)",
          integrationId: "Integración",
        },
        buttons: {
          okAdd: "Agregar",
          okEdit: "Guardar",
          cancel: "Cancelar",
          attach: "Adjuntar archivo",
        },
        serviceHours: {
          dayWeek: "Día de la semana",
          startTimeA: "Hora inicial - 1",
          endTimeA: "Hora final - 1",
          startTimeB: "Hora inicial - 2",
          endTimeB: "Hora final - 2",
          monday: "Lunes",
          tuesday: "Martes",
          wednesday: "Miércoles",
          thursday: "Jueves",
          friday: "Viernes",
          saturday: "Sábado",
          sunday: "Domingo",
        },
      },
      userModal: {
        title: {
          add: "Agregar usuario",
          edit: "Editar usuario",
        },
        form: {
          name: "Nombre",
          email: "Correo electrónico",
          password: "Contraseña",
          profile: "Perfil",
          whatsapp: "Conexión predeterminada",
          allTicket: "Ticket sin cola [Invisible]",
          allTicketEnabled: "Habilitado",
          allTicketDesabled: "Deshabilitado",
        },
        buttons: {
          okAdd: "Agregar",
          okEdit: "Guardar",
          cancel: "Cancelar",
        },
        success: "Usuario guardado con éxito.",
      },
      scheduleModal: {
        title: {
          add: "Nueva programación",
          edit: "Editar programación",
        },
        form: {
          body: "Mensaje",
          contact: "Contacto",
          sendAt: "Fecha de programación",
          sentAt: "Fecha de envío",
        },
        buttons: {
          okAdd: "Agregar",
          okEdit: "Guardar",
          cancel: "Cancelar",
        },
        success: "Programación guardada con éxito.",
      },
      tagModal: {
        title: {
          add: "Nueva etiqueta",
          edit: "Editar etiqueta",
        },
        form: {
          name: "Nombre",
          color: "Color",
        },
        buttons: {
          okAdd: "Agregar",
          okEdit: "Guardar",
          cancel: "Cancelar",
        },
        success: "Etiqueta guardada con éxito.",
      },
      chat: {
        noTicketMessage: "Selecciona un ticket para comenzar a chatear.",
      },
      uploads: {
        titles: {
          titleUploadMsgDragDrop: "ARRASTRE Y SUELTE LOS ARCHIVOS EN EL CAMPO DE ABAJO",
          titleFileList: "Lista de archivo(s)"
        },
      },
      ticketsManager: {
        buttons: {
          newTicket: "Nuevo",
          closeallTicket: "Cerrar"
        },
      },
      ticketsQueueSelect: {
        placeholder: "Filas",
      },
      tickets: {
        inbox: {
          closedAllTickets: "¿Cerrar todos los tickets?",
          closedAll: "Cerrar Todos",
          newTicket: "Nuevo Ticket",
          yes: "SÍ",
          no: "NO",
          open: "Abiertos",
          resolverd: "Resueltos",
        },
        toasts: {
          deleted: "El servicio que estabas atendiendo fue eliminado.",
        },
        notification: {
          message: "Mensaje de",
        },
        tabs: {
          open: { title: "Abiertas" },
          closed: { title: "Resueltos" },
          search: { title: "Búsqueda" },
        },
        search: {
          placeholder: "Buscar servicio y mensajes",
          filterConnections: "Filtro por conexiones",
          filterContacts: "Filtro por contacto",
          filterConections: "Filtro por conexión",
          filterConectionsOptions: {
            open: "Abierto",
            closed: "Cerrado",
            pending: "Pendiente",
          },
          filterUsers: "Filtro por usuarios",
          ticketsPerPage: "Tickets por página"
        },
        buttons: {
          showAll: "Todos",
        },
      },
      transferTicketModal: {
        title: "Transferir Ticket",
        fieldLabel: "Escribe para buscar usuarios",
        fieldQueueLabel: "Transferir a fila",
        fieldQueuePlaceholder: "Selecciona una fila",
        noOptions: "Ningún usuario encontrado con este nombre",
        buttons: {
          ok: "Transferir",
          cancel: "Cancelar",
        },
      },
      ticketsList: {
        pendingHeader: "Pendiente",
        assignedHeader: "Atendiendo",
        noTicketsTitle: "¡Nada aquí!",
        noTicketsMessage:
          "No se encontró ningún servicio con ese estado o término de búsqueda",
        buttons: {
          accept: "Aceptar",
          closed: "Finalizar",
          transfer: "Transferir",
          reopen: "Reabrir",
          exportAsPDF: "Exportar en PDF"
        },
      },
      newTicketModal: {
        title: "Crear Ticket",
        fieldLabel: "Escribe para buscar el contacto",
        add: "Agregar",
        buttons: {
          ok: "Guardar",
          cancel: "Cancelar",
        },
      },
      mainDrawer: {
        listItems: {
          dashboard: "Tablero",
          connections: "Conexiones",
          tickets: "Mensajes",
          quickMessages: "Respuestas rápidas",
          contacts: "Contactos",
          queues: "Filas y Chatbot",
          tags: "Etiquetas",
          administration: "Administración",
          users: "Usuarios",
          settings: "Configuraciones",
          helps: "Ayuda",
          messagesAPI: "API",
          schedules: "Programaciones",
          campaigns: "Campañas",
          annoucements: "Anuncios",
          chats: "Chat Interno",
          financeiro: "Finanzas",
          files: "Lista de archivos",
          prompts: "Open.AI",
          reports: "Reportes",
          queueIntegration: "Integraciones",
        },
        appBar: {
          notRegister: "Sin notificaciones",
          user: {
            profile: "Perfil",
            logout: "Cerrar sesión",
          },
        },
        menuNew: {
          tasks: "Tareas",
          newTask: "Nueva Tarea", 
        },
      },
      queueIntegration: {
        title: "Integraciones",
        table: {
          id: "ID",
          type: "Tipo",
          name: "Nombre",
          projectName: "Nombre del Proyecto",
          language: "Idioma",
          lastUpdate: "Última actualización",
          actions: "Acciones",
        },
        buttons: {
          add: "Agregar Proyecto",
        },
        searchPlaceholder: "Buscar...",
        confirmationModal: {
          deleteTitle: "Eliminar",
          deleteMessage:
            "¿Estás seguro? ¡Esta acción no puede revertirse! Se eliminará de las filas y conexiones vinculadas",
        },
      },
        reports: {
          title: "Informes de Atención",
          table: {
            id: "Ticket",
            user: "Usuario",
            dateOpen: "Fecha de Apertura",
            dateClose: "Fecha de Cierre",
            NPS: "NPS",
            status: "Estado",
            whatsapp: "Conexión",
            queue: "Cola",
            actions: "Acciones",
            lastMessage: "Últ. Mensaje",
            contact: "Cliente",
            supportTime: "Tiempo de Atención"
          },
          buttons: {
            filter: "Aplicar Filtro",
          },
          searchPlaceholder: "Buscar...",
        },
        files: {
          title: "Lista de Archivos",
          table: {
            name: "Nombre",
            contacts: "Contactos",
            actions: "Acción",
          },
          toasts: {
            deleted: "Lista eliminada con éxito!",
            deletedAll: "¡Todas las listas han sido eliminadas con éxito!",
          },
          buttons: {
            add: "Agregar",
            deleteAll: "Eliminar Todos",
          },
          confirmationModal: {
            deleteTitle: "Eliminar",
            deleteAllTitle: "Eliminar Todos",
            deleteMessage: "¿Está seguro de que desea eliminar esta lista?",
            deleteAllMessage: "¿Está seguro de que desea eliminar todas las listas?",
          },
        },
        messagesAPI: {
          title: "API",
          textMessage: {
            number: "Número",
            body: "Mensaje",
            token: "Token registrado",
          },
          mediaMessage: {
            number: "Número",
            body: "Nombre del archivo",
            media: "Archivo",
            token: "Token registrado",
          },
        },
        notifications: {
          noTickets: "No hay notificaciones.",
        },
        quickMessages: {
          title: "Respuestas Rápidas",
          searchPlaceholder: "Buscar...",
          noAttachment: "Sin archivo adjunto",
          confirmationModal: {
            deleteTitle: "Eliminación",
            deleteMessage: "¡Esta acción es irreversible! ¿Desea continuar?",
          },
          buttons: {
            add: "Agregar",
            attach: "Adjuntar Archivo",
            cancel: "Cancelar",
            edit: "Editar",
          },
          toasts: {
            success: "Atajo agregado con éxito!",
            deleted: "Atajo eliminado con éxito!",
          },
          dialog: {
            title: "Mensaje Rápido",
            shortcode: "Atajo",
            message: "Respuesta",
            save: "Guardar",
            cancel: "Cancelar",
            geral: "Permitir edición",
            add: "Agregar",
            edit: "Editar",
            visao: "Permitir vista",
            geral: 'Global',
          },
          table: {
            shortcode: "Atajo",
            message: "Mensaje",
            actions: "Acciones",
            mediaName: "Nombre del Archivo",
            status: 'Global',
          },
        },
        messageVariablesPicker: {
          label: "Variables disponibles",
          vars: {
            contactFirstName: "Primer Nombre",
            contactName: "Nombre",
            greeting: "Saludo",
            protocolNumber: "Protocolo",
            date: "Fecha",
            hour: "Hora",
          },
        },
        contactLists: {
          title: "Listas de Contactos",
          table: {
            name: "Nombre",
            contacts: "Contactos",
            actions: "Acciones",
          },
          buttons: {
            add: "Nueva Lista",
          },
          dialog: {
            name: "Nombre",
            company: "Empresa",
            okEdit: "Editar",
            okAdd: "Agregar",
            add: "Agregar",
            edit: "Editar",
            cancel: "Cancelar",
          },
          confirmationModal: {
            deleteTitle: "Eliminar",
            deleteMessage: "Esta acción no puede deshacerse.",
          },
          toasts: {
            deleted: "Registro eliminado",
          },
        },
        contactListItems: {
          title: "Contactos",
          searchPlaceholder: "Buscar",
          buttons: {
            add: "Nuevo",
            lists: "Listas",
            import: "Importar",
          },
          dialog: {
            name: "Nombre",
            number: "Número",
            whatsapp: "Whatsapp",
            email: "Correo electrónico",
            okEdit: "Editar",
            okAdd: "Agregar",
            add: "Agregar",
            edit: "Editar",
            cancel: "Cancelar",
          },
          table: {
            name: "Nombre",
            number: "Número",
            whatsapp: "Whatsapp",
            email: "Correo electrónico",
            actions: "Acciones",
          },
          confirmationModal: {
            deleteTitle: "Eliminar",
            deleteMessage: "Esta acción no puede deshacerse.",
            importMessage: "¿Desea importar los contactos de esta hoja?",
            importTitlte: "Importar",
          },
          toasts: {
            deleted: "Registro eliminado",
          },
        },
        campaigns: {
          title: "Campañas",
          searchPlaceholder: "Buscar",
          buttons: {
            add: "Nueva Campaña",
            contactLists: "Listas de Contactos",
          },
          table: {
            name: "Nombre",
            whatsapp: "Conexión",
            contactList: "Lista de Contactos",
            status: "Estado",
            scheduledAt: "Agendado para",
            completedAt: "Completada",
            confirmation: "Confirmación",
            actions: "Acciones",
          },
          dialog: {
            new: "Nueva Campaña",
            update: "Editar Campaña",
            readonly: "Solo Vista",
            form: {
              name: "Nombre",
              message1: "Mensaje 1",
              message2: "Mensaje 2",
              message3: "Mensaje 3",
              message4: "Mensaje 4",
              message5: "Mensaje 5",
              confirmationMessage1: "Mensaje de Confirmación 1",
              confirmationMessage2: "Mensaje de Confirmación 2",
              confirmationMessage3: "Mensaje de Confirmación 3",
              confirmationMessage4: "Mensaje de Confirmación 4",
              confirmationMessage5: "Mensaje de Confirmación 5",
              messagePlaceholder: "Contenido del mensaje",
              whatsapp: "Conexión",
              status: "Estado",
              scheduledAt: "Agendado para",
              confirmation: "Confirmación",
              contactList: "Lista de Contactos",
              tagList: "Lista de Etiquetas",
              fileList: "Lista de Archivos"
            },
            buttons: {
              add: "Agregar",
              edit: "Actualizar",
              okadd: "Ok",
              cancel: "Cancelar Envíos",
              restart: "Reiniciar Envíos",
              close: "Cerrar",
              attach: "Adjuntar Archivo",
            },
          },
          confirmationModal: {
            deleteTitle: "Eliminar",
            deleteMessage: "Esta acción no puede deshacerse.",
          },
          toasts: {
            success: "Operación realizada con éxito",
            cancel: "Campaña cancelada",
            restart: "Campaña reiniciada",
            deleted: "Registro eliminado",
          },
        },
        announcements: {
          active: 'Activo',
          inactive: 'Inactivo',
          title: "Informativos",
          searchPlaceholder: "Buscar",
          buttons: {
            add: "Nuevo Informativo",
            contactLists: "Listas de Informativos",
          },
          table: {
            priority: "Prioridad",
            title: "Título",
            text: "Texto",
            mediaName: "Archivo",
            status: "Estado",
            actions: "Acciones",
          },
          dialog: {
            edit: "Edición de Informativo",
            add: "Nuevo Informativo",
            update: "Editar Informativo",
            readonly: "Solo Vista",
            form: {
              priority: "Prioridad",
              title: "Título",
              text: "Texto",
              mediaPath: "Archivo",
              status: "Estado",
            },
            buttons: {
              add: "Agregar",
              edit: "Actualizar",
              okadd: "Ok",
              cancel: "Cancelar",
              close: "Cerrar",
              attach: "Adjuntar Archivo",
            },
          },
          confirmationModal: {
            deleteTitle: "Eliminar",
            deleteMessage: "Esta acción no puede deshacerse.",
          },
          toasts: {
            success: "Operación realizada con éxito",
            deleted: "Registro eliminado",
          },
        },
        campaignsConfig: {
          title: "Configuración de Campañas",
        },
        queues: {
          title: "Colas & Chatbot",
          table: {
            id: "ID",
            name: "Nombre",
            color: "Color",
            greeting: "Mensaje de saludo",
            actions: "Acciones",
            orderQueue: "Ordenación de la cola (bot)",
          },
          buttons: {
            add: "Agregar cola",
          },
          confirmationModal: {
            deleteTitle: "Eliminar",
            deleteMessage: "¿Está seguro? ¡Esta acción no puede deshacerse! Los tickets de esta cola seguirán existiendo, pero no tendrán más cola asignada.",
          },
        },
        queueSelect: {
          inputLabel: "Filas",
        },
        users: {
          title: "Usuarios",
          table: {
            id: "ID",
            name: "Nombre",
            status: "En Linea",
            email: "Correo electrónico",
            profile: "Perfil",
            actions: "Acciones",
          },
          status: {
            online: "Usuarios en línea",
            offline: "Usuarios fuera de línea",
          },
          buttons: {
            add: "Agregar usuario",
          },
          toasts: {
            deleted: "Usuario eliminado con éxito.",
          },
          confirmationModal: {
            deleteTitle: "Eliminar",
            deleteMessage: "Se perderán todos los datos del usuario. Los tickets abiertos de este usuario serán movidos a la cola.",
          },
        },
        helps: {
          title: "Central de Ayuda",
        },
        schedules: {
          title: "Programaciones",
          confirmationModal: {
            deleteTitle: "¿Está seguro de que desea eliminar esta programación?",
            deleteMessage: "Esta acción no puede deshacerse.",
          },
          table: {
            contact: "Contacto",
            body: "Mensaje",
            sendAt: "Fecha de Programación",
            sentAt: "Fecha de Envío",
            status: "Estado",
            actions: "Acciones",
          },
          buttons: {
            add: "Nueva Programación",
          },
          toasts: {
            deleted: "Programación eliminada con éxito.",
          },
        },
        tags: {
          title: "Etiquetas",
          confirmationModal: {
            deleteTitle: "¿Está seguro de que desea eliminar esta etiqueta?",
            deleteMessage: "Esta acción no puede deshacerse.",
            deleteAllMessage: "¿Está seguro de que desea eliminar todas las etiquetas?",
            deleteAllTitle: "Eliminar Todas",
          },
          table: {
            name: "Nombre",
            color: "Color",
            tickets: "Registros etiquetados",
            actions: "Acciones",
          },
          buttons: {
            add: "Nueva Etiqueta",
            deleteAll: "Eliminar Todas",
          },
          toasts: {
            deletedAll: "¡Todas las etiquetas han sido eliminadas con éxito!",
            deleted: "Etiqueta eliminada con éxito.",
          },
        },
        settings: {
          success: "Configuraciones guardadas con éxito.",
          title: "Configuraciones",
          settings: {
            userCreation: {
              name: "Creación de usuario",
              options: {
                enabled: "Activado",
                disabled: "Desactivado",
              },
            },
          },
        },
        messagesList: {
          header: {
            assignedTo: "Asignado a:",
            buttons: {
              return: "Regresar",
              resolve: "Resolver",
              reopen: "Reabrir",
              accept: "Aceptar",
            },
          },
        },
        messagesInput: {
          placeholderOpen: "Escribe un mensaje",
          placeholderClosed: "Reabre o acepta este ticket para enviar un mensaje.",
          signMessage: "Firmar",
        },
        contactDrawer: {
          header: "Datos del contacto",
          buttons: {
            edit: "Editar contacto",
          },
          extraInfo: "Otra información",
        },
        fileModal: {
          title: {
            add: "Agregar lista de archivos",
            edit: "Editar lista de archivos",
          },
          buttons: {
            okAdd: "Guardar",
            okEdit: "Editar",
            cancel: "Cancelar",
            fileOptions: "Agregar archivo",
          },
          form: {
            name: "Nombre de la lista de archivos",
            message: "Detalles de la lista",
            fileOptions: "Lista de archivos",
            extraName: "Mensaje para enviar con archivo",
            extraValue: "Valor de la opción",
          },
          success: "¡Lista de archivos guardada con éxito!",
        },
        ticketOptionsMenu: {
          schedule: "Programar",
          delete: "Eliminar",
          transfer: "Transferir",
          registerAppointment: "Observaciones del Contacto",
          appointmentsModal: {
            title: "Observaciones del Contacto",
            textarea: "Observación",
            placeholder: "Inserte aquí la información que desea registrar",
          },
          confirmationModal: {
            title: "Eliminar ticket",
            titleFrom: "del contacto ",
            message: "¡Atención! Se perderán todos los mensajes relacionados con el ticket.",
          },
          buttons: {
            delete: "Eliminar",
            cancel: "Cancelar",
          },
        },
        confirmationModal: {
          buttons: {
            confirm: "Ok",
            cancel: "Cancelar",
          },
        },
        messageOptionsMenu: {
          delete: "Eliminar",
          reactionSuccess: "Reacción añadida",
          reply: "Responder",
          edit: "Editar Mensaje",
          forward: "Reenviar",
          toForward: "Reenviar",
          react: "Reaccionar",
          confirmationModal: {
            title: "¿Eliminar mensaje?",
            message: "Esta acción no puede deshacerse.",
          },
        },
        general: {
          new: "Nuevo",
          open: "Abierto",
        },
        backendErrors: {
          ERR_NO_OTHER_WHATSAPP: "Debe haber al menos un WhatsApp por defecto.",
          ERR_NO_DEF_WAPP_FOUND: "No se encontró ningún WhatsApp por defecto. Verifique la página de conexiones.",
          ERR_WAPP_NOT_INITIALIZED: "Esta sesión de WhatsApp no ha sido inicializada. Verifique la página de conexiones.",
          ERR_WAPP_CHECK_CONTACT: "No se pudo verificar el contacto de WhatsApp. Verifique la página de conexiones",
          ERR_WAPP_INVALID_CONTACT: "Este no es un número de WhatsApp válido.",
          ERR_WAPP_DOWNLOAD_MEDIA: "No se pudo descargar el archivo de WhatsApp. Verifique la página de conexiones.",
          ERR_INVALID_CREDENTIALS: "Error de autenticación. Intente de nuevo.",
          ERR_SENDING_WAPP_MSG: "Error al enviar el mensaje de WhatsApp. Verifique la página de conexiones.",
          ERR_DELETE_WAPP_MSG: "No se pudo eliminar el mensaje de WhatsApp.",
          ERR_OTHER_OPEN_TICKET: "Ya existe un ticket abierto para este contacto.",
          ERR_SESSION_EXPIRED: "Sesión expirada. Por favor ingrese de nuevo.",
          ERR_USER_CREATION_DISABLED: "La creación de usuarios ha sido deshabilitada por el administrador.",
          ERR_NO_PERMISSION: "No tiene permiso para acceder a este recurso.",
          ERR_DUPLICATED_CONTACT: "Ya existe un contacto con este número.",
          ERR_NO_SETTING_FOUND: "No se encontraron configuraciones con este ID.",
          ERR_NO_CONTACT_FOUND: "No se encontró ningún contacto con este ID.",
          ERR_NO_TICKET_FOUND: "No se encontró ningún ticket con este ID.",
          ERR_NO_USER_FOUND: "No se encontró ningún usuario con este ID.",
          ERR_NO_WAPP_FOUND: "No se encontró ningún WhatsApp con este ID.",
          ERR_CREATING_MESSAGE: "Error al crear el mensaje en la base de datos.",
          ERR_CREATING_TICKET: "Error al crear el ticket en la base de datos.",
          ERR_FETCH_WAPP_MSG: "Error al buscar el mensaje en WhatsApp, tal vez sea demasiado antiguo.",
          ERR_QUEUE_COLOR_ALREADY_EXISTS: "Este color ya está en uso, elija otro.",
          ERR_WAPP_GREETING_REQUIRED: "El mensaje de saludo es obligatorio cuando hay más de una cola.",
        },
      },
    },
  };
  
  export { messages };
  
