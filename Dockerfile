FROM node:14

WORKDIR /app

COPY ./ ./

RUN yarn add expo-cli
RUN yarn install

ENTRYPOINT [ "yarn", "expo", "start:web" ]
