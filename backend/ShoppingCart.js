
const carrito = [
    {
        nombre: "Lenovo Thinkpad",
        descripcion: "Laptop para oficina",
        producto: "Computador portatil",
        modelo: "VG6",
        precio: {
            minimoVenta: 3000000,
            compra: 1000000
        },
        caracteristicas: {
            dimensiones: {
                alto: "2 cm",
                ancho: "50 cm",
                largo: "30 cm"
            },
            fabricacion: {
                pais: "Taiwan",
                fecha: new Date('2017-05-02')
            },
            obtenerPrecioDeCompra: function() {
                return this.precio.compra;
            }
        }
    },
    {
        nombre: "Acer",
        descripcion: "airpod",
        producto: "Computador portatil",
        modelo: "807",
        precio: {
            minimoVenta: 2000000,
            compra: 1500000
        },
        caracteristicas: {
            dimensiones: {
                alto: "8 cm",
                ancho: "40 cm",
                largo: "35 cm"
            },
            fabricacion: {
                pais: "China",
                fecha: new Date('2018-06-03')
            },
            
        }
    },
    {
        nombre: "Samsung",
        descripcion: "snapdragon 680",
        producto: "celular",
        modelo: "a30",
        precio: {
            minimoVenta: 700000,
            compra: 690000
        },
        caracteristicas: {
            dimensiones: {
                alto: "17 cm",
                ancho: "8 cm",
                largo: "17 cm"
            },
            fabricacion: {
                pais: "China",
                fecha: new Date('2018-06-03')
            },
            
        }
    },
    {
        nombre: "audifonos",
        descripcion: "sonido",
        producto: "audifonos",
        modelo: "45",
        precio: {
            minimoVenta: 1000,
            compra: 1000
        },
        caracteristicas: {
            dimensiones: {
                alto: "17 cm",
                ancho: "8 cm",
                largo: "17 cm"
            },
            fabricacion: {
                pais: "China",
                fecha: new Date('2018-06-03')
            },
            
        }
    }
];

// Imprimir nombre del primer producto en el carrito
//console.log(carrito[0].nombre); // "Lenovo Thinkpad"

//RECORRER EL CARRITO DE COMPRAS
//METODO forEach
//no retorna un nuevo arreglo
carrito.forEach(producto => {
    if(producto.caracteristicas.fabricacion.pais === "China")
    console.log(producto.nombre, producto.caracteristicas)
})
//filter : recorre el arreglo buscando elementos
//         que concuerden con la condicional
//         establecida en el filtro
//         creando un nuevo arreglo con los
//         objetos que cumplen dicho criterio
let productosChina = carrito.filter((producto) => {
    return producto.
           caracteristicas.
           fabricacion.
           pais === `China`
})
console.log(productosChina)

//metodo de transformacion map
//let preciosCompra = carrito.map((producto) => {
//    return producto.precio.compra
//})

//calculo total del inventario
let total = 0
carrito.forEach(producto => {
    //Acumular el valor de compra
    //de cada producto recorrido
    //en lavariable total
    total += producto.precio.compra
})
console.log(`el precio total es:${total}`)
//utilizando el method reduce:
//reduce a un solo valor
//el arreglo, con base en una expresion
//
let inventario = carrito.reduce((total , producto)=>{
    return total + producto.precio.compra
}, 0)

console.log(`el valor del inventario es:${total}`)


//7.3
// Filtro para productos con precio mínimo de venta inferior a COP 10000
let productosPrecioBajo = carrito.filter(producto => {
    return producto.precio.minimoVenta < 10000;
});

console.log("Productos con precio mínimo de venta inferior a COP 10000:");
console.log(productosPrecioBajo);

//7.2
// Filtro para productos con más de dos metros de alto
let productosAltos = carrito.filter(producto => {
    // Convertimos la altura a centímetros y comparamos
    let altoCentimetros = parseFloat(producto.caracteristicas.dimensiones.alto) * 100; // Convertimos a centímetros
    return altoCentimetros > 200; // Comparamos si es mayor a 200 cm (dos metros)
});

console.log("Productos con más de dos metros de alto:");
console.log(productosAltos);

//5.1
carrito.forEach(producto => {
    const { nombre, producto: tipoProducto, modelo, caracteristicas: { dimensiones: { largo }, fabricacion: { pais } } } = producto;
    console.log(`Nombre: ${nombre}, Tipo de Producto: ${tipoProducto}, Modelo: ${modelo}, Largo: ${largo}, País de Fabricación: ${pais}`);
});

//5.1 con for of
const productos = [
    { nombre: 'Producto1', tipo: 'Electrónica', modelo: 'X123', dimension: { largo: 30, ancho: 20 }, pais: 'China', precio: 100 },
    { nombre: 'Producto2', tipo: 'Mueble', modelo: 'M456', dimension: { largo: 200, ancho: 100 }, pais: 'España', precio: 200 },
    { nombre: 'Producto3', tipo: 'Ropa', modelo: 'R789', dimension: { largo: 10, ancho: 5 }, pais: 'Italia', precio: 50 },
  ];
  
  for (const producto of productos) {
    const { nombre, tipo, modelo, dimension: { largo }, pais } = producto;
    console.log(`Nombre: ${nombre}, Tipo: ${tipo}, Modelo: ${modelo}, Largo: ${largo}, País: ${pais}`);
  }
  













