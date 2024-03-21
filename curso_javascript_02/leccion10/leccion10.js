//Manipulacion del DOM

let cabecera = document.getElementById("cabecera");
console.log(cabecera);

let parrafo = document.getElementById("parrafo").innerHTML;
console.log(parrafo);

//modificando el DOM  con js

cabecera.innerHTML = "el nuevo valor ejemplo con dom js";
console.log(cabecera.innerHTML);

//get element by tagname

let parrafos = document.getElementsByTagName("p");

console.log(parrafos.length);

for (i = 0; i < parrafos.length; i++) {
    console.log(parrafos[i].innerHTML);
}

//get elements by class name
parrafos = document.getElementsByClassName("rojo");
console.log(parrafos.length);

for (i = 0; i < parrafos.length; i++) {
    console.log(parrafos[i].innerHTML);
}

//query selector all
parrafos = document.querySelectorAll("h1.titulo");
console.log(parrafos.length);

for (i = 0; i < parrafos.length; i++) {
    console.log(parrafos[i].innerHTML);
}

//formularios
function mostrarValores() {
    let formulario = document.forms["formulario"];
    let texto = "";

    for (let elemento of formulario) {
        texto += elemento.value + " ";
    }
    document.getElementById("valores").innerHTML = texto;
}

function mostrarValores2() {
    let formulario = document.forms["formulario"];
    let texto = "";
    let nombre = formulario["nombre"];
    let apellido = formulario["apellido"];

    text = nombre.value + " " + apellido.value;
    document.getElementById("valores2").innerHTML = text;
}

//cambiar el contenido del DOM

function activar() {
    document.getElementById("cabecera").innerHTML = "Nuevo titulo";
    document.getElementById("cabecera2").style.color = "red";
}

function gatoPerro() {
    document.getElementById("imagen").src =
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTyok2XQpZZSlkJx-9N6cd-a8yzKLdTsX3ouzFoaNqc7MeVJqMPsoxxxTdNKgcFhYyEi-g&usqp=CAU";
}
