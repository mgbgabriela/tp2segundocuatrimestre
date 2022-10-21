import Bibliografia from "./bibliografia";

export default class Literatura extends Bibliografia{


    public constructor() {
        super();
       
    }
    
    public asignarClasificacion(): void {
        this.numeroInv =+ 82;    
    }

    public asignarAutor(): void {
        this.autor = "Gomez";
        }
    
    public asignarTitulo(): void {
        this.titulo = "Creencias";
    }

}
