//Tercer ejercicio

console.log('Hola a todos');

//Funciones  y arreglos
//funciones

function mensaje(msj){
    console.log(msj)
}

var msj = 'Mensaj como argumento de la funcion'
mensaje(msj);

function mensaje2(){
    return 'mensaje desde la funcion'
}

var msj2 = mensaje2();
console.log(msj2);

function sumar(a, b, c=3){
    return a+b+c;
}

var result = sumar(4,5,8);
console.log(result);

var result2 = sumar(3,7);
console.log(result2);


//Funciones recursivas

//funcion para sacar factorial de un numero
console.log('Factorial de un numero')
var factorial = function(n){
    if ((n==0) || (n==1))
        return 1;
    else
        return(n*factorial(n-1));

}

console.log(factorial(5));

//Funciones predefinidas
console.log('Funciones Predefinidas');
a='2ss'
console.log('no es un numero ' + isNaN(a))

var a=12
console.log(typeof(a))
console.log(typeof(String(a)));
console.log(Date());

//Arreglos o matrices
console.log('-----Arreglos-------')
var nombres = ['dario', 'carlos', 'ana', 'luisa'];
var vegetales = new Array('tomate', 'lechuga', 'zanahoria')

console.log(nombres[3]);
console.log(nombres[5]);
console.log(vegetales[1]);

nombres[0] = 'martin';
console.log(nombres[0]);

console.log('longitud de arreglo nombres usando length ' + nombres.length);
console.log('---recorreindo arreglo Nombres-----')
for(var i =0; i<= nombres.length-1; i++){
    console.log(nombres[i]);
}

console.log('---recorreindo arreglos usando forEach-----')
vegetales.forEach(function(elemeto, indice){
    console.log(elemeto,indice)
})

console.log(nombres);
nombres.push('pedro');
console.log(nombres);
nombres.unshift('lili');
console.log(nombres);

nombres.pop(nombres);
console.log(nombres);
nombres.shift();
console.log(nombres);

var pos = nombres.indexOf('carlos');
console.log('posicion de carlos usnado indexOf: ' + pos);

nombres.splice(1,1,);
console.log(nombres);
nombres.splice(2,1);
console.log(nombres);
