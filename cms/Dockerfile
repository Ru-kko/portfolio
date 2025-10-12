FROM node:22.20.0-alpine AS base

ENV PNPM_HOME="/pnpm"
ENV PATH="$PNPM_HOME:$PATH"
RUN corepack enable

FROM base AS deps
RUN apk add --no-cache libc6-compat
WORKDIR /app

COPY package*.json pnpm-lock.yaml ./
RUN pnpm i --frozen-lockfile

FROM base AS production-deps

RUN apk add --no-cache libc6-compat
WORKDIR /app

COPY package*.json pnpm-lock.yaml ./
RUN pnpm install --frozen-lockfile --prod

FROM base AS builder
WORKDIR /app

ENV NEXT_TELEMETRY_DISABLED 1

COPY --from=deps /app/node_modules ./node_modules
COPY . .

RUN pnpm run build

FROM production-deps AS runner

ENV NEXT_TELEMETRY_DISABLED 1
ENV NODE_ENV production
ENV DB_CONNECTION_STRING=
ENV PORT=
ENV PAYLOAD_SECRET=
ENV S3_BUCKET=
ENV S3_REGION=
ENV AWS_ACCESS_KEY_ID=
ENV AWS_SECRET_ACCESS_KEY=
ENV USE_MINIO=
ENV MINIO_ENDPOINT=

RUN addgroup --system --gid 1001 nodejs
RUN adduser --system --uid 1001 nextjs

RUN mkdir .next
RUN chown nextjs:nodejs .next

COPY --from=builder --chown=nextjs:nodejs /app/.next ./.next
COPY --from=builder --chown=nextjs:nodejs /app/.next/static ./.next/static
COPY --chown=nextjs:nodejs ./healthcheck.js /app/healthcheck.js

USER nextjs

EXPOSE ${PORT}

ENV PORT ${PORT}

CMD ["pnpm", "start"]
