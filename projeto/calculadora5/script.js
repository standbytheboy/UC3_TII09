const visor = document.getElementById("visor");
const btns = document.querySelectorAll(".btn"); 
const clearBtn = document.getElementById("clear");
const equalsBtn = document.getElementById("equals");
const backspace = document.getElementById("backspace");

btns.forEach(btn => {
    btn.addEventListener("click", () => {
        const dataValue = btn.getAttribute("data-value");
        if (dataValue !== null && dataValue !== ""){
            visor.value += btn.getAttribute("data-value");
        } else {
            visor.value += btn.innerText;
        }
    });
});

clearBtn.addEventListener("click", () => {
    visor.value = "";
});

equalsBtn.addEventListener("click", () => {
    visor.value = eval(visor.value)
})

backspace.addEventListener("click", () => {
    visor.value = visor.value.slice(0, -1);  // Remove o último caractere
});