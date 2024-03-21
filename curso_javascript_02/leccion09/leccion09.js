//Clase
//es una pkantilla que contine propiedades y comportamientos
console.log("hola  a todos");

class Persona {
    static contadorPersona = 0;

    email = "mi correo actual";

    constructor(nombre, apellido) {
        //metodo constructor
        this._nombre = nombre; //estos son los atributos
        this._apellido = apellido;
    }

    get nombre() {
        //metodo getter
        return this._nombre;
    }

    set nombre(nombre) {
        //metodo setter
        this._nombre = nombre;
    }
    get apellido() {
        //metodo getter
        return this._apellido;
    }

    set apellido(apellido) {
        //metodo setter
        this._apellido = apellido;
    }

    nombreCompleto() {
        return this._nombre + " " + this._apellido;
    }

    static saludar() {
        console.log("saludos desde metodo static");
    }

    static saludar2(persona) {
        console.log(persona.nombre + " " + persona.apellido);
    }
}

//instanciar objetos de tipo persona

let persona1 = new Persona("juan", "gomez");
console.log(persona1);

let persona2 = new Persona("maria", "restreto");
console.log(persona2);

//metodos get y metodos set (los getters y setters)
console.log(persona1.nombre);

persona1.nombre = "bruno";
console.log(persona1.nombre);

//herencia
//la clase Persona es clase padre
//clse empleado es hija de la clase padre

class Empleado extends Persona {
    constructor(nombre, apellido, departamento) {
        super(nombre, apellido); //llamar al construct de la clase padre
        this._departamento = departamento;
    }

    get departamento() {
        return this._departamento;
    }
    set departamento(departamento) {
        this._departamento = departamento;
    }
    //sobrescritura
    nombreCompleto() {
        return super.nombreCompleto() + ", " + this._departamento;
    }
}

let persona3 = new Empleado("pedro", "lopez", "desarrollo");
console.log(persona3);
//metodo heredado
console.log(persona3.nombre); //usa el metodo de clase padre en persona 3
console.log(persona3.nombreCompleto());

//static
Persona.saludar();
Empleado.saludar();

Persona.saludar2(persona3);

//atributo estatico
console.log(Empleado.contadorPersona);

//atributo no estatico
console.log(persona2.email);
