function suma(a, b){   // la a dentro de la funsion es paramtro
    console.log(arguments); // argumens devuelve todos los valores que se estan referenciando a la funcion
    
    return a+b;
}

//se le asigno para 'a' el argumento 5

let resultado = suma(5, 6, 1, 2, 3);

console.log(resultado);

console.log(typeof suma);
