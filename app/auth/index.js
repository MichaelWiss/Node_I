'use strict';
const passport = require('passport');
const config = require('..config');
const h = require('../helpers');
const FacebookStrategy = require('passport-facebook').Strategy;

module.exports = () => {
	let authProcessor = (accessToken, refreshToken, profile, done) => {
		// find a user in local db using profile.id

		// if the user is found, return the user data using the done()
		// if the user is not found, create one in the local db and return
		h.findOne(profile.id)
		.then(result => {
          if (result) {
          	done(null, result);
          } else {
          	
          }
		});
	}
	passport.use(new FacebookStrategy(config.fb, (accessToken, refreshToken, profile, done => {

	}));
}