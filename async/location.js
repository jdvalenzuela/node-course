var request = require('request');
var url = 'http://ipinfo.io';

module.exports = function (callback) {

    request(
    {
        url:    url,
        json:   true
    },

    function (error, response, body){
        if(error){
            console.log('Unable to fetch location');
        }
        else
        {
            callback(body);
        }
    });
}

