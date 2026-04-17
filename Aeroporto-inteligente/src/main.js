import Voo from './models/Voo.js';
import Passageiro from './models/Passageiro.js';

const meuVoo = new Voo("GOL-123");
const aviaoImg = document.getElementById("aviao");

document.getElementById("btnDecolar").addEventListener("click", () => {
    meuVoo.decolar();
    document.getElementById("stat").innerText = meuVoo.status;
    document.getElementById("alt").innerText = meuVoo.altitude;
    aviaoImg.style.bottom = "50px";
    aviaoImg.style.left = "40%";
});

document.getElementById("btnPousar").addEventListener("click", () => {
    meuVoo.pousar();
    document.getElementById("stat").innerText = meuVoo.status;
    document.getElementById("alt").innerText = meuVoo.altitude;
    aviaoImg.style.bottom = "0";
    aviaoImg.style.left = "80%";
});