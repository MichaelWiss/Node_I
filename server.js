'use strict';

const express = require('express');
const app = express();

app.get('/', (req, res, next) => {
	res.send('<h1>Hello Express!</h1>');
});

app.listen(3000, () => {
	console.log('Chatcat running on port:', 3000);
});