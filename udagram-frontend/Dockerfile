## Build
FROM beevelop/ionic:latest AS ionic
# Create app directory // ThienNLNT
WORKDIR /usr/src/app
# Install app dependencies // ThienNLNT
# A wildcard is used to ensure both package.json AND package-lock.json are copied // ThienNLNT
COPY package*.json ./
RUN npm ci
# Bundle app source
COPY . .
RUN ionic build
## Run 
FROM nginx:alpine
#COPY www /usr/share/nginx/html
COPY --from=ionic  /usr/src/app/www /usr/share/nginx/html