FROM node:16-alpine

WORKDIR /app

COPY package.json .
COPY bun.lockb .

RUN npm i

COPY prisma ./prisma
RUN npx prisma generate

COPY . .

RUN npm run build

CMD [ "npm", "start" ]
