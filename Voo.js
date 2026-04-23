export default class Voo {
    #status = "No Solo";

    constructor(codigo, origem, destino) {
        if (origem.toLowerCase() === destino.toLowerCase()) {
            throw new Error(`🚫 Negado: A origem (${origem}) não pode ser igual ao destino!`);
        }
        if (!codigo || !origem || !destino) {
            throw new Error("⚠️ Erro: Dados incompletos!");
        }

        this.codigo = codigo;
        this.origem = origem;
        this.destino = destino;
        
        // Reset visual do avião ao registrar novo voo
        this.pousarImediato();
    }

    decolar() {
        this.#status = "Em Voo";
        const elAviao = document.getElementById("aviao");
        const elStat = document.getElementById("stat");

        // Animação: Vai para o meio da pista (50%) e sobe (80px)
        elAviao.style.left = "45%";
        elAviao.style.bottom = "80px";
        elAviao.style.transform = "rotate(-15deg)";
        
        elStat.innerText = this.#status;
        elStat.style.color = "#27ae60";
    }

    pousar() {
        this.#status = "Pousado";
        const elAviao = document.getElementById("aviao");
        const elStat = document.getElementById("stat");

        // Animação: Vai para o fim da pista (90%) e desce (10px)
        elAviao.style.left = "85%";
        elAviao.style.bottom = "10px";
        elAviao.style.transform = "rotate(0deg)";
        
        elStat.innerText = this.#status;
        elStat.style.color = "#c0392b";
    }

    pousarImediato() {
        const elAviao = document.getElementById("aviao");
        elAviao.style.left = "0%";
        elAviao.style.bottom = "10px";
        elAviao.style.transform = "rotate(0deg)";
        document.getElementById("stat").innerText = "No Solo";
    }
}