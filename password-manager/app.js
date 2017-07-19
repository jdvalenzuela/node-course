console.log('Starting Password Manager');

var storage = require('node-persist');
storage.initSync();

/*storage.setItemSync('accounts', [
    {   
        username: 'Jose',
        balance: 0
    }
]);*/
var accounts = storage.getItemSync('accounts');
/*//Push on a new account
accounts.push({   
        username: 'David',
        balance: 1
    })
//Save using setItemSync
storage.setItemSync('accounts', accounts);*/

console.log(accounts);

