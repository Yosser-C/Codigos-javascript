//iterar las propiedades de un objeto

let user = {
    id: 1,
    name: 'chanchito feliz',
    age: 25,
};

for (let prop in user){
    console.log(prop, user[prop]);  // con prop nos muestra la propeidad y con user[prop el valor]
    
}
// imprimira las propiedades osea: id name age en este caso

//en caso de que no iteren con for of:
let animales = ['cahncito feliz','dragon','canguro'];
for(let indice in animales){  //asigna el indice que estamos iterando
    console.log(indice, animales[indice]);
    
}

// si vas a iterar eleento en un arreglo utiliza for of.