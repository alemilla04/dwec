const frutas = new Array();

frutas.push('Pera');
frutas.push('Manzana');
frutas.push('🍌');
frutas.push('Kiwi');
frutas.push('🍉');
frutas.push('Fresa');
frutas.push('Melón','Limón', 'Aguacate');

// console.table(frutas);

//1 forma de recorrer 
// for(let i=0; i<frutas.length; i++){
//     console.log(frutas[i]);
// }

//2 forma de recorrer foreach de tipo in
// for(const i in frutas){
//     console.log(`${parseInt(i)+1}) ${frutas[i]}`);
// }

console.clear();
//3 forma de recorrer foreach de tipo of. La predeterminada y fácil :)
// for(const fruta of frutas){
//     console.log(fruta);
// }

//4 forma de recorrer. Métodos de la clase Array

//1 forma
// function mostrarFruta(fruta){
//     console.log(fruta);
// }

// frutas.forEach(mostrarFruta);

//2 forma

// frutas.forEach(function mostrarFruta(fruta){
//     console.log(fruta);
// });

//3 forma Lambda

// frutas.forEach(function(fruta){
//     console.log(fruta);
// });

//4 forma funciones flecha

//1 cortar el nombre
//2 poner la fecla
//3 borrar function
//4 si hay un solo parámetro quitamos los paréntesis
//5 si hay una sola línea quitamos las llaves
//6 si hay una sola línea la subimos y le quitamos el punto y coma
// frutas.forEach(fruta => console.log(fruta));

//5 forma
// const mostrarFruta = fruta => console.log(fruta);
// frutas.forEach(mostrarFruta);

// frutas.forEach(fruta => console.log(fruta));

frutas.forEach(function(fruta, i, arrayFrutas){
    const posicion = i + 1;
    
    let contador = 0;
    for (const fruta2 of arregloFrutas){
        if(fruta2.length > fruta.length){
            contador ++;
        }
    }

    console.log(posicion, ')', fruta, `Hay ${contador} frutas con nombre más largo`);
});





