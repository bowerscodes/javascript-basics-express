# JavaScript Basics in Express👨🏼‍💻
### Introduction
This project documents my progress through the JavaScript Basics in Express module at [ManchesterCodes](https://github.com/mcrcodes). Revisiting the functions I wrote in the earlier *JavaScript Basics* module, the task was to export these functions to a central app file where they could be called upon HTTP requests, in order to manipulate the incoming data so that it passed the unit tests when returned to the client.
This was a fantastic opportunity to reinforce my understanding of JavaScript Functions and unit testing, but also a great way of understanding APIs and HTTP requests by writing various Routes, in order to bridge the functionality. The project now serves as my first API - which calls the functions created in my original library, and is built using the Express JavaScript framework.

## Contents
* [Languages & Technologies](#Languages--Technologies)
* [Project Setup](#Project-Setup)
* [Importing Functions](#Importing-Functions-from-the-Library)
* [Scope of Functionalities](#Scope-of-Functionalities)
* [HTTP Routes](#HTTP-Routes)
* [GET Requests](#GET-Requests)
* [POST Requests](#POST-Requests)

* [Unit Testing](#Unit-Testing)
* [Examples of Use](#Examples-of-Use)
* [Project Status](#Project-status)
* [Sources & Credits](#Sources--credits)

## Languages & Technologies
### Languages
* JavaScript

### Technologies
* Express.JS
* Node.JS
* Jest

## Project Setup
### index.js
In index.js, the `app` constant is defined as the output of `.src/app` - this is where the bulk of the app's code exists. Another constant, `APP_PORT` is assigned the value of 3000, which is the port that the server will listen on. Finally, the Express `.listen()` method is called on the `app` itself, which logs a message in the client's console when a connection is made.
```JavaScript
/* index.js */
const app = require('./src/app');

const APP_PORT = 3000;

app.listen(APP_PORT, () => {
  console.log(`Now serving your Express app at http://localhost:${APP_PORT}`);
});
```

### ./src/app.js
In the main app file, Express is assigned to the `express` constant using `require()` - and `express()` itself is assigned to the `app` constant:
```JavaScript
const express = require('express');
const app = express();
```

Finally, `module.exports = app;` is called at the very end of the file, which ensures that all of the functionality above that line of code is available for other files within the project to import. In this case, `/index.js`.

#### Importing Functions from the Library
Once the initial setup of the app is complete, the individual functions from the original *JavaScript Basics* exercise are imported one by one, as required:
```JavaScript // NUMBERS
const { add } = require('./lib/numbers');
const { subtract } = require('./lib/numbers');
const { multiply } = require('./lib/numbers');
const { divide } = require('./lib/numbers');
const { remainder } = require('./lib/numbers');
```

## Scope of Functionalities
### HTTP Routes
#### GET Requests
By default, Express will respond to all requests with a 404 error - this is because it needs to be told how to respond to different requests, at different routes, and ensures that the server will only accept valid requests with usable data.

The main point of the original exercise was to create routes which process the `GET` and `POST` requests sent by the test suite, and return valid responses which pass the test criteria.

Using express, a Route can be created by calling either the `.get()` or `.post()` method on our `app` constant, depending on the type of request:
```JavaScript
app.get('/strings/hello/world', (req, res) => {
    res.status(200).json({ result: 'Hello, world!' });
});
```
The request path is defined within the `.get()` brackets, along with a **controller function** with two parameters: req - which represents the HTTP request that was sent - and res, which represents the response that will be sent.
The `.status()` method is then called upon the `res`, or response parameter, which specifies a status code to respond with. Next, the .json method is called which defines the response in the form of a JSON object. in this case, the client will be sent a response with code `200`, and `{ result: 'Hello, world!' }`in its body.

The format required of the expected response can be found in the accompanying test file:
```JavaScript 
describe('GET /hello/{string}', () => {
    it('returns "Hello world!" when passed "world"', done => {
      request(app)
        .get('/strings/hello/world')
        .then(res => {
          expect(res.status).toEqual(200);
          expect(res.body).toEqual({ result: 'Hello, world!' });
          done();
        });
    });
```







## Unit Testing




## Examples of Use
Whilst this project's primary function was to introduce me to the various JavaScript functions & methods for each data type by writing & passing unit tests, now that it is complete it can serve as a basic JavaScript library.

*Consider the following:*
* **Internal Framework**
> Different businesses require different operations to be carried out upon the data they process. Throughout my career, I will no doubt be spending lots of time developing internal frameworks for employers, using a test-driven approach to ensure that the functions in those frameworks are manipulating the data as required.

* **APIs**
> APIs are the interface by which different languages and programs communicate. In order to do this successfully, requests must be processed into usable data. They do this by calling a specific set of functions and methods on the requests received, which are defined in an accompanying library. This code could easily be used as a starting point for future API libraries.



## Project Status
This project is complete! 🥳

## Sources & Credits
This project is part of my learning log of my progress at [ManchesterCodes](https://github.com/mcrcodes).








