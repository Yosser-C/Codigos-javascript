// let user = {
//     id: 1,
//     email: 'Nico@holamundo.io',
//     name: 'Nicolas',
//     activo: true,
//     recuperarclave: function (){
//         console.log('recuperando clave..');
        
//     },
// };




// creando funcion qeu crea usuarios


function crearUsuario(name,email){
    return {
        email,   // es igual a   email: email,
        name,
        activo: true,
        recuperarclave: function (){
            console.log('recuperando clave..');
            
        },
    };

}

let user1 = crearUsuario('Nicolas', 'nico@holamundo.io');
let user2 = crearUsuario('Felipe', 'felipe@holamundo.io');


console.log(user1,user2);


// si necesitamos que suss valores cambien le pasamos las propiedades como 
//argumentos a las funciones
