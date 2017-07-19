var request = require('request');
var url = 'http://api.openweathermap.org/data/2.5/weather?appid=76bb44bc07dd23722adae82dca3935a2&q=Santiago&units=metric';

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
                console.log(JSON.stringify(body, null, 4));
                console.log('Hay ' + body.main.temp + ' grados actualmente en '+ body.name +', ' + body.sys.country);

            }
    }
);
