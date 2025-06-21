// las funciones en javascrip son objetos de primera clase


function Usuario(nombre){
    this.nombre = nombre;
}

console.log(Usuario.name);
console.log(Usuario.length); // devuelve cantidad de argumentos que recibe una funcion

const U = Usuario;
let user = new U('Nicolas');

console.log(user);

function of(Fn, arg){
    return new Fn(arg);
}
// se puede enviar otras funciones como parametros para otras funciones
let user1 = of(Usuario, 'Chanchito');
console.log(user1);

//retornar funciones dentro de otras funciones

function returned(){
    return function(){
        console.log('Hola Mundo');
    }
}

let saludo = returned();

saludo();


