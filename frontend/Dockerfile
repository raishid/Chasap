FROM oven/bun:debian
ARG REACT_APP_BACKEND_URL
ARG REACT_APP_HOURS_CLOSE_TICKETS_AUTO

ENV REACT_APP_BACKEND_URL=${REACT_APP_BACKEND_URL}
ENV REACT_APP_HOURS_CLOSE_TICKETS_AUTO=${REACT_APP_HOURS_CLOSE_TICKETS_AUTO}

RUN apt-get update && apt-get install -y \
  curl \
  ca-certificates \
  gnupg \
  bash \
  build-essential

# Variables de entorno para NVM
ENV NVM_DIR=/root/.nvm
ENV NODE_VERSION=16.17.1

# Instalar NVM y Node.js
RUN curl -o- https://raw.githubusercontent.com/nvm-sh/nvm/v0.39.7/install.sh | bash && \
    . "$NVM_DIR/nvm.sh" && \
    nvm install $NODE_VERSION && \
    nvm use $NODE_VERSION && \
    nvm alias default $NODE_VERSION && \
    # Crear enlaces simbólicos globales
    ln -s "$NVM_DIR/versions/node/v$NODE_VERSION/bin/node" /usr/local/bin/node && \
    ln -s "$NVM_DIR/versions/node/v$NODE_VERSION/bin/npm" /usr/local/bin/npm && \
    ln -s "$NVM_DIR/versions/node/v$NODE_VERSION/bin/npx" /usr/local/bin/npx

WORKDIR /usr/src/app

COPY . .

RUN bun install

RUN bun run build

EXPOSE 3001


CMD ["bun", "run", "start:prod"]

