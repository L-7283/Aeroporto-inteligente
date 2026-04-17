class PortaoEmbarque {
    
    /**
     * O método construtor é chamado quando um novo portão de embarque está aeroporto.
     * @param {string} Abre 
     * @param {string} fecha 
     * @param {string} chamaPassageiros 
     */
    constructor(Abre, fecha, chamaPassageiros) {
        // Atributos de identificação
        this.Abre = Abre;
        this.fecha = fecha;
        this.chamaPassageiros = chamaPassageiros;
        
        // Atributo de estado: Todo portão começa dentro da área de embarque
        this.estaAberto = true; 
    }
}
export default PortaoEmbarque;
