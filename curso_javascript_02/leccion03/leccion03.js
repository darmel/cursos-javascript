//operadores en js

let a=3, b = 2;
let z = a+b;
console.log('el resultado de la suma es ' + z);

z = a-b;
console.log('el resultado de la resta es ' + z);

z= a*b;
console.log('el resultado de la multipcacio es ' + z);

z=a/b;
console.log('el resultado de la division es ' + z);

z=a%b; //residuo de la division (modulo)
console.log('el residuo de la division es ' + z);

z= a**b;
console.log('el resultado de la potencia es ' + z);

z = a+b;

//Incremento
//preincremento
console.log(a);
z = ++a;
console.log(a);
console.log(z);

//postincrementeo
z = b++;
console.log(b);
console.log(z);

//presedecnia de operadores
console.log('Presedencia de operadores');
a=3;
b=2;
c=1;
d=4;

z = a*b+c/d;
console.log(z)

//operadores de asignacion
console.log('operadores de asignacion');
a=1;
console.log(a);
a +=3; // a = a+a
console.log(a);

//operadores de comparion
console.log('operadores de comparacion');
a=3;
b=2;
c="3";

z = a==c
console.log(z);

z = a===c
console.log(z);

c=3;

z = a!=c;
console.log(z);

z = a<b ;
console.log(z);

//ejercicio numero par o impar

a=0;

if(a%2==0){
    console.log('es numero par')
}else{
    console.log('es numero impar')
}

//ejercicio mayor de edad
edad = 14;
adulto=18;
if(edad>=adulto){
    console.log("Es un adulto");
}else{
    console.log('es menor de edad');
}

//operador and
console.log('operador AND');
a=9;
let valMin =0, valMax  = 10;
if(a>=valMin && a<= valMax){
    console.log('se encuentra dentro de rango')
}else{
    console.log('fuera de rango')
}

//operador OR
console.log('operador OR');
let vacaciones = false, diaDescanso=true;

if(vacaciones || diaDescanso){
    console.log('dia de descanso');
}else{
    console.log('dia laboral');
}

//operador ternario
console.log('operador Ternario');
resultado = (1>2)? "verdaderp":"falso";
console.log(resultado);

//convertir string a numero
console.log('convertir string a numero y viceversa')
let miNumero = "18";
edad = Number(miNumero);
console.log(typeof edad);

//presedencia de operadores
console.log('presedencia de operadores');
x = 5;
y = 10;
z = ++x + y--;

console.log(x);
console.log(y);
console.log(z);