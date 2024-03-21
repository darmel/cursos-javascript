//objetos

let x = 10;

let persona = {
    nombre: "dario",
    apellido: "bueno",
    email: "dario@gmail.com",
    edad: 28,
    nombreComplreto: function () {
        return this.nombre + " " + this.apellido;
    },
    get nombreReal() {
        return this.nombre + " " + this.apellido;
    },
    idioma: "es",
    get lang() {
        return this.idioma.toUpperCase();
    },

    set lang(lang) {
        this.idioma = lang.toUpperCase();
    },
};

console.log(persona.apellido);
console.log(persona);

console.log(persona.nombreComplreto());

//clase de javascript para crear objetos Objectss
let persona2 = new Object();

persona2.nombre = "carlos";
persona2.apellido = "ramirez";

console.log(persona2);
console.log(persona2.apellido);

console.log(persona["apellido"]);

//for in
console.log("recorrer objeto con forin");
for (nombrePropiedad in persona) {
    console.log(nombrePropiedad);
}

for (nombrePropiedad in persona) {
    console.log(persona[nombrePropiedad]);
}

persona.telefono = "12345678";
console.log(persona);

persona.telefono = "11111111";
console.log(persona);

delete persona.email;
console.log(persona);

//concatenar valor de cada propiedad

console.log(persona.nombre + " " + persona.apellido);

//for in
console.log("for in");
for (i in persona) {
    console.log(persona[i]);
}
//JSON string
console.log("persona string");
let personaString = JSON.stringify(persona);
console.log(personaString);

console.log(persona.nombreComplreto());

console.log(persona.nombreReal);

console.log(persona.lang);

persona.lang = "en";
console.log(persona.lang);

console.log(persona.idioma);

//Metodo constructor
//para poder tener varios objetos copia

function Personas(nombre, apellido, email) {
    this.nombre = nombre;
    this.apellido = apellido;
    this.email = email;
    this.nombreReal = function () {
        return this.nombre + " " + this.apellido;
    };
}

Personas.prototype.telefono = "22222222";

let padre = new Personas("olrlando", "suarez", "orlando@gmail.com");
console.log(padre);
padre.telefono = "777777777777777";
console.log(padre);

let madre = new Personas("maria", "galvez", "maria@gmail.com");
console.log(madre);

console.log(madre.nombreReal());
console.log(madre.telefono);
console.log(madre);

//funcion call

let persona3 = {
    nombre: "juan",
    apellido: "sanchez",
};

console.log(persona.nombreComplreto());

console.log(persona.nombreComplreto.call(persona3));

//pasos de parametros CALL
