
// define the new notification type
module.exports = function(){
	
	var type = {
		name: 'PushBullet',
		service: 'pushbullet'
	};

	return gladys.notification.install(type);
};