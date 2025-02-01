function data() {
    // pega o valor que o usuário inseriu
    let number = parseInt(document.getElementById("input").value)

    // cria uma lista não ordenada
    let list = "<ul>"

    // laço de repetição que trabalha com a li, já que antes criamos uma lista não ordenada
    list += "<li><strong>Tabuada de Adição</strong></li>";
    for (i = 1; i <= 10; i++) {
        list += `<li> ${number} + ${i} = ${number + i} </li>`;
    }

    list += "<li><strong>Tabuada de Subtração</strong></li>";
    for (i = 1; i <= 10; i++) {
        list += `<li> ${number} - ${i} = ${number - i} </li>`;
    }

    list += "<li><strong>Tabuada de Multiplicação</strong></li>";
    for (i = 1; i <= 10; i++) {
        list += `<li> ${number} x ${i} = ${number * i} </li>`;
    }

    list += "<li><strong>Tabuada de Divisão</strong></li>";
    for (i = 1; i <= 10; i++) {
        list += `<li> ${number} / ${i} = ${number / i} </li>`;
    }

    // mostra a informação no html
    document.getElementById("lista").innerHTML = list;
}

const btnGerarTabuada = document.getElementById("btnGerarTabuada");
const input = document.getElementById("input");

btnGerarTabuada.addEventListener("click", () => {
    data();
});

input.addEventListener("keydown", (event) => {
    if (event.key === "Enter") {
        data();
    }
});
