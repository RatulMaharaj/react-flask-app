FROM node:14-alpine as builder

WORKDIR /app

COPY package*.json ./

RUN npm install

COPY . .

## Manual process for communicating API and UI
#RUN sed -i 's/localhost/api/g' package.json

#EXPOSE 3000

#CMD npm starit

RUN npm run build

## using nginx proxy
FROM nginx

COPY --from=builder /app/build /usr/share/nginx/html

COPY nginx.conf /etc/nginx/conf.d/default.conf
