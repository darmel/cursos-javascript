//Segundo ejercicio

console.log('Hola a todos');

//Sentencias y estructuras de control
// if... else, if anidados, switch, for, while, do y do while

//if..else

var nombre ='Dario';
var esCasado = true;

if (esCasado == true){
    console.log(nombre + ' es casado.');
} else {
    console.log(nombre + ' es soltero');
}

var edad = 65;

//si edad es menor a 12 es niño
//si edad es mayor a 11 y menor a 18 es un adolescente
//si es mayor que 17 y menor a 60 es un adulto
//si edad es mayor a 60 es un anciano

if (edad< 12){
    console.log(nombre + ' es un niño.');
} else if ((edad>11) && (edad< 18)){
    console.log(nombre + ' es adolescente.');
} else if ((edad>17) && (edad< 60)){
    console.log(nombre + ' es adulto.');
} else {
    console.log(nombre + ' es un anciano');
}

//Switch

var mes = 4;

switch(mes){
    case 1:
        console.log('enero');
        break;
    case 2:
        console.log('febrero');
        break;
    case 3:
        console.log('marzo');
        break;
    case 4:
        console.log('abril');
        break;
    default:
        console.log('Mes no encontrado');
        
}

//For

for(var i=1; i<=10; i++){
    console.log(i);
}

//while
console.log('While')
var t = 1;
while(t<=10){
    console.log(t);
    t++;
}
console.log(i);

var y = 10;
while(y >= 1){
    console.log(y);
    y--;
}

//Do while

var i =1;
console.log('do while');
do{
    console.log(i);
    i++;

}while(i<= 10);