
// Metodo pop () en un array elimina al final
let compras = ["manzanas", "leche", "pan", "huevos"]
let elmentoEliminado = compras.pop ();
 console.log("Elemento eliminado: " + elmentoEliminado)
 console.log("Lista de compras actualizada: " + compras)

// Metodo push() agrega al final de un array y .join() El método .join() es muy útil cuando necesitas transformar un array en una cadena de texto, y puedes elegir el separador entre los elementos con un ().
let listaDeTareas = [];

listaDeTareas.push("lavar los platos");
listaDeTareas.push("lavar el baño");
listaDeTareas.push("lavar la ropa");
listaDeTareas.push("barrer");
listaDeTareas.push("trapear");

console.log(listaDeTareas.join(", "));

// Metodo unshift() en un array agrega al inicio
let libros = ["Habitos Atomicos", "Secretos de la Mente Millonaria", "Piense y Hagase Rico"];

libros.unshift("La biblia del vendedor")

console.log(libros)

// Metodo shift() en un array elimina al inicio
let boocks = ["Habitos Atomicos", "Secretos de la Mente Millonaria", "Piense y Hagase Rico"];

boocks.shift();

console.log(boocks);

// Metodo indexOf() en un array
let city = ["Bogota", "Medellin", "Cartagena", "cali", "Barranquilla", "Pasto", "Bucaramanga"];


console.log("El indice de cali es: " + city.indexOf("cali"));

// Metodo lastIndexOf() en un array
let numeros = [1, 3, 5, 3, 7, 3, 9];

let UltimoIndice = numeros.lastIndexOf(3)

console.log("El ultimo indice de 3 es: " + UltimoIndice);

// Metodo slice() en un array

let Frutas = ["Manzana", "Banana", "Fresa", "Naranja", "Pera"];

console.log(Frutas.slice(0, 3))

// Metodo concat() en un array
let frutas = ["Manzana", "Banana", "Fresa"];
let verduras = ["Zanahoria", "Lechuga", "Espinaca"];

let unirLasDos = frutas.concat(verduras)
console.log(unirLasDos)


// .map() en JavaScript se usa para crear un nuevo array aplicando una función a cada elemento de un array existente. Es una forma muy útil de transformar datos sin modificar el array original.

let numeross = [1, 2, 3, 4, 5];
let numerosDobles = numeross.map(function(numero) {
  return numero * 2;
});
console.log(numerosDobles);

// . filter() en JavaScript se usa para crear un nuevo array con todos los elementos que cumplan una condición específica. Es útil para seleccionar elementos de un array existente basándose en alguna condición.

let numerosss = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
let numerosPares = numerosss.filter(numero => numero % 2 === 0);
console.log(numerosPares);

// ° /^[aeiou]/i : esta es una exprecion regular (regex) que hace coincidir casi cualquier palabra que empieza con una vocal (a, e, i, o, u).

// ° ^ : indica el inicio de la cadena.

// ° [aeiou] : esto hace coincidir cualquier carácter que sea una vocal (a, e, i, o, u).

// ° /i : esto hace que la coincidencia no distinga entre mayúsculas y minúsculas, lo que significa que también coincidirá con vocales en mayúsculas.

// .test : El metodo .test() aplica la exprecion regular a word y devueve true si el string comienza con una vocal o false si no.

// .sort() : Después de filtrar, sort() ordena los elementos del array alfabéticamente. Así, el array vocales contendrá todas las palabras que empiezan con una vocal, en orden alfabético.


//   FILTRAR Y ORDENAR LOS STRINGS QUE EMPIEXAN CON CONSONANTE
// /^[^aeiou]/i: La expresión regular aquí usa [^aeiou] en lugar de [aeiou]. El símbolo ^ dentro de los corchetes indica una negación, de modo que [^aeiou] significa "cualquier carácter que NO sea una vocal". De este modo, coincide con cualquier string que empiece con una consonante.

//De nuevo, filter() devuelve un array de palabras que comienzan con consonantes, y luego sort() las ordena alfabéticamente.

// .reduce() es útil para operaciones de acumulación, transformación de datos, y consolidación de información en arrays complejos. .reduce((acumulador, persona) 

// .split() divide un string en un array de subcadenas, utilizando un separador especificado. En este caso, el separador es el espacio en blanco (" "). Esto significa que cada palabra en la cadena original se convierte en un elemento del array resultante.

// .sort() ordena los elementos del array alfabéticamente. En este caso, los elementos son las palabras resultantes después de dividir la cadena en palabras. El ordenamiento se realiza en función de la posición de cada carácter en el código ASCII, lo que significa que las palabras se ordenan alfabéticamente.

