'use strict';

const watches = [
    'Casio',
    'Rolex',
    'Seiko',
    'Timex',
    'Longines',
    'Tudor',
]

// const watch1 = watches[0];
// const watch2 = watches[1];
// const watch3 = watches[2];

const [ watch1, watch2, watch3 ] = watches;

console.log(watch1);
console.log(watch2);
console.log(watch3);


const person = {
    firstname: 'Alexa',
    lastname: 'Milla',
    age: 18,
    eyes: 'brown',
    heigth: 168,
    weight: 72,
}

// const heigth = person.heigth;
// const weight = person.weight;

const {heigth: altura, weight: masa} = person;

console.log(altura, masa);

