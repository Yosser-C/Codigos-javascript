/*
indice validar que no sea menor a cero y que el elemento exista en el array

*/

// puedes unir los if con el operador or y quitaar el ultimo else para ahcerlo mucho amms corto legible y mas limpio en lectura

// mejor cambio

function getbyIdx(arr, idx){
    if(idx < 0 || arr[idx] == undefined){
        return 'No existe';
    }

    return arr[idx];
        
    
    

    
}


let resultado = getbyIdx([1,2], 0);
console.log(resultado);


/*
mismo codigo de arriva pero sin el console log que al no ser un valor expesifico pone undefine en la variable resultado




indice validar que no sea menor a cero y que el elemento exista en el array



function getbyIdx(arr, idx){
    if(idx < 0){
        return console.log('No existe');
    }


    else if(arr[idx] == undefined){
        return console.log('No hay valor');
    }

    else{
        return console.log(arr[idx]);
        
    }
    

    
}


let resultado = getbyIdx([1,2], 0);
console.log(resultado);





*/

