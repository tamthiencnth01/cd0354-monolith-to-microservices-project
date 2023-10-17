FROM node:12
# Create app directory// ThienNLNT
WORKDIR /usr/src/app
# Install app dependencies
# A wildcard is used to ensure both package.json AND package-lock.json are copied where available (npm@5+)// ThienNLNT
COPY package*.json ./
RUN npm ci 
# Bundle app source // ThienNLNT
COPY . .
EXPOSE 8080
CMD [ "npm", "run", "prod" ]