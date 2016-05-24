var send = require('./send.js');
var Promise = require('bluebird');

module.exports = function(notification){
	
	return gladys.user.getById({id: notification.user})
	  .then(function(user){

	  		// getting pushbullet token
	   		return [user, gladys.param.getValue('pushbullet_token')];
	  })
	  .spread(function(user, token){

	  		// sending notification
			return send(token, user.email, notification.title, notification.text);
	  })
	  .then(function(){
	  		return Promise.resolve(true);
	  });
};