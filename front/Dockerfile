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
ENV HOST=
ENV PORT=4321
ENV GRAPHQL_HOST=
ENV APP_DOMAIN=

WORKDIR /home/node/app
COPY package*.json  ./
COPY pnpm-lock.yaml ./
COPY entry.sh ./

RUN pnpm install --prod --frozen-lockfile
COPY --from=builder /home/node/app/dist ./dist

EXPOSE ${PORT}

CMD /bin/bash ./entry.sh ${HOST} ${PORT} ./dist/server/entry.mjs
