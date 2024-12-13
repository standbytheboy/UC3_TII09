function calc(a, b, operador) {

    if (operador == "+") {
        return a + b;
    } else if (operador == "-"){
        return a - b;
    } else if (operador == "*"){
        return a * b;
    } else if (operador == "/") {
        return a / b;
    } else if (operador == "%") {
        return (100 * (a - b) / a) + "%";
    }
    else (
        console.log("O operador não é válido. Tente novamente.")
    )
}

console.log(calc(20, 2, "+"))

function exibirResultados() {
    let number1 = parseFloat(document.getElementById("num1").value);
    let number2 = parseFloat(document.getElementById("num2").value);
    let operador = document.getElementById("operator").value;

    let resultado = calc(number1, number2, operador);
    document.getElementById("result").innerText = `O resultado da operação é: ${resultado}`;
}