# Based image
FROM node:24-slim

# Set working dir
WORKDIR /app

# Copy package*.json file first
COPY package*.json ./

# install dep
RUN npm install

# copy the rest of application
COPY . .

# tell docker what port our app uses 
EXPOSE 3000

# command to start our application
CMD [ "node" , "app/app.js"]
