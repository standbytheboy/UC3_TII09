const cards = document.querySelectorAll(".card");
const btnComprar = document.getElementById("btnComprar");
const btnRedefinir = document.getElementById("btnRedefinir");

cards.forEach(produto => {
    produto.addEventListener("click", () => {
        produto.classList.toggle("card-selected");
    })
})

btnComprar.addEventListener("click", () => {
    cards.forEach(produto => {
        if (!produto.classList.contains("card-selected")){
            produto.remove();
        }
    })
})

cards.forEach(produto => {
    btnRedefinir.addEventListener("click", () => {
        produto.classList.remove("card-selected");
        produto.style.display = "";
    })
})