//FUNCIONES

function miFuncion(a, b) {
    console.log("suma: " + (a + b));
    return a + b;
}

miFuncion(4, 5);
miFuncion(5, 10);

console.log("la suma es: " + miFuncion(3, 3));

//declaracion funcion de tipo expresion

let suma = function (a, b) {
    return a + b;
};
console.log("funcion tipo expresion " + suma(1, 2));

(function (a, b) {
    console.log("ejecutnado la self invoked function " + (a + b));
})(4, 5);

//funciones flecha

const sumarFuncionFlecha = (a, b) => a + b;
resultado = sumarFuncionFlecha(3, 5);

console.log(resultado);
