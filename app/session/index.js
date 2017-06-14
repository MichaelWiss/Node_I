'use strict';
const session = require('express-session');
const MongoStore = require('connect-mongo')(session);
const config = require('../config');

if(process.env.NODE_ENV === 'production') {
	// initialize session with settings for production
} else {
	//initialize session with settings for dev
	module.exports = session({
		secret: config.sessionSecret,
		resave: false
	})
}