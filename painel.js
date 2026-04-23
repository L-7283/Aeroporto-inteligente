import Voo from './script.js';
<script type="module" src="painel.js"></script>
import Voo from './Voo.js';


let mensagemTela = document.getElementById("avisoSistema");


try {
    console.log("Iniciando registro do voo...");


    let vooRuim = new Voo("LA-777", "Curitiba", "Curitiba");


    mensagemTela.innerText = "Voo cadastrado com sucesso!";
    mensagemTela.style.color = "green";
}

catch (erro) {
    console.error("Ops, algo deu errado. A equipe de resgate foi acionada.");


    mensagemTela.innerText = erro.message;
    mensagemTela.style.color = "red";
}

finally {
    console.log("Tentativa de registro finalizada no sistema.");
} 
