// continue nos permite saltarnos una iteracion

let i = 0;

while(i < 6){
    i++;
    if(i === 2){
        continue;  //si llega aqui todo lo de abajo sera ignorado y la ejecucion volvera arriba
    }

    if(i === 4){
        break;
    }

    console.log(i);
    
}

//puedes usar esto para for, for in, for of, while, do while
