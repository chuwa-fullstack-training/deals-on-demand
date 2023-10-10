# Deals on Demand

## Setup locally

clone the code from the [github repo](https://github.com/chuwa-fullstack-training/deals-on-demand)<br />
`$ git clone https://github.com/chuwa-fullstack-training/deals-on-demand.git`

### Server side

1. install Java 17
2. install maven, or if you are using IntelliJ, it has maven built in
3. run `cd server && mvn clean install -u` to install all the dependencies
4. run `mvn spring-boot:run` to start the server

### Client side

1. run `cd client && npm install` to install all the dependencies. If you encounter some errors during the installation, you can try to remove `node_modules` and `package-lock.json` and then run `npm install --force`
2. run `npm start` to start the client

## Description

Right now the client side is developed with Angular and the server side is developed with Java Spring Boot. What you need to do is to refactor the client side to use React and Redux. You can use any other libraries you want, i.e AntD, MUI, etc.

## API Documentation

After you start the server, you can visit [http://localhost:5000/swagger-ui.html](http://localhost:5000/swagger-ui.html) to see the API documentation.
