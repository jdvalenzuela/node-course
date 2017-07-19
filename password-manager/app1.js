console.log('Starting Password Manager');

var storage = require('node-persist');
var crypto = require('crypto-js');

var secretKey = '123abc';
storage.initSync();

var argv = require('yargs')
    .command('create', 'Crea la cuenta', function(yargs) {
        yargs.options({
            name: {
                demand:          true,
                alias:          'n',
                description:    'Account name (eg: Twitter, Facebook, etc)',
                type:           'string'
            },
            username: {
                demand:          true,
                alias:          'u',
                description:    'El nombre de usuario va aqui',
                type:           'string'
            },
            password: {
                demand:          true,
                alias:          'p',
                description:    'El password va aqui',
                type:           'string'
            },
            masterPassword:{
                demand:         true,
                alias:          'm',
                description:    'Master password',
                type:           'string'
            }
        }).help('help create');
    })
    .command('get', 'Description of get', function(yargs){
        yargs.options({
            name: {
                demand:          true,
                alias:          'n',
                description:    'El nombre de la cuenta va aqui',
                type:           'string'
            },
            masterPassword:{
                demand:         true,
                alias:          'm',
                description:    'Master password',
                type:           'string'
            }
        }).help('help get');
    })
    .help('help')
    .argv;

//Lectura de argumentos desde consola

var command = argv._[0];

console.log(argv);

if (command === 'create' && typeof argv.name !== 'undefined' && typeof argv.username !== 'undefined' && typeof argv.password !== 'undefined')
{
    try{
        var fetchedAccount = getAccount(argv.name);
        if (typeof fetchedAccount === 'undefined'){

            console.log('Account not found. Creating....');
            console.log('Creating account Name:' + argv.name + ' username:' + argv.username + ' password: ' + argv.password + ' !');
        
            createAccount({
                name:       argv.name,
                username:   argv.username,
                password:   argv.password
            }, argv.masterPassword);

            console.log('Account Name:' + argv.name + ' username:' + argv.username + ' password: ' + argv.password + ' created!');

        }else{
            console.log('Account found. No need to create again :)');
            console.log(fetchedAccount);
        }
    }
    catch (e)
    {
        console.log('Unable to create the account');
    }
    
    
}
else if (command === 'get' &&  typeof argv.name !== 'undefined')
{
    try{
        console.log('Getting account ' + argv.name + ' !');
    
        var fetchedAccount = getAccount(argv.name, argv.masterPassword);

        if (typeof fetchedAccount === 'undefined'){

            console.log('Account not found');
        }else{
            console.log('Account found');
            console.log(fetchedAccount);
        }
    }
    catch(e)
    {
        console.log('Unable to get the account');
    }
    
    
}

//Funciones


function getAccounts (masterPassword){

    var encryptedAccounts = storage.getItemSync('accounts');
    var decryptedAccountsObject = [];
    //Decrypt
    if(typeof encryptedAccounts !== 'undefined')
    {
        var bytesAccountsDecrypted = crypto.AES.decrypt(encryptedAccounts, masterPassword);
        var decryptedAccounts = bytesAccountsDecrypted.toString(crypto.enc.Utf8);
        var decryptedAccountsObject = JSON.parse(decryptedAccounts);
    }

    return decryptedAccountsObject;

}

function saveAccounts (accounts, masterPassword){
    var encryptedAccounts = crypto.AES.encrypt(JSON.stringify(accounts), masterPassword);
    storage.setItemSync('accounts', encryptedAccounts.toString());
    return accounts;

}


function createAccount(account, masterPassword){
    var accounts = getAccounts(masterPassword);
    //push on new account
    accounts.push(account);
    saveAccounts(accounts, masterPassword);
    //Save accounts

    //return account
    return account;
}

function getAccount(accountName, masterPassword){
    //Get Accounts
    var accounts = getAccounts(masterPassword);
    
    var matchedAccount;
    
    if(typeof accounts === 'undefined')
    {
        console.log('0 accounts fetched!');
        accounts = [];   
    }
    console.log('Accounts fetched:');

    console.log(accounts);
    console.log('Searching...');
    accounts.forEach(function(account) {
        
        if(account.name === accountName){
            matchedAccount = account;
        }

    });
    return matchedAccount;   
}



