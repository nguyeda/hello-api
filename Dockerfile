FROM node:12-alpine

RUN apk update && apk upgrade
RUN mkdir -p /app
WORKDIR /app

COPY index.js /app
COPY package.json /app/
COPY yarn.lock /app/

RUN yarn install --prod

EXPOSE 3000

CMD ["node", "index.js"]
