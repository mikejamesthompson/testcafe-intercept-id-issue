FROM node:20-alpine

RUN mkdir -p /usr/src/app
WORKDIR /usr/src/app

RUN apk add chromium-swiftshader

ENV CHROME_BIN=/usr/bin/chromium-browser \
  CHROME_PATH=/usr/lib/chromium/

COPY package.json package-lock.json ./
RUN npm install

COPY index.html destination.html test.js test.sh ./
