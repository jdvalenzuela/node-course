var request = require('request');
var url = 'http://api.openweathermap.org/data/2.5/weather?appid=76bb44bc07dd23722adae82dca3935a2&q=Santiago&units=metric';

module.exports = function (callback) {
    request(
    {
        url:    url,
        json:   true
    },

    function (error, response, body){
        if(error){
            console.log('Unable to fetch weather');
        }
        else
        {
            callback('Hay ' + body.main.temp + ' grados actualmente en '+ body.name +', ' + body.sys.country);
        }
    });
    
}



  