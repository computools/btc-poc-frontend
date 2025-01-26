FROM node:23.6.1-alpine as builder

RUN mkdir /app
WORKDIR /app

ARG API_BASE_URL
ENV VITE_BASE_LINK=$API_BASE_URL

COPY . .
RUN npm ci
RUN npm run build

FROM nginx:1.27.3-alpine as runner
COPY --from=builder /app/dist /var/www/html
COPY devops/proxy.conf /etc/nginx/conf.d/default.conf
