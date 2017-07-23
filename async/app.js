var weather = require('./weather.js');
var location = require('./location.js');

var argv = require('yargs')
    .option('location', {
            demand:          false,
            alias:          'l',
            description:    'Location to retrieve data',
            type:           'string'
    })
    .help('help')
    .argv;

//Lectura de argumentos desde consola
var command = argv._[0];
console.log(argv);

if ( typeof argv.l === 'string' && argv.l.length > 0)
{
    try{
        weather(argv.l, function(currentWeather){
            console.log(currentWeather);
        });
    }
    
    catch (e)
    {
        console.log('Error: ' + e.description);
    }

}
else
    {
        console.log('No location given');
        location(function(location){

            if(location.city){
                weather(location.city, function(currentWeather){
                    console.log(currentWeather);
                });
            }
            else{
                console.log('Unable to guess location');
            }
        });
    }