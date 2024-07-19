// Definición del carrito de compras con tres productos
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
        descripcion: "Laptop para oficina",
        producto: "Computador portatil",
        modelo: "G7",
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
            }
        }
    },
    {
        nombre: "Samsung",
        descripcion: "Smartphone con Snapdragon 680",
        producto: "Celular",
        modelo: "A30",
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
            }
        }
    }
];

// Imprimir información detallada de cada producto utilizando forEach y desestructuración
carrito.forEach(producto => {
    // Desestructuración para acceder a las propiedades específicas
    const { nombre, descripcion, producto, modelo, precio, caracteristicas } = producto;
    const { dimensiones, fabricacion } = caracteristicas;

    // Imprimir información detallada del producto
    console.log(`Nombre: ${nombre}`);
    console.log(`Descripción: ${descripcion}`);
    console.log(`Tipo de producto: ${producto}`);
    console.log(`Modelo: ${modelo}`);
    console.log(`Precio de compra: ${precio.compra}`);
    console.log(`Dimensiones - Alto: ${dimensiones.alto}, Ancho: ${dimensiones.ancho}, Largo: ${dimensiones.largo}`);
    console.log(`País de fabricación: ${fabricacion.pais}`);
    console.log("--------------------------------------");
});

// Filtrar productos fabricados en China
let productosChina = carrito.filter(producto => {
    return producto.caracteristicas.fabricacion.pais === "China";
});

console.log("Productos fabricados en China:");
console.log(productosChina);

// Calcular el valor total del inventario
let totalInventario = carrito.reduce((total, producto) => {
    return total + producto.precio.compra;
}, 0);

console.log(`Valor total del inventario: $${totalInventario}`);
