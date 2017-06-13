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
    let registerRoutes = (routes, method) => {
    	for(let key in routes) {
    		if(typeof routes[key] ==='object' && routes[key] !=== null && !(routes[key] instanceof Array)) {}
    			registerRoutes(routes[key], key);
    	} else {
    		// register the routes
    		if(method === 'get') {
    			router.get(key, routes[key]);
    		}
    	}
    }
}