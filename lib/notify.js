var send = require('./send.js');

module.exports = function(notification){
	return gladys.paramUser.getValue('messenger_user_phone', notification.user)
		.then(function(user){
			return [user, gladys.paramUser.getValue('messenger_app_token', notification.user)];
		})
		.spread(function(user, token){
			return send(user, token, `${notification.title}: ${notification.text}`);
		});
};