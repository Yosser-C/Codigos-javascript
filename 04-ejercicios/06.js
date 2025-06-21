/*
crear algoritmo que devuelva cantidad
de numeros positivos de un array.
*/

let array = [2,5,7,15,-5,-100,55];

function cuantospositivos(arr){
    let con = 0;
    let i = 0;

    while(arr[i] != undefined){
        if(arr[i] > 0){
            con++;
        }
        i++;
    }
    return con;




}



let resultado = cuantospositivos(array);
console.log(resultado);

