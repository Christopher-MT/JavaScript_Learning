let producto1 = {
    nombre: "Coca Cola",
    precio: 200,
    detalles: {
    stock: 10,
    modelo: "Botella de 500ml"
}
}

let producto2 = {
    nombre: "Pepsi",
    precio: 180,
}

let producto3 = {
    nombre: "Fanta",
    precio: 150,
    detalles: {
    stock: 8,
    modelo: "Botella de 500ml"
},

    descuento: 10

}

function mostrarProducto(producto) {
    let  nombre = producto.nombre;
    let precio = producto.precio;
    let stock = producto.detalles?.stock || "Stock no especificado";
    let modelo = producto.detalles?.modelo || "Modelo no especificado";
    let descuento = producto?.descuento ??  "No hay un descuento disponible";

        console.log(`Nombre: ${nombre}`);
        console.log(`Precio: $${precio}`);
        console.log(`Stock: ${stock}`);
        console.log(`Modelo: ${modelo}`);
        console.log(`Descuento: ${descuento} %`);
        console.log("--------------------");
} 


mostrarProducto(producto1);
mostrarProducto(producto2);
mostrarProducto(producto3);
