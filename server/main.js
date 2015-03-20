/**
 * Central Web Server.
 * Main entry point.
 *
 * @author DarkPark
 * @license GNU GENERAL PUBLIC LICENSE Version 3
 */

'use strict';

var util   = require('util'),
	querystring = require('querystring'),
	crypto = require('crypto'),
	cookie = require('cookie'),
	rest   = require('./rest').init({
		port: 9090
	});


// curl -v http://localhost:9090/sessions
rest.on('get:sessions', function ( event ) {

});

/**
 * @apiDefine UserNotFoundError
 *
 * @apiError UserNotFound The id of the User was not found.
 *
 * @apiErrorExample Error-Response:
 * HTTP/1.1 404 Not Found
 * {
 *     "error": "UserNotFound"
 * }
 */

/**
 * @api {post} /sessions Initialize a new session for the given email address.
 *
 * @apiVersion 1.0.0
 * @apiName PostSessions
 * @apiGroup Sessions
 *
 * @apiParam {string} email Users email address.
 *
 * @apiExample {curl} Example usage:
 *     curl --include --data "email=test@gmail.com" http://localhost:9090/sessions
 *
 * @apiSuccessExample Success-Response:
 *     HTTP/1.1 200 OK
 *     Set-Cookie: token=I3k5E18oV...dGjfHe6ciyyY; expires=Sun, 20 Mar 2016 10:46:19 GMT
 *
 * @apiErrorExample Error-Response:
 *     HTTP/1.1 400 Bad Request
 */

rest.on('post:sessions', function ( event ) {
	var email = querystring.parse(event.data).email,
		tDate = new Date();

	if ( email ) {
		// generate session token
		crypto.randomBytes(96, function ( error, data ) {
			if ( error ) { throw error; }

			// set token lifetime 1 year
			tDate.setFullYear(tDate.getFullYear() + 1);

			// building a response
			event.response.writeHead(200, {
				'Set-Cookie': ['token=' + data.toString('base64') + '; expires=' + tDate.toUTCString()]
			});
			event.response.end();
		});
	} else {
		// building a response
		event.response.writeHead(400);
		event.response.end();
	}
});


rest.on('get:users', function ( event ) {
	var cookieData = event.request.headers.cookie;
	//console.log(util.inspect(event, {depth: 1, colors: true}));
	//console.log(event.request.headers.cookie);

	//event.response.end('get:users');
	return {method: event.method, path: event.path, cookie: cookieData ? cookie.parse(cookieData) : {}};
});

rest.on('post:users', function ( event ) {
	//console.log(util.inspect(event, {depth: 1, colors: true}));
	//event.response.end('post:users');
	return {method: event.method, path: event.path, data: event.data};
});

// global modules and config
//var http   = require('http'),
//	url    = require('url'),
//	//files  = new (require('node-static')).Server(),
//	config = require('./config/main'),
//	//api    = require('./api/main');
//	api    = require('./api.v1');
//	/*api    = {
//		v1 : require('./api.v1')
//		//v1 : require('../api/v1/main')
//	};*/
//
//http.createServer(function (request, response) {
//	// prepare
//	var urlParts  = url.parse(request.url, true),           // all url params
//		pathParts = urlParts.pathname.slice(1).split('/'),  // ["api", "v1", "notes"]
//		//pathRoot  = pathParts.shift(),                      // "api" or "client"
//		method    = request.method.toLowerCase(),
//		postData  = '',
//		apiResponse = function(result){
//			response.end(JSON.stringify(result));
//		},
//		apiVersion, apiContext, apiMethod;
//
//	//apiVersion = pathParts.shift();
//
//	// start building the response
//	response.writeHead(200, {'Content-Type':'application/json; charset=utf-8'});
//
//	apiContext = pathParts.shift();
//
//	//console.log(apiContext);
//	//console.log(method);
//	//console.log(api[apiContext][method]);
//	//console.log(api[apiContext]);
//
//	// check API context
//	if ( api[apiContext] ) {
//		apiMethod = api[apiContext][method];
//		// check API method
//		if ( typeof apiMethod === 'function' ) {
//			// split by request method
//			if ( method === 'post' ) {
//				// reset
//				postData = '';
//				// join all chunks
//				request.on('data', function(data){ postData += data; });
//				// all data is collected
//				request.on('end', function(){
//					// CRUD call with all left params + post data
//					apiMethod(pathParts, urlParts.query, JSON.parse(postData), request, apiResponse);
//				});
//			} else {
//				// CRUD call with all left params
//				apiMethod(pathParts, urlParts.query, request, apiResponse);
//			}
//		} else {
//			// wrong API method
//			apiResponse({code:4});
//		}
//	} else {
//		// wrong API context
//		apiResponse({code:3});
//	}
//
//	console.log('%s\t%s', request.method, request.url);
//
//	// connection abort handling
//	response.on('close', function () {
//		//TODO: clear resources
//	});
//}).listen(config.server.port).on('listening', function() {
//	console.log('FortNotes server is running at http://localhost:%s/', config.server.port);
//});
