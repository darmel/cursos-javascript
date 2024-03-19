//tipos de datos

var nombre = 'dario';

console.log(nombre);


//tipo de dato numerico
var numero = 5345;
console.log(numero);

//tipo de dato object
console.log('tipo de dato object');
var objeto = {
    nombre:"dario",
    apellido:"gomez",
    telefono:"12345678"
}

console.log(objeto);

console.log('tipo de dato usando typeof ' + typeof(nombre));
nombre = 19.7;
console.log('tipo de dato usando typeof ' + typeof(nombre));
console.log('tipo de dato usando typeof ' + typeof(objeto));

//tipo de dato boolean
var bandera = true;
console.log('tipo de dato usando typeof ' + typeof(bandera));

//tipo de dato function
function miFunction(){}
console.log('tipo de dato usando typeof ' + typeof(miFunction));

//una  clase tambien es un tipo de dato function

class persona{
    constructor(nombre, apellido){
        this.nombre = nombre;
        this.apellido = apellido;
    }
}


console.log('tipo de dato usando typeof ' + typeof(persona));

//tipo undefined
var x;
console.log('tipo de dato usando typeof ' + typeof(x));

//null es tipo objeto
var y = null;
console.log('tipo de dato usando typeof ' + typeof(y));


var marcasAutos = ['bmw', 'audi', 'volvo']
console.log(marcasAutos);
console.log('tipo de dato usando typeof ' + typeof(marcasAutos));

var z ='';
console.log('tipo de dato usando typeof ' + typeof(z));


nombre = 'dario';
var apellido = 'gomez';
var nombreCompleto = nombre + ' ' + apellido;
console.log(nombreCompleto);
var x = nombre+2+2;
console.log(x);
x= 2+4 + nombre;
console.log(x);



