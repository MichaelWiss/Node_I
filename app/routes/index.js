'use strict';
const h = require('../helpers');
const passport = require('passport');

module.exports = () => {
	let routes = {
		'get': {
			'/': (req, res, next) => {
				res.render('login');
			},
			'/rooms': (req, res, next) => {
				res.render('rooms');
			},
			'/chat': (req, res, next) => {
				res.render('chatroom');
			},
			'/getsession': (req, res, next) => {
				res.send("My favorite color: " + req.session.favColor);
			},
			'/setSession': (req, res, next) => {
				req.session.favColor = "Red";
				res.send("Session Set");
			},
			'/auth/facebook': passport.authenticate('facebook'),
			'/auth/facebook/callback': passport.authenticate('facebook', {
				successRedirect: '/rooms',
				failureRedirect: '/'
			})
		},
		'post': {

		},
		'NA': (req, res, next) => {
			res.status(404).sendFile(process.cwd() + '/views/404.htm');
		}
	}


  return h.route(routes);
}