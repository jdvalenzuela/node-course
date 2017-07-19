var person = {

    name: 'Jose',
    age: 32
};

var personJSON = JSON.stringify(person);

console.log(personJSON);
console.log(typeof personJSON);
console.log(typeof person);

console.log('---------------------');
var personObject = JSON.parse(personJSON);
console.log(personObject.name);
console.log(typeof personObject);


console.log('---------------------');
console.log('CHALLENGE AREA');
console.log('---------------------');

var animal = '{"name": "Halley"}';

//convert to json object
var animalObject = JSON.parse(animal);
animalObject.age = 12;

//convert back to json 
var animalJSON = JSON.stringify(animalObject);

console.log(animalJSON);
console.log(typeof animalJSON);

//logout