'use strict';

const router = require('express').Router();

router.get('/', (req, res, next) => {
	//res.send('<h1>Hello Express!</h1>');
	res.render('login');
});

router.get('/info', (req, res, next) => {
	res.send('Test page');
});

module.exports = {
	router: router
}
