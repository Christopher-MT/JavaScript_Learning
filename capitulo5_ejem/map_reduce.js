let personas = [
    { nombre: "Juan", edad: 25 },
    { nombre: "María", edad: 30 },
    { nombre: "Pedro", edad: 20 }
];
let personName = personas.map(persona => persona.nombre);

console.log("Lista de nombres: ",personName);

let EdadMayor = personas.reduce ((acumulador, persona) => {
    return acumulador.edad > persona.edad ? acumulador : persona;
}, personas[0]);

console.log("Persona mas vieja: ",EdadMayor);



let productos = [
    { nombre: "Laptop", precio: 800, categoria: "tecnología" },
    { nombre: "Mouse", precio: 20, categoria: "tecnología" },
    { nombre: "Silla", precio: 100, categoria: "hogar" },
    { nombre: "Teclado", precio: 50, categoria: "tecnología" },
    { nombre: "Mesa", precio: 200, categoria: "hogar" }
];

// let productosNombres = productos.map((producto) => {
//         if (producto.categoria == "tecnología") {
//             return producto.nombre;
//         }
// })


let productosNombres = productos.filter(producto => producto.categoria === "tecnología") .map(producto => producto.nombre);

console.log("Categorias: ", productosNombres);

let SumaProductos = productos.reduce((acumulador, producta) => {
    if (producta.categoria == "tecnología") {
        return acumulador + producta.precio;
    }else{
        return acumulador;
    }
},0) 

console.log("El total de precios es: ",SumaProductos);
