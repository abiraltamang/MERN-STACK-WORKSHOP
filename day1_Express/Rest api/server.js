// server.js

const express = require('express');
const router = require('./routes');

const app = express();
// Parses the json data from request body
app.use(express.json());
// Parses the query params from request url
app.use(express.urlencoded({ extended: true }));

app.use('/', router);

app.listen(3000, () => {
    console.log('App listening on port localhost:3000');
});