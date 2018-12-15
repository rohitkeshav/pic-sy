FROM node:8

# Create app directory
WORKDIR /usr/src/app

# Install app dependencies
# A wildcard is used to ensure both package.json AND package-lock.json are copied
# where available (npm@5+)

RUN cd /client && npm install
RUN cd /server && npm install
RUN npm i foreman -g

COPY . .

EXPOSE 8080
CMD [ "npm", "start" ]

