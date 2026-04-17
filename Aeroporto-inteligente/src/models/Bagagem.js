class Bagagem {
    
    /**
     * O método construtor é chamado quando uma nova bagagem chega ao aeroporto.
     * @param {string} peso 
     * @param {string} cor 
     * @param {string} dono 
     */
    constructor(peso, cor, dono) {
        // Atributos de identificação
        this.peso = peso;
        this.cor = cor;
        this.dono = dono;
        
        // Atributo de estado: Toda bagagem começa fora da área de embarque
        this.estaDespachada = false; 
    }
}
export default Bagagem;