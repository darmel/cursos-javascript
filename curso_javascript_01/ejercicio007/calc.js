console.log('conexion');
const botonNumeros = document.getElementsByName('data-number');

console.log(botonNumeros);

const botonOperacion = document.getElementsByName('data-operacion');
const botonIgual = document.getElementsByName('data-igual')[0];
const botonDelete = document.getElementsByName('data-delete')[0];

console.log(botonIgual);

var result = document.getElementById('result');

var opeActual ='';
var opeAnterior = '';
var operacion = undefined;

console.log(result)

botonNumeros.forEach(function(boton){
    boton.addEventListener('click', function(){
        agregaNumero(boton.innerText);
    })
});

botonOperacion.forEach(function(boton){
    boton.addEventListener('click', function(){
        selctOperacion(boton.innerText);
    })
});

botonIgual.addEventListener('click', function(){
    calcular();
    actualizarDisplay();
})

botonDelete.addEventListener('click', function(){
    limpiarDisplay();
    actualizarDisplay();
})

function agregaNumero(num){
    opeActual = opeActual + num;
    actualizarDisplay();
}

function actualizarDisplay(){
    result.value = opeActual;
}

function limpiarDisplay(){
    opeActual ='';
    opeAnterior = '';
    operacion = undefined;
}

function selctOperacion(op){
    if(opeActual =='') return;
    if(opeAnterior !=''){
        calcular();
    }
    operacion = op.toString();
    opeAnterior = opeActual;
    opeActual='';
}

function calcular(){
    var calculo;
    const anterior = parseFloat(opeAnterior);
    const actual = parseFloat(opeActual);
    if(isNaN(anterior) || isNaN(actual)) return;
    switch(operacion){
        case '+':
            calculo = anterior + actual;
            break;
        case '-':
            calculo = anterior - actual;
            break;
        case 'x':
            calculo = anterior * actual;
            break;
        case '/':
            calculo = anterior / actual;
            break;
        default:
            return;
    }
    opeActual = calculo;
    operacion = undefined;
    opeAnterior= '';
}