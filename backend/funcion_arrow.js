//Sintaxis Funcion Arrow Flecha
//Reglas:
//  1.Si el blpoque de codigo
//    de la funcion fecha solo tiene 
//    una linea; no hace falta ponerle 
//    los corchetes
//  2.Si L funcion flecha tiene 
//    un solo parametro se puede omitir 
//    el parentesis de los parametros
//  3.Si el bloque de codigo de la funcion 
//    flecha solo tiene una linea debe 
//    retornar un valor, es posible omitir 
//    el return, pero solo si se aplica la 
//    regla 2.
const saludo = ( nombre ) => { 
    console.log
        return `Hola ${nombre} desde una funcion flecha->`
};

//invocar a la funcion fecha
console.log(saludo("Morales"));