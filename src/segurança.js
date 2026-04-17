class VooSeguro {
    #codigo;
    #combustivel;

    constructor(codigoPassado) {
        this.#codigo = codigoPassado;
        this.#combustivel = 100;
    }

    get lerCombustivel() {
        return `Nível de Combustível do ${this.#codigo}: ${this.#combustivel}%`;
    }

    set abastecer(quantidade) {
        if (quantidade < 0) {
            console.error("ERRO: Tentativa de drenar combustível!");
        } else if (this.#combustivel + quantidade > 100) {
            this.#combustivel = 100;
            console.log("Tanque cheio!");
        } else {
            this.#combustivel += quantidade;
        }
    }

    gastar(valor) {
        this.#combustivel -= valor;
    }
}

const vooVip = new VooSeguro("VIP-001");
const painel = document.getElementById("painelCombustivel");

// Teste Hacker 1 (Vai dar erro no console)
try { vooVip.#combustivel = 0; } catch(e) { console.log("Hacker falhou: Atributo privado!"); }

function atualizarUI() {
    painel.innerText = vooVip.lerCombustivel;
}

document.getElementById("btnGastar").addEventListener("click", () => {
    vooVip.gastar(15);
    atualizarUI();
});

document.getElementById("btnAbastecerSeguro").addEventListener("click", () => {
    vooVip.abastecer = 10;
    atualizarUI();
});

atualizarUI();