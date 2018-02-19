var config = require('./config.js');
var request = require('request');
var Promise = require('bluebird');

module.exports = function (user, token, message){
	return new Promise(function(resolve, reject){

		

var xhr = new XMLHttpRequest();
var url = "https://graph.facebook.com/v2.6/me/messages?access_token="&token;
xhr.open("POST", url, true);
xhr.setRequestHeader("Content-type", "application/json");
xhr.onreadystatechange = function () {
    if (xhr.readyState === 4 && xhr.status === 200) {
        var json = JSON.parse(xhr.responseText);
        console.log(json);
    }
};
var data = JSON.stringify({"messaging_type":"MESSAGE_TAG","recipient":{"phone_number":"+33673956636"},"message":{"text":"Ca vas?"}});
xhr.send(data);

		request({url: url}, function(err, res, body) {
			if(err)return reject(err);
			if(res.statusCode !== 200)return reject(new Error(`Status code failed: ${res.statusCode}`));
			return resolve(body);
		});
	});
};