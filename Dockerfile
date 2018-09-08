FROM node:10

WORKDIR /usr/app

COPY package*.json ./

RUN ls

COPY . .

RUN ls

RUN pwd

RUN npm install

EXPOSE 3000

CMD node server.js