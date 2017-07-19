var argv = require('yargs')
    .command('hello', 'Greets the user', function(yargs) {
        yargs.options({
            name: {
                demand:          true,
                alias:          'n',
                description:    'Tu primer nombre va aqui',
                type:           'string'
            },
            lastname: {
                demand:          true,
                alias:          'l',
                description:    'Tu apellido va aqui',
                type:           'string'
            }
        }).help('help hello');
    })
    .command('get', 'Description of get', function(yargs){
        yargs.options({
            name: {
                demand:          true,
                alias:          'n',
                description:    'Tu primer nombre va aqui',
                type:           'string'
            }
        }).help('help get');
    })
    .help('help')
    .argv;


var command = argv._[0];

console.log(argv);

if (command === 'hello' && typeof argv.name !== 'undefined' && typeof argv.lastname !== 'undefined')
{
    console.log('Hello ' + argv.name + ' ' + argv.lastname + '!');
}
else if (command === 'hello' && typeof argv.name !== 'undefined'){
    console.log('Hello ' + argv.name + '!');
} 
else if(command ==='hello'){
    console.log('Hello World!');
}

if (command === 'get' && typeof argv.name !== 'undefined'){
    console.log('Getting account ' + argv.name + '!');
} 
