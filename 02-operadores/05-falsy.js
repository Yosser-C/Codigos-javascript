// short-circuit

// falso
//todo abajo es falsy
//false
//0
//''
//null
// undefine
//NaN

//si el nombre esta vacio devuelve anonimos
let nombre = 'chanchito feliz';

let username = nombre || 'anonimo';
console.log(username);

//operadr and

function fn1(){
    console.log('soy funcion 1');
    return false;
}

function fn2(){
    console.log('soy funcion 2');
    return true;
}
//estas activando las funciones:
let x = fn1() && fn2();





