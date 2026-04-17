class Aeronave {
    
    /**
     * O método construtor é chamado quando uma nova aeronave chega ao aeroporto.
     * @param {string} transportar 
     * @param {string} decolar 
     * @param {string} sustentarVoo 
     */
    constructor(transportar, cor, dono) {
        // Atributos de identificação
        this.transportar = transportar;
        this.decolar = decolar;
        this.sustentarVoo = sustentarVoo;
        
        // Atributo de estado: Toda aeronave começa dentro da área de embarque
        this.estaEmSolo = true; 
    }
}
export default Aeronave;