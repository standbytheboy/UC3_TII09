function calculaODobro(valorOriginal) {
    return valorOriginal*2;
}

console.log(calculaODobro(9));

function saudacao (nome) {
    console.log(`Olá, ${nome}!`)
}

saudacao("Lucas");

function multi (a, b) {
    return a * b;
}

console.log (multi(10, 3));

// funções podem ser passadas como parâmetros, ex: console.log (multi(multi(10, 2), 3));