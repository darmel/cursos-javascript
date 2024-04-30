//Documment Object Model

const nuevo_item = document.getElementById("nuevo_item");
const agregaItemBtn = document.getElementById("agregarItem");
const lista = document.getElementById("lista");
const vacio = document.getElementById("vacio");

agregaItemBtn.addEventListener("click", (e) => {
    //console.log("test");
    const item = nuevo_item.value; //guarda en item el valor de lo que esta en el input

    if (item !== "") {
        const li = document.createElement("li"); //Item List, item de la lista
        const p = document.createElement("p"); //contiene el texto en la lista
        p.textContent = item; //pone el item en el parrafo

        li.appendChild(p);
        li.appendChild(addDeleteBtn());
        lista.appendChild(li);

        nuevo_item.value = "";
        vacio.style.display = "none";
    }
});

function addDeleteBtn() {
    const deleteBtn = document.createElement("button"); //crea el delete button

    deleteBtn.textContent = "X";
    deleteBtn.className = "btn-delete"; //le da una clase para poder darle style

    deleteBtn.addEventListener("click", (e) => {
        const item = e.target.parentElement;
        lista.removeChild(item);

        const items = document.querySelectorAll("li");
        if (items.length === 0) {
            vacio.style.display = "block";
            //console.log("no items");
        }
    });
    return deleteBtn;
}
