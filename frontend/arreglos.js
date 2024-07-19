
const nombres = ["Lapiz hb", 
    "Resaltador", 
    "Borrador de nata",
    ];

//agregar elementos al arreglo:
nombres[3] = "Micropunta"
console.log(nombres[1])

//agregar elemento al final:
nombres.push("Corrector");

//agregar elemento al principio 
nombres.unshift("borrador de liga de pan")

//eliminar elementos de un arreglo
delete nombres[3];

//eliminar elemento del finAL:
nombres.pop()

//eliminar elementos del inicio:
nombres.shift()

console.table(nombres)

//recorrer un arreglo:
for( let i=0; i<nombres.length ; i=i+1 ){
    console.log(nombres[i])
}
//Operador spread con arregos:
const nombres2 = [
    "transportador",
    "regla de 30cm"
]

let productos = [...nombres, ...nombres2]
const elemento = "compas"
productos =  [ ...productos, elemento ]
const transportador = "transportador"
productos = [...productos, transportador]


console.table(productos)