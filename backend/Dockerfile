FROM node:20-alpine
WORKDIR /app/backend
COPY package.json .
COPY package-lock.json .
RUN npm install
RUN npm install -g npm@10.2.3
COPY . .
EXPOSE 3000
CMD [ "npm", "start" ]