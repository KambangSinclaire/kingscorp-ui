FROM node:16-alpine

WORKDIR /usr/src/app

COPY ./package.json .

RUN npm install --legacy-peer-deps

COPY . ./

RUN npm run build 

EXPOSE 7000

VOLUME [ "./:/usr/src/app" ]

CMD [ "npm", "run", "start" ]