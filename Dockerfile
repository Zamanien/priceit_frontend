FROM alpine

RUN apk add --update nodejs npm

ENV env_file=.env
WORKDIR /src
COPY package.json .

RUN npm i

COPY . .

# EXPOSE [Port you mentioned in the vite.config file]
EXPOSE ${LOCAL_SERVER_PORT}

CMD ["npm", "run", "dev"]