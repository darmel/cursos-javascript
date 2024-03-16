//primer ejercicio
//variables y tipos de datos

console.log('Hola a todos');

var name1 = 'Dario';

console.log(name1);
console.log(typeof(name1));

var edad= 34;
console.log(edad);
console.log(typeof(edad));

edad = 'cinco';
console.log(edad)
console.log(typeof(edad));

var sueldo = 2000.99;
console.log(sueldo);
console.log(typeof(sueldo));

var tieneTrabajo = false;
console.log(tieneTrabajo);
console.log(typeof(tieneTrabajo));

var puestoDeTrabajo;
console.log(puestoDeTrabajo);
    puestoDeTrabajo = null;
    console.log(puestoDeTrabajo);

//Operadores matematicos +, -, * /

var edadAna, edadMaria, diferenciaEdad;
var sumaEdades, yearAna, yearMaria, yearActual;


edadAna = 34;
edadMaria = 28;

yearActual = 2024;

diferenciaEdad = edadAna -  edadMaria;
sumaEdades = edadAna + edadMaria

yearAna = yearActual - edadAna
yearMaria = yearActual - edadMaria

console.log(diferenciaEdad)
console.log(sumaEdades);
console.log('Año en que nacio Ana ' + yearAna); // el + funciona para concatenar
console.log('Año en que nacio Maria ' + yearMaria);
console.log(yearActual / 2);

//operadores logicos y de asignacion
//logicos <> >= <= == !

var mayorAna = edadAna > edadMaria;
console.log(mayorAna);
var mayorAna = edadAna < edadMaria;
console.log(mayorAna);
var mayorAna = edadAna == edadMaria;
console.log(mayorAna);
var mayorAna = !(edadAna == edadMaria);
console.log(mayorAna);

//Operadores unarios ++, --
console.log(++edadAna);
edadAna++;
console.log(edadAna++);
console.log(edadAna);

//Asignacion, +=, -=, +=, /= %=
var a = 12;
var b = 5;

var c = a%5; //devuelve el residuo o resto de una división
console.log(c);
a += b;
console.log(a);