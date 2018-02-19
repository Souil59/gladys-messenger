var send = require('./send.js');

module.exports = function(notification){
	return gladys.paramUser.getValue('messenger_user_phone', notification.receiver)
		.then(function(phone){
			return [phone, gladys.paramUser.getValue('messenger_app_token', notification.receiver)];
		})
		.spread(function(phone, token){
			return send(phone, token, notification.text);
		});
};