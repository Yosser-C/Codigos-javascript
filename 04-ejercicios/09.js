/* Estudiar ejercicio

crear algoritmo que tome un array de
objetos en base a pares
*/
let pairs = [
    [1, { name: 'Nicolas'}],
    [2, { name: 'Felipe'}],
    [3, { name: 'Chanchito'}],
];

let array = [{
    id: 1,
    name: 'Nicolas',

},

{
    id: 2,
    name: 'Felipe',
},

{
    id: 3,
    name: 'Chanchito',

},];




function tocollection(arr){
    let collection = [];
    for(idx in arr){
        let elemento = arr[idx];
        collection[idx] = elemento[1];
        collection[idx].id = elemento[0];
    }
    return collection;
    
}

let resultado = tocollection(pairs);
console.log(resultado);

/*
let pairs = [];
    for(idx in arr){
        let elemento = arr[idx];
        pairs[idx] = [elemento.id, elemento];
    }
    return pairs;
*/
