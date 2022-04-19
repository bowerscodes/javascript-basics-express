const express = require('express');
const { sayHello } = require('./lib/strings');

const app = express();

app.get('/strings/hello/world', (req, res) => {
    res.status(200).json({ result: 'Hello, world!' });
});

app.get('/strings/hello/turtle', (req, res) => {
    res.status(200).json({ result: 'Hello, turtle!' });
});

app.get('/string/hello/:string', (req, res) => {
    res.json( { result: sayHello(req.params.string) });
});

module.exports = app;
