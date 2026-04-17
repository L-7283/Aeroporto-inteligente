class TorreControle {
    
    /**
     * O método construtor é chamado quando uma torre de controle está aeroporto.
     * @param {string} pousos 
     * @param {string} decolagens 
     * @param {string} trafego 
     */
    constructor(pousos, decolagens, trafego) {
        // Atributos de identificação
        this.pousos = pousos;
        this.decolagens = decolagens;
        this.trafego = trafego;
        
        // Atributo de estado: Toda torre de controle começa dentro da área de embarque
        this.estaOperando= true; 
    }
}
