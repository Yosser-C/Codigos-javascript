/*
* Nombre: ancho x alto
* 8k 7680 x 4320
* 4k 3840 x 2160
* wqhd 2560 x 1440
* fhd 1920 x 1080
* hd 1280 x 720
*/

function nombreresolucion(ancho,altura){

    if(ancho >= 7680 && altura >= 4320){
        return console.log('8k');
    }

    else if(ancho >= 3840 && altura >= 2160){
        return console.log('4k');
    }

    else if(ancho >= 2560 && altura >= 1440){
        return console.log('Wqhd');
    }
    else if(ancho >= 1920 && altura >= 1080){
        return console.log('fhd');
    }


    if(ancho >= 1280 && altura >= 720){
        return console.log('HD');
        
    }

    
    else {
        return console.log('No hay valor');
        
    }


}

let nombre = nombreresolucion(3840, 2160);
// console.log(nombre);


