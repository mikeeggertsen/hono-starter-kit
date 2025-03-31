FROM node:20-alpine AS base

ENV PNPM_HOME="/pnpm"
ENV PATH="$PNPM_HOME:$PATH"
ENV NODE_ENV production

RUN apk update
RUN npm install -g pnpm

FROM base AS builder

RUN apk add --no-cache gcompat
WORKDIR /app

COPY package*json tsconfig.json ./
COPY src /app/src

RUN pnpm i && \
    pnpm run build && \
    pnpm prune --production

FROM base AS runner
WORKDIR /app

RUN addgroup --system --gid 1001 nodejs
RUN adduser --system --uid 1001 hono

COPY --from=builder --chown=hono:nodejs /app/node_modules /app/node_modules
COPY --from=builder --chown=hono:nodejs /app/dist /app/dist
COPY --from=builder --chown=hono:nodejs /app/package.json /app/package.json

USER hono
EXPOSE 3000

CMD ["node", "/app/dist/index.js"]