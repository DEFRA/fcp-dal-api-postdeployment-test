FROM node:22.13.1-alpine

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
