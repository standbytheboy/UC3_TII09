const cards = document.querySelectorAll(".card");
const btnComprar = document.getElementById("btnComprar");
const btnRedefinir = document.getElementById("btnRedefinir");
const resultado = document.getElementById("resultado");
const aviso = document.getElementById("aviso");
const whats = "5511948887050";
const whatsLink = document.getElementById("whatsappLink");

cards.forEach(produto => {
    produto.addEventListener("click", () => {
        produto.classList.toggle("card-selected");
    })
})

btnComprar.addEventListener("click", () => {
    let precoTotal = 0;
    let listaProdutos = [];

    cards.forEach(card => {
        if (!card.classList.contains("card-selected")){
            card.style.display = "none";
        } else {
            listaProdutos.push(card.querySelector("div:first-child").textContent + " R$" + card.dataset.preco);
            precoTotal += parseFloat(card.dataset.preco);
        }
    });
    resultado.innerText = `Preço Total: R$ ${precoTotal},00`;
    aviso.innerText = ` Clique no botão do Whatsapp para pedir os produtos selecionados! `

    const msgWhats = encodeURI(`Olá, gostaria de comprar os seguintes produtos:\n\n${listaProdutos.join("\n")}\n\n Preço Total: R$${precoTotal}`);
    whatsLink.href = `https://wa.me/${whats}?text=${msgWhats}`;
})

cards.forEach(produto => {
    btnRedefinir.addEventListener("click", () => {
        produto.classList.remove("card-selected");
        produto.style.display = "";
        resultado.innerText = "";
        aviso.innerText= "";
    });
})