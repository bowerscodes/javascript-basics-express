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
const { divide } = require('./lib/numbers');
const { remainder } = require('./lib/numbers');

// BOOLEANS
const { negate } = require('./lib/booleans');
const { truthiness } = require('./lib/booleans');
const { isOdd } = require('./lib/booleans');
const { startsWith } = require('./lib/booleans');

// ARRAYS
const { getNthElement } = require('./lib/arrays');
const { arrayToCSVString } = require('./lib/arrays');
const { addToArray2 } = require('./lib/arrays');
const { elementsStartingWithAVowel } = require('./lib/arrays');
const { removeNthElement2 } = require('./lib/arrays');

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

    if (a === undefined || b === undefined) {
        res.status(400).json({ error: 'Parameters "a" and "b" are required.' });
    } 
    else if (Number.isNaN(parseInt(a) || parseInt(b))) {
        res.status(400).json({ error: 'Parameters "a" and "b" must be valid numbers.' });
    } 
    else {
        res.status(200).json({ result: multiply(a, b)});
    }
});
app.post('/numbers/divide', (req, res) => {
    const a = req.body.a;
    const b = req.body.b;
    
    if (b === 0) {
        res.status(400).json({ error: 'Unable to divide by 0.' });        
    }
    else if (a === undefined || b === undefined) {
        res.status(400).json({ error: 'Parameters "a" and "b" are required.' });
    }
    else if (Number.isNaN(parseInt(a) || parseInt(b))) {
        res.status(400).json({ error: 'Parameters "a" and "b" must be valid numbers.' });
    }
    else {
        res.status(200).json({ result: divide(parseInt(a), parseInt(b))});
    }
});
app.post('/numbers/remainder', (req, res) => {
    const a = req.body.a;
    const b = req.body.b;

        if (b === 0) {
            res.status(400).json({ error: 'Unable to divide by 0.' });
        }
        else if (a === undefined || b === undefined) {
            res.status(400).json({ error: 'Parameters "a" and "b" are required.' });
        }
        else if (Number.isNaN( parseInt(a) || parseInt(b))) {
            res.status(400).json({ error: 'Parameters must be valid numbers.' })
        }
        else {
            res.status(200).json({ result: remainder(parseInt(a), parseInt(b))});
        }
});

// BOOLEAN ROUTES
app.post('/booleans/negate', (req, res) => {
    res.status(200).json({ result: negate(req.body.value) });
});
app.post('/booleans/truthiness', (req, res) => {
    res.status(200).json({ result: truthiness(req.body.value) });
});
app.get('/booleans/is-odd/:val', (req, res) => {

    if (Number.isNaN(parseInt(req.params.val))) {
        res.status(400).json({ error: 'Parameter must be a number.' });
    }
    else {
        res.status(200).json({ result: isOdd(req.params.val) });

    }
});
app.get('/booleans/:string/starts-with/:char', (req, res) => {
    if (((req.params.char).length > 1) || (((req.params.char.length < 1))) ) {
        res.status(400).json({ error: 'Parameter "character" must be a single character.' });
    } else {
        res.status(200).json({ result: startsWith(req.params.char, req.params.string) });
    }
});

// ARRAY ROUTES
app.post('/arrays/element-at-index/:index', (req, res) => {
    res.status(200).json({ result: getNthElement(req.params.index, req.body.array) });
});
app.post('/arrays/to-string', (req, res) => {
    res.status(200).json({ result: arrayToCSVString(req.body.array) });
});
app.post('/arrays/append', (req, res) => {
    res.status(200).json({ result: addToArray2(req.body.value, req.body.array) });
});
app.post('/arrays/starts-with-vowel', (req, res) => {
    res.status(200).json({ result: elementsStartingWithAVowel(req.body.array) });
});
app.post('/arrays/remove-element/', (req, res) => {
    if (!req.query.index) {
        res.status(200).json({ result: removeNthElement2(0, req.body.array) });
    } else if (req.query.index) {
        res.status(200).json({ result: removeNthElement2(parseInt(req.query.index), req.body.array) });
    }
});



module.exports = app;
