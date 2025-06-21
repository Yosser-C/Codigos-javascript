/*
caundo decalramos algo como constante no podemos cambairleel valor
a este objeto
pero si podemos agreggarle o eliminarle funciones

*/


const user = { id: 1};

user.name = 'Nicolas';
user.guardar = function(){
    console.log('gaurdando', user.name);
    
}

user.guardar();

delete user.name;
delete user.guardar;
console.log(user);
// si quieres que las propiedades no cambien  ni puedas agregar:

// const user1 = Object.freeze({id: 1});

// user1.name = 'Nico';
// user1.id = 2;

// console.log(user1);

// en caso de que cambiar los valores a las propiedaes pero no agregar ni quitar
//propiedades


const user1 = Object.seal({id: 1});

user1.name = 'Nico';
user1.id = 2;

console.log(user1);
