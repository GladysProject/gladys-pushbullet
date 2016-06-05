var send = require('./send.js');
var Promise = require('bluebird');

module.exports = function(notification){
	
	// getting pushbullet token
	return gladys.paramUser.getValue('pushbullet_token', notification.user)
	  .then(function(token){

	  		// sending notification
			return send(token, notification.title, notification.text);
	  });
};