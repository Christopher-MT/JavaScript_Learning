// JSON.stringify: Convierte un objeto o array de JavaScript en una cadena JSON.
// JSON.parse: Convierte una cadena JSON en un objeto o array en JavaScript.


//EJERCICIO INTERMEDIO
let person = {nombre: "Juan", edad: 30, ciudad: "Lima"};

let changeJson = JSON.stringify(person);

console.log(changeJson);

let changeObject = JSON.parse(changeJson);
console.log(changeObject);
console.log(changeObject.nombre);