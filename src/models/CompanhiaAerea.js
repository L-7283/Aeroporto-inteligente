class CompanhiaAerea {
    
    /**
     * O método construtor é chamado quando uma companhia aerea está no aeroporto.
     * @param {string} horáriosDeVoos 
     * @param {string} embarque  
     * @param {string} serviçosDeBordo 
     */
    constructor(horáriosDeVoos, embarque, serviçosDeBordodono) {
        // Atributos de identificação
        this.horáriosDeVoos = horáriosDeVoos;
        this.embarque = embarque;
        this.serviçosDeBordoono = serviçosDeBordo;
        
        // Atributo de estado: Toda companhia aerea começa dentro da área de embarque
        this.estaEmOperacao = true; 
    }
}
export default CompanhiaAerea;