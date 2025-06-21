const punto = {
    x:10,
    y: 15,
    dibujar(){    // lo mismo que:  dibujar: function()
        console.log('dibujando');
        
    }
};

//delete punto.dibujar;
if ('dibujar' in punto){
    punto.dibujar();
}
// punto.dibujar();
// lo dea abajo es igual a esto:   let keys = Object.keys(punto);
// console.log(Object.keys(punto));

for(let llave of Object.keys(punto)){
    console.log(llave, punto[llave]);
    
}

// para rebibir llave y clave:

for( let entry of Object.entries(punto)){
    console.log(entry);
    
}

for (let llave in punto){
    console.log(llave,punto[llave]);
    
}