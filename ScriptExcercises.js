function funcionE1() {
    let nombre = prompt("ingrese su nombre!!");
    let edad = parseInt(prompt("ingrese su edad!!"), 10);
    let template = `Hola ${nombre} Tienes ${edad} años y el año que viene tendras ${edad + 1} años.`;
    let contendor = document.querySelector(".E1");
    let parrafo = document.createElement("p");
    let texto = document.createTextNode(template);
    parrafo.appendChild(texto);
    contendor.appendChild(parrafo);
}

function funcionE2() {
    let figura = prompt("Escriba la figura de la cual desea saber el area (EN MINUSCULA)", "Puede ser Triangulo, rectangulo o circulo");
    let contendor = document.querySelector(".E2");
    let parrafo = document.createElement("p");
    if (figura == "triangulo") {
        let base = parseInt(prompt("Ingrese la base"), 10);
        let altura = parseInt(prompt("Ingrese la altura"), 10);
        let area = (base * altura) / 2;
        let template = `El triangulo de base ${base} y altura ${altura} tiene un area de ${area} unidades.`
        let texto = document.createTextNode(template);
        parrafo.appendChild(texto);
        contendor.appendChild(parrafo);
    }
    if (figura == "circulo") {
        let radio = parseInt(prompt("Ingrese el radio"), 10);
        let area = Math.PI * Math.pow(radio, 2);
        let template = `El Circulo de radio ${radio}  tiene un area de ${area} unidades.`
        let texto = document.createTextNode(template);
        parrafo.appendChild(texto);
        contendor.appendChild(parrafo);

    }
    if (figura == "rectangulo") {
        let base = parseInt(prompt("Ingrese la base"), 10);
        let altura = parseInt(prompt("Ingrese la altura"), 10);
        let area = base * altura;
        let template = `El Rectangulo de base ${base} y altura ${altura} tiene un area de ${area} unidades.`
        let texto = document.createTextNode(template);
        parrafo.appendChild(texto);
        contendor.appendChild(parrafo);
    }

}

function funcionE3() {
    let numero = parseInt(prompt("Ingrese el numero"), 10);
    let aux = "";
    let contendor = document.querySelector(".E3");
    let parrafo = document.createElement("p");
    let salto = document.createElement("br");
    for (let i = 1; i <= numero; i++) {
        if (i % 2 == 0) {
            aux = "Numero " + i + " es Par - ";
            let texto = document.createTextNode(aux);
            parrafo.appendChild(texto);

        } else {
            aux = "Numero " + i + " es Inpar - ";
            let texto = document.createTextNode(aux);
            parrafo.appendChild(texto);
        }
    }
    contendor.appendChild(parrafo);

}
function funcionE4() {
    let numero = parseInt(prompt("ingrese un numero"), 10);
    let esPrimo = true;
    let aux = "";
    if (numero <= 1) {
        numero = parseInt(prompt("El numero debe ser mayor que 1"), 10);
    }
    for (let i = 2; i < numero; i++) {
        if (numero % i == 0) {
            esPrimo = false
        }
    }
    if (esPrimo == true) {
        aux = "el numero: " + numero + " es primo";
    } else {
        aux = "el numero: " + numero + " no es primo";
    }
    let contendor = document.querySelector(".E4");
    let parrafo = document.createElement("p");
    let texto = document.createTextNode(aux);
    parrafo.appendChild(texto);
    contendor.appendChild(parrafo);
}

function funcionE5() {
    let numero = parseInt(prompt("ingrese un numero"), 10);
    let aux = "";
    if (numero <= 0) {
        numero = parseInt(prompt("El numero debe ser mayor que 0"), 10);
    }
    let factorial = 1;
    for (i = 1; i <= numero; i++) {
        factorial = factorial * i;
    }
    aux = `El factorial del numero ${numero} es ${factorial}`;
    let contendor = document.querySelector(".E5");
    let parrafo = document.createElement("p");
    let texto = document.createTextNode(aux);
    parrafo.appendChild(texto);
    contendor.appendChild(parrafo);
}

