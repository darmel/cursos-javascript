//Sexto ejercicio
//DOM

console.log('Hola a todos');


console.log(document.title);
document.title = 'Prueba de titulo'
console.log(document.title);

var h1 = document.getElementsByTagName('h1');

h1[0].innerHTML = 'Prueba';
console.log(document.getElementsByTagName('h1'));

var boton = document.getElementById('boton');
console.log(boton);

boton.addEventListener('click',mensaje);

function mensaje(){
    alert('mensaje de alerta');
}