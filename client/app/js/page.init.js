'use strict';

var //io           = require('./lib/io'),
	//aes          = require('./aes'),
	//api          = require('./api'),
	config       = require('./config'),
	qq = require('./page.auth.js');

console.log(qq);

module.exports = ['init'];

if ( config.apiKey ) {

	// test call
//	io.ajax(config.apiUrl + 'sessions', {
//		headers: {key: config.apiKey},
//		onload: function(response){
//			response = JSON.parse(response);
//			console.log('all sessions', response);
//		}
//	});

//	api.get('sessions', function(err, response){
//		if ( response.code === 1 ) {
//			response.data.forEach(function ( session ) {
//				console.log('session', new Date(session.atime), session._id, JSON.parse(aes.decrypt(session.data)));
//			});
//		}
//	});



	// test call
//	io.ajax(config.apiUrl + 'sessions/' + config.apiKey, {
//		headers: {key: config.apiKey},
//		onload: function(response){
//			response = JSON.parse(response);
//			console.log('current session', response);
//			console.log('current session data', JSON.parse(aes.decrypt(response.data.data)));
//		}
//	});

}
