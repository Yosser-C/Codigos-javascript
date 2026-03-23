function pedirFigura() {
    console.log('escoje el numero de la figura')

    let opc = Number(
        prompt(
            '1. Triangulo \n2. Rectangulo \n3. Cuadrado \n4. circulo \n numero: ',
        ),
    )
    if (opc === 1) {
        console.log('Triangulo')
        return 'Triangulo'
    } else if (opc === 2) {
        console.log('Rectangulo')
        return 'Rectangulo'
    } else if (opc === 3) {
        console.log('Cuadrado')
        return 'Cuadrado'
    } else if (opc === 4) {
        console.log('Circulo')
        return 'Circulo'
    } else {
        console.log('valor no valido')
        return pedirFigura()
    }
}

function pedirOperacion() {
    console.log('escoje el numero de tu operacion')
    let opc = Number(prompt('1. Perimetro \n2.Area\nnumero:'))
    if (opc === 1) {
        console.log('Perimetro')
        return 'Perimetro'
    } else if (opc === 2) {
        console.log('Area')
        return 'Area'
    } else {
        console.log('operacion no valida')
        return pedirOperacion()
    }
}

function calcularCirculo(operacion) {
    let R = Number(prompt('DIgite el Radio (sin unidades): '))
    if (operacion === 'Area') {
        let resultado = Math.PI * R * R
        console.log('Area del circulo es: ', resultado)
    } else if (operacion === 'Perimetro') {
        let resultado = 2 * Math.PI * R
        console.log('Area del circulo es: ', resultado)
    }
}

function calcularCuadrado(operacion) {
    let lado = parseFloat(prompt('Digite el Lado:'))
    if (operacion === 'Area') {
        let resultado = lado * lado
        console.log('Area del cuadrado es: ', resultado)
    } else if (operacion === 'Perimetro') {
        let resultado = 4 * lado
        console.log('Area del cuadrado es: ', resultado)
    }
}

function calcularRectangulo(operacion) {
    let Base = parseFloat(prompt('Digite la base: '))
    let altura = parseFloat(prompt('Digite la altura: '))
    if (operacion === 'Area') {
        let resultado = Base * altura
        console.log('Area del Rectangulo es: ', resultado)
    } else if (operacion === 'Perimetro') {
        let resultado = 2 * (Base + altura)
        console.log('Area del Rectangulo es: ', resultado)
    }
}
function calcularTriangulo(operacion) {
    let lado1 = parseFloat(prompt('Digite el lado 1: '))
    let lado2 = parseFloat(prompt('Digite el lado 2: '))
    let lado3 = parseFloat(prompt('Digite El lado 3: '))
    let altura = parseFloat(prompt('Digite la altura: '))
    if (operacion === 'Area') {
        let resultado = (lado2 * altura) / 2
        console.log('Area del Tirangulo es: ', resultado)
    } else if (operacion === 'Perimetro') {
        let resultado = lado1 + lado2 + lado3
        console.log('Area del Triangulo es: ', resultado)
    }
}

let figura = pedirFigura()
let operacion = pedirOperacion()

if (figura === 'Triangulo') {
    calcularTriangulo(operacion)
} else if (figura === 'Rectangulo') {
    calcularRectangulo(operacion)
} else if (figura === 'Cuadrado') {
    calcularCuadrado(operacion)
} else if (figura === 'Circulo') {
    calcularCirculo(operacion)
}
