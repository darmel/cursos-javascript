//manejo de eventos con del DOM

console.log("hola mundo");

function cambiartexto(titulo) {
    titulo.innerHTML = "nuevo titulo";
}

document.getElementById("cabecera2").onclick = cambiartexto2;

function cambiartexto2(titulo) {
    document.getElementById("cabecera2").innerHTML = "otro nuevo titulo";
}

//evento onload
function cargado() {
    //alert("has entrado a l al pagina");
    let texto = "";
    if (navigator.cookieEnabled) {
        texto = "las cookies estan activadas";
    } else {
        texto = "las cookies NO estan activadas";
    }

    document.getElementById("parrafo").innerHTML = texto;
}

//evento de tipo onchange
function convertir(nombreInput) {
    nombreInput.value = nombreInput.value.toUpperCase();
}

//onmouseout vs onmouseover
function rojo(titulo) {
    titulo.style.color = "red";
}

function azul(titulo) {
    titulo.style.color = "blue";
}

//onmousedown and onmouseup
function verde(titulo) {
    titulo.style.color = "green";
}

function naranja(titulo) {
    titulo.style.color = "orange";
}

//onfocus y onblur
function rosa(titulo) {
    titulo.style.color = "red";

    titulo.style.background = "blue";
}

function amarillo(titulo) {
    titulo.style.background = "yellow";
}

//add event listener
document.getElementById("nombre").addEventListener("focus", cambiar);

document.getElementById("nombre").addEventListener("blur", (evento) => {
    evento.target.style.background = "green";
});

function cambiar(evento) {
    console.log("test");
    let componente = evento.target;
    componente.style.background = "yellow";
}

//function regresar(evento) {
//    console.log("test");
//    let componente = evento.target;
//    componente.style.background = "cyan";
//}
