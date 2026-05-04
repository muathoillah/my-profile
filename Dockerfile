# 1. Install dependencies
FROM node:20-alpine AS deps
WORKDIR /app

# Install dependencies based on lock file
COPY package.json package-lock.json* ./
RUN npm ci

# 2. Build the app
FROM node:20-alpine AS builder
WORKDIR /app

COPY --from=deps /app/node_modules ./node_modules
COPY . .

RUN npm run build

# 3. Production image (small & clean)
FROM node:20-alpine AS runner
WORKDIR /app

ENV NODE_ENV=production

# Create non-root user (security best practice)
RUN addgroup -S app && adduser -S app -G app

# Copy only necessary files
COPY --from=builder /app/.next ./.next
COPY --from=builder /app/public ./public
COPY --from=builder /app/package.json ./package.json
COPY --from=builder /app/node_modules ./node_modules

USER app
EXPOSE 3000

CMD ["npm", "start"]