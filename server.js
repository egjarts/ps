const express = require('express');
const config = require('config');

const database = require('./connection/database');

const app = express();

database.connect();

app.get('/', (request, response) => response.send('API is running'));

const port = process.env.PORT || 5000;

app.listen(port, () => console.log(`Server started on port ${port}`));
