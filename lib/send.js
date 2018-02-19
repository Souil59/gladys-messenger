var request = require('request');
var Promise = require('bluebird');

module.exports = function (user, token, message) {
	return new Promise(function (resolve, reject) {
		var data = ({
			"messaging_type": "MESSAGE_TAG",
			"recipient": {
				"phone_number": user
			},
			"message": {
				"text": message
			},
			"tag": "APPLICATION_UPDATE"
		});
		request.post({
			url: `https://graph.facebook.com/v2.6/me/messages?access_token=${token}`,
			headers: {
				"Content-Type": "application/json"
			},
			body: data,
			json: true
		}, function (err, res, body) {
			if (err) return reject(err);
			if (res.statusCode !== 200) return reject(new Error(`Status code failed: ${res.statusCode}`));
			return resolve(body);
		});
	});
};