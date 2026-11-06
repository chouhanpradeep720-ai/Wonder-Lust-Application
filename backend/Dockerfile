# ==========================================
# Stage 1: Builder
# ==========================================
FROM node:22-bookworm-slim AS builder

WORKDIR /app

COPY package*.json ./

RUN npm ci

COPY . .

# Remove development dependencies
RUN npm prune --omit=dev


# ==========================================
# Stage 2: Production
# ==========================================
FROM node:22-bookworm-slim AS production

WORKDIR /app

ENV NODE_ENV=production

# Copy production dependencies and application
COPY --from=builder --chown=node:node /app /app

USER node

EXPOSE 8080

CMD ["node", "server.js"]
