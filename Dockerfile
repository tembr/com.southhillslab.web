FROM keymetrics/pm2:10-alpine
ARG MODULE="com.southhillslab.web"
ENV NPM_CONFIG_LOGLEVEL error
COPY . /app

RUN echo "[Install dependencies]" \
  && apk update \
  && apk upgrade \
  && apk add --no-cache openssh bash git make gcc g++ python build-base \
  && echo "[/Install dependencies]"

WORKDIR /app/${MODULE}

RUN echo "[Build the app]" \
 && echo "${MODULE}/package.json" \
 && cat package.json \
 && NODE_ENV=develop yarn --no-lockfile \
 && yarn build \
 && echo "[/Build the app]"

RUN mkdir /data
RUN mkdir /data/config

RUN echo "[Link config files]" \
 && rm -f /app/${MODULE}/ecosystem.config.js \
 && rm -rf /app/${MODULE}/config \
 && ln -s /data/config/config /app/${MODULE}/config \
 && ln -s /data/config/ecosystem.config.js /app/${MODULE}/ecosystem.config.js \
 && echo "[/Link config files]"

EXPOSE 8080
VOLUME /data/config

CMD ["pm2-runtime", "start", "ecosystem.config.js", "--env", "production"]
