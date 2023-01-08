FROM node:18

WORKDIR /

COPY package.json .
# COPY tsconfig.json .
# COPY vite.config.ts .

RUN npm install


COPY . .
RUN npm run build
CMD [ "npm", "run", "dev" ]