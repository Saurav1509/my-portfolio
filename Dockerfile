FROM node:latest

WORKDIR /app

COPY package.json .
COPY bun.lockb .
COPY prisma/. /prisma/

RUN npm i
RUN npx prisma generate

COPY . .

RUN npm run build

CMD [ "npm", "start" ]
