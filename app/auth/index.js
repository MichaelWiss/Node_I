'use strict';
const passport = require('passport');
const config = require('..config');
const h = require('../helpers');
const FacebookStrategy = require('passport-facebook').Strategy;

module.exports = () => {
	passport.serializeUser((user, done) => {
		done(null, user.id);
	})
	let authProcessor = (accessToken, refreshToken, profile, done) => {
		// find a user in local db using profile.id

		// if the user is found, return the user data using the done()
		// if the user is not found, create one in the local db and return
		h.findOne(profile.id)
		.then(result => {
          if (result) {
          	done(null, result);
          } else {
          	h.createNewUser(profile)
          	  .then(newChatUser => done(null, newChatUser))
          	  .catch(error => console.log('Error when creating new user'))
          }
		});
	}
	passport.use(new FacebookStrategy(config.fb, (accessToken, refreshToken, profile, done => {

	}));
}