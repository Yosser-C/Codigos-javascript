// {id: 1, recuperarclave: funtion (){}}

function Usuario(){
    this.id = 1;
    this.recuperarclave = function(){  // metodos son funciones que fueron asignadas a propiedaddes de un objeto
        console.log('recuperando clave..');
        
    }
}

let usuario = new Usuario();
console.log(usuario);