function funcionE6() {
    let cont = 0;
    let acumulado = 0;
    let flag = true;
    while (flag) {
        let numero = parseInt(prompt("Ingrese un numero"), 10);
        let aux = numero;
        acumulado += numero;
        cont = cont + 1;
        if (acumulado >= 50) {
            flag = false;
            acumulado = acumulado - numero;
            cont = cont - 1;
        }
    }
    let aux = `Acumulado: ${acumulado} numero introducidos: ${cont}`;
    let contendor = document.querySelector(".E6");
    let parrafo = document.createElement("p");
    let texto = document.createTextNode(aux);
    parrafo.appendChild(texto);
    contendor.appendChild(parrafo);
}

function funcionE7() {
    let numeros = [2, 9, 5, 6, 7];
    let pares = new Array(5);
    let inpares = new Array(5);
    for (let i = 0; i < numeros.length; i++) {
        let aux = 0;
        let random = Math.floor(Math.random() * 10) + 1;
        aux = numeros[i] * random;
        let auxMensaje = numeros[i] + " X " + random + " = " + aux;
        let contendor = document.querySelector(".E7");
        let parrafo = document.createElement("p");
        let texto = document.createTextNode(auxMensaje);
        parrafo.appendChild(texto);
        contendor.appendChild(parrafo);
        if (aux % 2 == 0) {
            pares[i] = aux;
        } else {
            inpares[i] = aux;
        }
    }
    for (let i = 0; i < pares.length; i++) {
        let elementosPares = pares[i];
        if (elementosPares != null) {
            let aux = "Array Par " + elementosPares;
            let contendor = document.querySelector(".E7");
            let parrafo = document.createElement("p");
            let texto = document.createTextNode(aux);
            parrafo.appendChild(texto);
            contendor.appendChild(parrafo);
        }

    }
    for (let i = 0; i < inpares.length; i++) {
        let elementosInPares = inpares[i];
        if (elementosInPares != null) {
            let aux = "Array inPar " + elementosInPares;
            let contendor = document.querySelector(".E7");
            let parrafo = document.createElement("p");
            let texto = document.createTextNode(aux);
            parrafo.appendChild(texto);
            contendor.appendChild(parrafo);
        }
    }
}
function funcionE8() {
    let letras = ['T', 'R', 'W', 'A', 'G', 'M', 'Y', 'F', 'P', 'D', 'X', 'B', 'N', 'J', 'Z', 'S', 'Q', 'V', 'H', 'L', 'C', 'K', 'E', 'T'];
    let dni = parseInt(prompt("Ingrese su dni"), 10);
    let cont = 0;
    if (dni < 0) {
        dni = parseInt(prompt("el dni no debe ser negativo"), 10);
    }
    let numero = dni;
    while (numero >= 1) {
        numero = numero / 10;
        cont++;
    }
    if (cont > 8) {
        dni = parseInt(prompt("el dni no debe ser mayor a 8 digitos"), 10);
    }

    let auxPos = dni % 23;
    let letra = "";
    for (let i = 0; i < letras.length; i++) {
        if (auxPos == i) {
            letra = "La letra que corresponde al DNI  es: "+ letras[i];
        }
    }
    let contendor = document.querySelector(".E8");
    let parrafo = document.createElement("p");
    let texto = document.createTextNode(letra);
    parrafo.appendChild(texto);
    contendor.appendChild(parrafo);
}
function funcionE9() {
    let palabra = prompt("ingrese una palabra");
    let numeroVocales = palabra.match(/[aeiou]/gi).length;
    let consonantes = palabra.length - numeroVocales;
    let aux = "Longitud de palabra: " + palabra.length+ " --- numero de vocales: "+ numeroVocales+ " --- numero de consonantes: "+ consonantes;
    let contendor = document.querySelector(".E9");
    let parrafo = document.createElement("p");
    let texto = document.createTextNode(aux);
    parrafo.appendChild(texto);
    contendor.appendChild(parrafo);
}

