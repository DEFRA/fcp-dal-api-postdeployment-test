FROM node:22.23.4-alpine3.24

ENV TZ="Europe/London"

USER root

RUN apk add --no-cache \
    openjdk17-jre-headless \
    curl \
    aws-cli

RUN apk add --no-cache jq

WORKDIR /app

COPY . .
RUN npm install

ENTRYPOINT [ "./entrypoint.sh" ]
