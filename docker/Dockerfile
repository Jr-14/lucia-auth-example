FROM node:22-alpine

WORKDIR /app

COPY . .
RUN npm install

EXPOSE 8080

CMD ["npm", "run", "dev:watch"]
