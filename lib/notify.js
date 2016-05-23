var PushBullet = require('pushbullet');

module.exports = function(notification){
	
	return gladys.user.getById({id: notification.user})
	  .then(function(user){
	   		return [user, gladys.param.getValue('pushbullet-token')];
	  })
	  .then(function(user, token){
			var pusher = new PushBullet(token);
			var notification = Promise.promisify(pusher.note);
			return notification.note(user.email, notification.title, notification.text);
	  });
};