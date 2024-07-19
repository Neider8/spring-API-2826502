console.log("Carrito de Compras");
//Template string:
//Alternativa a la concatenacion
//Permite incrustar un valor dentro de un string
const nombreProducto = new String("lenovo V4")
console.log(`El producto es: ${nombreProducto}`)

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

producto1.imagen = "imagen1.jpg"
console.log(producto1)

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

//operador spread
const medidas = {
    "peso" : "50kg",
    "altura" : "1m",
    "largo" : "50cm"
}

const nuevoProducto = {...producto1, ...medidas}
console.log(nuevoProducto);