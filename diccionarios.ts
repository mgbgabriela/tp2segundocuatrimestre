import Bibliografia from "./bibliografia";

export default class Diccionarios extends Bibliografia{


    public constructor() {
        super();
       
    }
    
    public asignarClasificacion(): void {
        this.numeroInv =+ 24;    
    }

    public asignarAutor(): void {
        this.autor = "Laurosse";
        }
    
    public asignarTitulo(): void {
        this.titulo = "Pequeño diccionario";
    }

}
