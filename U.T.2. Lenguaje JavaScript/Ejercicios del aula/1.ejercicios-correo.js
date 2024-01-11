let esPar = (numero) => numero % 2 === 0 ? true : false;

console.log(esPar(45))
console.log(esPar(46))

let pares = [25, 98, 14, 27, 11, 37, 18, 86].filter(esPar);
console.log(pares);
console.log([25, 98, 14, 27, 11, 37, 18, 86].find(esPar));
console.log([25, 98, 14, 27, 11, 37, 18, 86].findLast(esPar));
console.log([25, 98, 14, 27, 11, 37, 18, 86].findIndex(esPar));
console.log([25, 98, 14, 27, 11, 37, 18, 86].some(esPar));


//--------------------------

// let obtenerMaximo = (numero1, numero2) => (numero1 > numero2) ? numero1 : numero2;

// console.log(obtenerMaximo(25, 63))
// console.log(obtenerMaximo(63, 25))
// console.log(obtenerMaximo(50, 50))

// //--------------------------

// let obtenerCopyright = () => 'Esta aplicación fue desarrollada en el I.E.S. Ramón Arcas Meca. No puede ser empleada sin su permiso.'

// console.log(obtenerCopyright())