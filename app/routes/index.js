'use strict';
const router = require('express').Router();

modeule.exports = () => {
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

		}
	}

	//iterate through the routes object and mount the routes

}