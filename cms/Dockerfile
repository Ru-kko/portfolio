FROM node:20-slim AS base

ENV PNPM_HOME="/pnpm"
ENV PATH="$PNPM_HOME:$PATH"
RUN corepack enable

FROM base as builder

WORKDIR /home/node/app
COPY package*.json ./

COPY . .
RUN pnpm install --frozen-lockfile
RUN pnpm run build

FROM base as runtime

ENV NODE_ENV=production
ENV PAYLOAD_CONFIG_PATH=dist/payload.config.js
ENV DB_NAME=portfolio
ENV DB_USERNAME=
ENV DB_PASSWORD=
ENV DB_HOST=localhost
ENV DB_PORT=27017
ENV PORT=8080
ENV PAYLOAD_SECRET=

WORKDIR /home/node/app
COPY package*.json  ./
COPY pnpm-lock.yaml ./

RUN pnpm install --prod --frozen-lockfile
COPY --from=builder /home/node/app/dist ./dist
COPY --from=builder /home/node/app/build ./build

EXPOSE ${PORT}

CMD ["node", "dist/server.js"]
