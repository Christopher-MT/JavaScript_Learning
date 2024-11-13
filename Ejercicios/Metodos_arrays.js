// EJERCICIO FACIL

let frutas = ["manzanas", "bananas", "naranjas"]

frutas.push("uvas")
frutas.unshift("fresas")
frutas.pop()

console.log(frutas)

// EJERCICIO INTERMEDIO

let numeros = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
let nuevosNumeros = numeros.filter((numero) => numero > 5).map((numero) => numero * 2)
console.log(nuevosNumeros)

// EJERCICIO DIFICIL
// 1.
function organizarArray(arr) {
    let vocales = arr.filter(word => /^[aeiou]/i.test(word)).sort();
    let consonantes = arr.filter(word => /^[^aeiou]/i.test(word)).sort();
    return [...vocales, ...consonantes]
}
console.log(organizarArray(["Manzanas", "Bananos", "peras", "Naranjas", "uvas", "Fresas", "avocado"]));

// 2.
function productsExpensive(products, priceMin ) {
    return products.filter(product => product.price >= priceMin).map(product => product.name)
}

const products = [
    { name: "Camiseta", price: 20, stock: 10 },
    { name: "Pantalón", price: 30, stock: 5 },
    { name: "Zapatos", price: 50, stock: 0 },
    { name: "Bufanda", price: 15, stock: 8 },
    { name: "Gorra", price: 25, stock: 12 },
    { name: "Calcetines", price: 5, stock: 20 },
    { name: "Reloj", price: 100, stock: 3 },
    { name: "Gafas de sol", price: 40, stock: 7 },
    { name: "Guantes", price: 10, stock: 15 },
    { name: "Cinturón", price: 35, stock: 6 },
  ];

  console.log(productsExpensive(products, 30));


// 3.

  function showerCars(cars, priceMin) {
    return cars.filter(value => value.price >= priceMin).map(value => value.name)
  }

const cars = [
    {name: "mazda", price: 1588},
    {name: "camaro", price: 20500},
    {name: "toyota", price: 60800},
    {name: "Kia", price: 2000}
]

console.log(showerCars(cars,15000))

// 4.

function peopleAge(peoples ) {
    return peoples.reduce((accumulator, people) => accumulator + people.age, 0);
}

const peoples = [
    {name: "Camilo", age: 50 },
    {name: "Sebastian", age: 20},
    {name: "Johan", age: 23},
    {name: "Simon", age: 20}
];

console.log(peopleAge(peoples))

// 5.

function transformarNombres(namess) {
    let vocales = namess.filter(word => /^[aeiou]/i.test(word)).sort();
    let consonante = namess.filter(word => /^[^aeiou]/i.test(word)).sort();
        return [...vocales, ...consonante];
}

const namess = ["Luis Miguel", "Ana María", "Juan Carlos", "Maria Fernanda"];

console.log(transformarNombres(namess))

// 6.

function transformarNombress(names) {
    return names.map(name => name.split(" ").slice(-1)[0]).sort()
};

const names = ["Luis Miguel", "Ana María", "Juan Carlos", "Maria Fernanda"];

console.log(transformarNombress(names));