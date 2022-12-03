FROM node

ADD . /src

WORKDIR /usr/src/app

RUN rm -rf node_modules yarn.lock package-lock.json

COPY ./package*.json ./

RUN npm install

COPY . .

EXPOSE 3333
EXPOSE 5432
EXPOSE 6379

CMD npm run dev
