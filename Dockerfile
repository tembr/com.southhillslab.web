FROM keymetrics/pm2:latest-alpine

ENV NPM_CONFIG_LOGLEVEL error
ARG CONF_TYPE_ARG
ENV CONF_TYPE=$CONF_TYPE_ARG

#ENV PORT 8080
#ENV NODE_ENV development

# Create app directory
WORKDIR /usr/src/app

# Bundle app source
COPY ./laborx.relay.pages /usr/src/app
RUN rm -rf /usr/src/app/config/*
COPY ./laborx.exchange.conf/laborx.relay.pages/ecosystem.config.js /usr/src/app/ecosystem.config.js
COPY ./laborx.exchange.conf/laborx.relay.pages/config/$CONF_TYPE_ARG.json /usr/src/app/config/default.json

# Install all dependencies, including devDependencies for the build job
RUN export NODE_ENV=development && yarn install && yarn cache clean && yarn build && rm -rf /usr/src/app/laborx.relay.pages/.git

ENTRYPOINT ["./start.sh"]


