# base image
FROM node:latest AS build

# set working directory
WORKDIR /app

# install app dependencies
COPY package.json ./
COPY yarn.lock ./

RUN yarn install --frozen-lockfile

# build app
COPY . .

RUN yarn build

# production environment
FROM nginx:stable-alpine

COPY --from=build /app/dist /usr/share/nginx/html
COPY nginx/nginx.conf /etc/nginx/conf.d/default.conf

EXPOSE 80

CMD ["nginx", "-g", "daemon off;"]
