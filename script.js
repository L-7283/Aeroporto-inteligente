import Voo from './Voo.js';

let vooAtual = null;
const btnRegistrar = document.getElementById("btnRegistrar");
const btnDecolar = document.getElementById("btnDecolar");
const btnPousar = document.getElementById("btnPousar");
const displayMsg = document.getElementById("mensagem");

btnRegistrar.addEventListener("click", () => {
    const c = document.getElementById("iptCod").value;
    const o = document.getElementById("iptOri").value;
    const d = document.getElementById("iptDes").value;

    try {
        vooAtual = new Voo(c, o, d);
        displayMsg.innerText = "✅ Voo validado! Pista liberada.";
        displayMsg.style.color = "green";
        document.getElementById("resCod").innerText = vooAtual.codigo;
    } catch (erro) {
        displayMsg.innerText = erro.message;
        displayMsg.style.color = "red";
        vooAtual = null;
    }
});

btnDecolar.addEventListener("click", () => {
    if (vooAtual) {
        vooAtual.decolar();
    } else {
        alert("Registre um voo válido primeiro!");
    }
});

btnPousar.addEventListener("click", () => {
    if (vooAtual) {
        vooAtual.pousar();
    }
});