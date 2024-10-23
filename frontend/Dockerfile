FROM node:20-alpine
WORKDIR /app/frontend
COPY package.json .
COPY package-lock.json .
RUN npm install
RUN npm install -g npm@10.2.3
COPY . .
EXPOSE 5173
CMD [ "npm", "run", "dev" ]