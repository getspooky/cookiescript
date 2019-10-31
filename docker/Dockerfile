FROM node:10.16.3-alpine

LABEL MAINTAINER Yasser Ameur El Idrissi <getspookydev@gmail.com>

WORKDIR /app

COPY ../package*.json ./

RUN npm i

COPY .. ./

RUN npm i -g pm2

EXPOSE 4200

CMD ["npm","start","serve"]
