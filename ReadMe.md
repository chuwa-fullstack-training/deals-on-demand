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

## Requirements

### Layout

1. copy the layout of the current client
2. make sure the layout is responsive

### Features

#### Authentication

back service is under construction (not required so far, will be added later)

#### Home Page

1. show the list of all the deals
2. show the list of all the categories
3. show the advertisement on the right side
4. show the search input on the top
5. show the menu and account setting button on the top right
6. show the navigation bar between top header and the list of deals
   - navigation bar includes `Top Deals` and product categories
   - clicking `Top Deals` will redirect to the home page
   - clicking one category will redirect to the category page
7. clicking `View deals` will redirect to the product page

#### Product Page

1. show the product details, including the title, description, price, images etc.
2. clicking `Buy Now` button will redirect to the product page on the original website

#### Search Page

1. show the list of all the deals that match the search query (debounced)
2. searching
   - if clicking one option from the search result, it will redirect to the product page
   - if not selecting any option, instead clicking the `Search` button, it will redirect to the search page with all products that match the search query

## API Documentation

After you start the server, you can visit [http://localhost:5000/swagger-ui.html](http://localhost:5000/swagger-ui.html) to see the API documentation.
