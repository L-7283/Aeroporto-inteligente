class Voo {
    // Atributos privados para segurança total
    #codigo;
    #altitude;
    #status;
    #combustivel;

    constructor(codigo) {
        this.#codigo = codigo;
        this.#altitude = 0;
        this.#status = "No Solo";
        this.#combustivel = 100;
        this.atualizarTela();
    }

    // Método para atualizar o visual na tela
    atualizarTela() {
        document.getElementById("cod").innerText = this.#codigo;
        document.getElementById("alt").innerText = this.#altitude;
        document.getElementById("fuel").innerText = this.#combustivel;
        
        const elStatus = document.getElementById("stat");
        const elAviao = document.getElementById("aviao");

        elStatus.innerText = this.#status;

        if (this.#status === "Voando") {
            elStatus.style.color = "#27ae60";
            elAviao.style.bottom = "60px";   // Sobe para o céu
            elAviao.style.left = "30%";      // Avança um pouco
            elAviao.style.transform = "rotate(-10deg)"; // Inclina para cima
        } 
        else if (this.#status === "Subindo...") {
            elAviao.style.bottom = "80px";
            elAviao.style.left = "50%";
        }
        else if (this.#status === "Pousado") {
            elStatus.style.color = "#e74c3c";
            elAviao.style.bottom = "10px";   // Volta para o chão
            elAviao.style.left = "75%";      // Vai para o final da pista
            elAviao.style.transform = "rotate(0deg)"; // Fica reto
        }
    }

    decolar() {
        if (this.#status === "No Solo" || this.#status === "Pousado") {
            this.#status = "Voando";
            this.#altitude = 10000;
            this.#combustivel -= 5;
            this.atualizarTela();
        }
    }

    ganharAltitude() {
        if (this.#status === "Voando") {
            this.#status = "Subindo...";
            this.#altitude += 5000;
            this.#combustivel -= 10;
            this.atualizarTela();
            // Volta o status para Voando após a animação
            setTimeout(() => { this.#status = "Voando"; this.atualizarTela(); }, 2000);
        }
    }

    pousar() {
        if (this.#status === "Voando" || this.#status === "Subindo...") {
            this.#status = "Pousado";
            this.#altitude = 500;
            this.atualizarTela();
        }
    }
}

// Inicializa o voo
const meuVoo = new Voo("LATAM-777");