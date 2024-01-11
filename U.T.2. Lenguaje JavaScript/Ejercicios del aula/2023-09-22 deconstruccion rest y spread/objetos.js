'use strict';

const person = {
    firstname: 'Alexa',
    lastname: 'Milla',
    age: 18,
    eyes: 'brown',
    heigth: 168,
    weight: 72,
}

//----------------------- spread -----------------------
const newPerson = {
    id: 1,
    ...person,
    dni: 34000000,
    address: 'Avenida',
    nationality: 'Spanish',
} 

console.log(newPerson);

//----------------------- rest -----------------------

const {age, eyes, ...otras} = person;
console.log(age, eyes, otras);


