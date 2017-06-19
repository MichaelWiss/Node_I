'use strict';

const express = require('express');
const app = express();
const chatCat = require('./app');
const passport = require('passport');

app.set('port', process.env.PORT || 3000);
app.use(express.static('public'));
app.set('view engine', 'ejs');

app.use(chatCat.session);
app.use(passport.initialize());

app.use('/', chatCat.router);




app.listen(app.get('port'), () => {
	console.log('Chatcat running on port:', app.get('port'));
});