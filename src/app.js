const express = require('express');
const app = express();
app.use(express.json());

// STRINGS
const { sayHello } = require('./lib/strings');
const { uppercase } = require('./lib/strings');
const { lowercase } = require('./lib/strings');
const { firstCharacter } = require('./lib/strings');
const { firstCharacters } = require('./lib/strings');

// NUMBERS
const { add } = require('./lib/numbers');
const { subtract } = require('./lib/numbers');
const { multiply } = require('./lib/numbers');

// 


// STRING ROUTES
app.get('/strings/hello/world', (req, res) => {
    res.status(200).json({ result: 'Hello, world!' });
});
app.get('/strings/hello/turtle', (req, res) => {
    res.status(200).json({ result: 'Hello, turtle!' });
});
app.get('/strings/hello/:string', (req, res) => {
    res.json( { result: sayHello(req.params.string) });
});
app.get('/strings/upper/:string', (req, res) => {
    res.status(200).json({ result: uppercase(req.params.string) });
});
app.get('/strings/lower/:string', (req, res) => {
    res.status(200).json({ result: lowercase(req.params.string)});
});
app.get('/strings/first-characters/:string', (req, res) => {
    res.status(200);

    const n = req.query.length
    if (n) {
        res.json({ result: firstCharacters(req.params.string, n)})
    } else {
        res.json({ result: firstCharacter(req.params.string) });
    }
});

// NUMBER ROUTES
app.get('/numbers/add/:a/and/:b', (req, res) => {
    const a = parseInt(req.params.a);
    const b = parseInt(req.params.b);
    
    if (Number.isNaN(a || b)) {
        res.status(400).json({ error: 'Parameters must be valid numbers.'});
    } else {
        res.status(200).json({ result: add(a, b) });
    }
});
app.get('/numbers/subtract/:a/from/:b', (req, res) => {
    const a = parseInt(req.params.a);
    const b = parseInt(req.params.b);

    if (Number.isNaN(a || b)) {
        res.status(400).json({ error: 'Parameters must be valid numbers.'});
    } else {
        res.status(200).json({ result: subtract(b, a) });
    }
});
app.post('/numbers/multiply', (req, res) => {
    const a = req.body.a;
    const b = req.body.b;

    if ( a === undefined || b === undefined) {
        res.status(400).json({ error: 'Parameters "a" and "b" are required.' });
    } 
    else if (Number.isNaN(parseInt(a) || parseInt(b))) {
        res.status(400).json({ error: 'Parameters "a" and "b" must be valid numbers.' });
    } 
    else {
        res.status(200).json({ result: multiply(a, b)});
    }


});
module.exports = app;
