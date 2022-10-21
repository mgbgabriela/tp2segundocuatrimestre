import Bibliografia from "./bibliografia";

import Literatura from "./literatura";

import Diccionarios from "./diccionarios";

let literatura1: Literatura = new Literatura ();

let diccionario: Diccionarios = new Diccionarios ();

literatura1.asignarClasificacion();
literatura1.asignarAutor();
literatura1.asignarTitulo();
diccionario.asignarClasificacion();
diccionario.asignarAutor();
diccionario.asignarTitulo();


console.log(literatura1);
console.log(diccionario);
