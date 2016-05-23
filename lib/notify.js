var PushBullet = require('pushbullet');
var Promise = require('bluebird');

module.exports = function(notification){
	
	return gladys.user.getById({id: notification.user})
	  .then(function(user){
	   		return [user, gladys.param.getValue('pushbullet-token')];
	  })
	  .spread(function(user, token){
			var pusher = new PushBullet(token);
			var notification = Promise.promisify(pusher.note);
			return notification(user.email, notification.title, notification.text);
	  });
};