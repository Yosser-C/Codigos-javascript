/*
crear array de longitud n, y que sus elementos sean
numeros de 1 hasta n.
*/

let longitud = 7;

function crearArray(n){
    if( n <= 0){
        return [];

    }
    else{
    let array = [n];
    for(let i=0;i<n;i++){
        array[i] = i+1;

    }
    return array;
}


}

let resultado = crearArray(longitud);

console.log(resultado);
