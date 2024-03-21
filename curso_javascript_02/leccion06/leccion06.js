console.log("hola mundo");

//arreglos en javascript

let autosColor = new Array("rojo", "rosado", "amarillo", 14);

const autosMarcas = ["toyato", "nissan", "ford", "nissan", "audi", "kia"];

console.log(autosMarcas);

console.log(autosMarcas[1]);

for (let i = 0; i < autosColor.length; i++) {
    console.log(autosColor[i]);
}

autosMarcas.forEach((element) => {
    console.log(element);
});

console.log("antigua lista de marcas");
console.log(autosMarcas);
autosMarcas.push("volvo");
console.log("nueva lista de marcas");
console.log(autosMarcas);
