//EJERCICIO FACIL

let [a, b, c] = [1, 2, 3];

console.log([a,b,c]);

//EJERCICIO INTERMEDIO

let {name, ege} = {name: "Ana", ege: 25}

console.log(name,ege);

//EJERCICIO DIFICIL 
// 1.
function sumaDeObjetos({ x, y, z}) {
    return x + y + z;
}

console.log(sumaDeObjetos({x: 10, y: 20, z: 10}));


// 2.
function great({name, age}) {
    return `Hello my name is ${name} and I'm ${age} years old`
}

console.log(great({name: "weimar", age: 35}));