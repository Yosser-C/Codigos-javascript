let obj = {};
let obj2 = new Object;

// mas contructores:

// los elementos literales y los elementos creados por contructor se comportan de forma diferente
// pueden ser errores en tu codigo que no podras ver creyendo que son igual

/**
 * new Array(); []
 * new String(); '' "" ``
 * new Number(); 12
 * new Boolean(); true false

 */

function Usuario(){
    this.name = 'channchito feliz';
}

let user = new Usuario();
console.log(user.constructor);


const s1 = "1 + 1";
const s2 = new String("1 + 1"); // contructor de string
console.log(s2.valueOf());


// console.log(eval(s1),eval(s2));  // el qeu se creo con el contructor de stirng esta igual
// el otro fue sumado
/*
si debes crear los stirngs y despues obeterne su valor usa el metodo valueof()
*/

// todos tiene su valueof()

