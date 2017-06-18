'use strict';
const config = require('../config');

const Mongoose = require('mongoose').connect(config.dbURI);

// Log an error if the connection fails
Mongoose.connection.on('error', error => {
	console.log("MongoDB Error ", error);
});

//create a schema 
const chatUser = new Mongoose.Schema({
  profileId: String,
  fullName: String,
  profilePic: String
});

//turn into a model
let userModel = Mongoose.model('chatUser', chatUser);

module.exports = {
	Mongoose,
	userModel
}