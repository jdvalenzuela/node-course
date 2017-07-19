/*  setTimeout(function(){
    console.log('1');
}, 2000);

setTimeout(function(){
    console.log('3');
}, 1000);

console.log('2');  */

console.log('Challenge');

function printInTwoSeconds (message){
    setTimeout(function(){
    console.log(message);
}, 2000);
}

printInTwoSeconds('Hola');
printInTwoSeconds('Hola2');
printInTwoSeconds('Hola3');

console.log('Hola4');
console.log('Hola5');