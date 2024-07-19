//Ejemplo
//Sintáxis: Declaracion de función
saludo("Cristian")//-> argumento: Cristian
function saludo(nombre){//->parametro

    console.log(`Buenos días ${nombre} estrellita el mundo te dice hola`);

}
//invocar, llamar, ejecutar saludo
//Sintaxis : Expresion Funcion:
//se asigna a una constante
const saludo2 = function(nombre="Cristian2"){//->parametros por defecto

    console.log(`Buenos días ${nombre} estrellita el mundo te dice hola`);

}
//invocar saludo2:
saludo2()

