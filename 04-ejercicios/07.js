/*
crear algoritmo que devuelva 
el precio del producto
mas impuesto

*/

function preciocompleto(precio, impuesto){
    let final = precio;

    return final + (precio * impuesto);   // mas sencillo:  return precio +precio * impuesto;

}
let resultado = preciocompleto(19.90, 0.15);
console.log(resultado);


