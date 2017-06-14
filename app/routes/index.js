'use strict';
const h = require('../helpers');

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
			}
		},
		'post': {

		},
		'NA': (req, res, next) => {
			
		}
	}


  return h.route(routes);
}