FROM node:22-alpine

WORKDIR /app

COPY ./package.json .

RUN npm install
RUN npm install uid

COPY . .

EXPOSE 8080

CMD ["npm", "run", "dev"]