//datos de referencia


//personaje de tv

let nombre = "tanjiro";
let anime = "demon slayer";
let edad = 16;

//objeto literal

let personaje = {
    nombre: "tanjiro",   // par llave-valor    en otros lenjuages es atributo
    anime: "demon slyaer", // si no queremos hacer llave valor lo llamamos propiedad
    edad: 16,
};

//al final agrega la coma porque caundo tarbajes con sistemas de  controladores de versiones
// y agregues una propiedad te va a decir que se modficaron dos lineas

console.log(personaje);
console.log(personaje.nombre);
console.log(personaje['anime']);

//cambiar el valor de una propiedad dos formas pero veras mas la primera
personaje.edad = 13;

personaje ['edad'] = 16;

//puedes selecccioanr con control y duplicar con el shif alt flecha


//eliminar  un valor del objeto
delete personaje.anime;

console.log(personaje);


