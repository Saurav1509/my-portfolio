FROM node:latest

WORKDIR /app

COPY package.json .
COPY bun.lockb .

RUN npm i

COPY . .

RUN npm run build

CMD [ "npm", "start" ]