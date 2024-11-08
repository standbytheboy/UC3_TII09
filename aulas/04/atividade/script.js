let age = prompt("Digite sua idade");
let height = prompt("Digite sua altura, ex: 1.75");

let trueAge = age >= 18;
let trueHeight = height >= 1.60;

let result = trueAge && trueHeight ? "Você pode entrar na atração" : "Você não pode entrar";
document.getElementById("resultado").innerText = result;