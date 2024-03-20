console.log("hola mundo");

let condicion = false;

if (condicion) {
    console.log("condicion verdadera");
    console.log("fin de programa");
} else {
    console.log("condicion falsa");
}

let numero = 2;

if (numero == 1) {
    console.log("Nuemro UNO");
} else if (numero == 2) {
    console.log("Nuemro DOS");
} else if (numero == 3) {
    console.log("Nuemro TRES");
} else if (numero == 4) {
    console.log("Nuemro CUATRO");
} else {
    console.log("numero desconocido");
}

let mes = 3;
let estacion;

if (mes == 1 || mes == 2 || mes == 12) {
    estacion = "Verano";
} else if (mes == 3 || mes == 4 || mes == 5) {
    estacion = "Otoño";
} else if (mes == 6 || mes == 7 || mes == 8) {
    estacion = "invirno";
} else if (mes == 9 || mes == 10 || mes == 11) {
    estacion = "primavera";
} else {
    estacion = "valor incorrecto";
}

console.log(estacion);

numero = 4;
let numeroTexto = "valor desconocido";

switch (numero) {
    case 1:
        numeroTexto = "Numero UNO";
        break;
    case 2:
        numeroTexto = "Numero DOS";
        break;
    default:
        numeroTexto = "numero indefinido";
}

console.log(numeroTexto);

//ciclo while
let text;
let i = 0;
while (i < 10) {
    text = "el numero es " + i;
    console.log(text);
    i++;
}

//do while, se ejecuta al menos una vez
// antes de probar la condicion
i = 11;
do {
    text = "el numero es " + i;
    console.log(text);
    i++;
} while (i < 10);

//bucle for
for (let contador = 0; contador < 4; contador++) {
    console.log("contador es: " + contador);
}

//break
let cont = 0;
for (let cont = 0; cont <= 10; cont++) {
    if (cont % 2 == 0) {
        console.log(cont);
    }
    if (cont == 4) {
        break;
    }
}
