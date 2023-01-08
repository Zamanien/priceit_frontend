FROM node:18

WORKDIR /

COPY package.json .
COPY tsconfig.json .
COPY vite.config.ts .

RUN npm install

COPY . .

CMD [ "npm", "run", "dev" ]