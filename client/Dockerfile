FROM node:alpine as builder

WORKDIR "/app"

COPY ./ ./

RUN yarn install && yarn cache clean

RUN npm run build

#################################################################
FROM shiphp/nginx-env

COPY --from=builder /app/build /usr/share/nginx/html
COPY ./template.prod /etc/nginx/conf.d/default.conf