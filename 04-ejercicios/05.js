/*
crea algoritmo que devuelva nmero 
menor y mayor de un array

*/

let array = [2,5,7,15,-5,-100,55];

function getMenorMayor(arr){
    let mayor = arr[0];
    let menor = arr[0];
    let i = 0;
    

    while(arr[i] != undefined){
        if(mayor < arr[i]){
            mayor = arr[i];

        }

        if(menor > arr[i]){
            menor = arr[i];

        }
        i++;

    }

    // let A = [menor,mayor];

    return [menor, mayor];
    


}

let numeros = getMenorMayor(array);

console.log(numeros);


