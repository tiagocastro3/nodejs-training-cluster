# Etapa de compilação
FROM node:14 AS builder
WORKDIR /app

COPY package*.json ./

RUN npm install

COPY . .

RUN npm run build

# Etapa de produção
FROM node:latest

WORKDIR /app

COPY --from=builder /app/dist ./dist

COPY package*.json ./

RUN npm install --production

EXPOSE 80

CMD ["node", "dist/index.js"]