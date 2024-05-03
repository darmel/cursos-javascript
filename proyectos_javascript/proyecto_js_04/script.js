console.log("hola a todos");
//valores de entrada

const resultados = document.getElementById("resultados");
let unidad = "";

//funcion para obtener cual ruadio button de unidades esta seleccioando
function unidades() {
    //define que unidad usar
    if (document.getElementById("kg1").checked == true) {
        console.log("Kg");
        unidad = "kg";
    } else if (document.getElementById("g1").checked == true) {
        console.log("g");
        unidad = "g";
    } else if (document.getElementById("l1").checked == true) {
        console.log("l");
        unidad = "l";
    } else if (document.getElementById("u1").checked == true) {
        console.log("u");
        unidad = "u";
    } else {
        alert("seleccione unidad");
    }
}

function calcular() {
    console.log("func calcular");
    const precio = parseFloat(document.getElementById("precio").value);
    const cantidad = parseFloat(document.getElementById("cantidad").value);
    const product = document.getElementById("product").value;

    if (product !== "" && !isNaN(cantidad) && !isNaN(precio)) {
        //define que unidad usar
        unidades();

        //calculo
        precioPorunidad = parseFloat(precio / cantidad);
        console.log("precio" + precio);

        console.log("precio por unidad" + precioPorunidad);
        const p = document.createElement("p");
        let i = 0;

        switch (unidad) {
            case "g":
                i = (precioPorunidad * 1000).toFixed(2);
                p.textContent = "el precio de " + product + " es $" + i + " por kg";
                break;
            case "kg":
                i = (precioPorunidad * 1).toFixed(2);
                p.textContent = "el precio de " + product + " es $" + i + " por kg";
                console.log("kilogramo");
                break;
            case "l":
                i = (precioPorunidad * 1).toFixed(2);
                p.textContent = "el precio de " + product + " es $" + i + " por litro";
                console.log("litro");
                break;
            case "u":
                i = (precioPorunidad * 1).toFixed(2);
                p.textContent = "el precio de " + product + " es $" + i + " por unidad";
                console.log("unidad");
                break;
        }

        console.log(p.textContent);
        const li = document.createElement("li");
        li.appendChild(p);
        li.appendChild(addDeleteBtn()); //llama a la funcion que le devuelve el boton para que agregue
        resultados.appendChild(li);
        console.log(p.textContent);

        //limpiar form//
        console.log("lsito el calculo");
        document.getElementById("precio").value = "";
        document.getElementById("product").value = "";
        document.getElementById("cantidad").value = "";
    }
}

//devuvle el boton
function addDeleteBtn() {
    const deleteBtn = document.createElement("button"); //crea el delete button

    deleteBtn.textContent = "X";
    deleteBtn.className = "btn-delete"; //le da una clase para poder darle style

    deleteBtn.addEventListener("click", (e) => {
        const item = e.target.parentElement;
        resultados.removeChild(item);

        const items = document.querySelectorAll("li");
    });
    return deleteBtn;
}
