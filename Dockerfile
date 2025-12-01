# ========= BUILD STAGE =========
FROM node:20-alpine AS build
WORKDIR /app

COPY package*.json ./
RUN npm install

COPY . .

RUN npm run build  # Output = .next/

# ========= RUNTIME STAGE =========
FROM node:20-alpine AS runtime
WORKDIR /app

COPY package*.json ./
RUN npm install --production

# Copy hasil build
COPY --from=build /app/.next ./.next
COPY --from=build /app/public ./public

EXPOSE 3029

CMD ["npm", "start"]
