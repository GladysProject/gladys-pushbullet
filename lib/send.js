var PushBullet = require('pushbullet');
var Promise = require('bluebird');

module.exports = function(token, email, title, text){
	var pusher = new PushBullet(token);
	
	return new Promise(function(resolve, reject){
		
		// sending notification
		pusher.note(email, title, text, function(err, response){
			if(err) return reject(err);

			return resolve(response);
		});
	});
};