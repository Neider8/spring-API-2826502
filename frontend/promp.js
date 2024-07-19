
/*alert("Hola 2826502")*/
//let nombre = prompt("Por favor ingrese su nombre")
//document.querySelector("div").innerText = nombre
const nombreProducto = String("lenovo V4")
console.log(nombreProducto)

const precioProducto = 23;
const precioProductoStr = "23";

console.log(precioProducto);
console.log(precioProductoStr);

console.log( precioProducto === precioProductoStr)

//objeto producto:
//objeto literal:
const producto1 ={
    nombre : "Lenovo thinkpad",
    color : 'Red',
    modelo : 'Gj9',
    descripcion: 'laptop',
    precio: 23000000.89,
    getModelo : function(){
        console.log(this.modelo)

    }
}
//invocar metodo getModelo
producto1.getModelo();

//sin destructuracion
nombresito = producto1.nombre;
console.log(nombresito)

//con destructuracion:

const{ descripcion, precio } = producto1;
console.log(descripcion, precio)

//Object constructor:

const producto = function(nombre, 
                          color, 
                          precio){
    this.nombre = nombre,
    this.color = color,
    this.precio = precio
}

//2 instancias de producto
const p1 = new producto("Lapiz HB berol", 
                        "azul", 
                        5000);
console.log(p1);

