function sumarNumeros(...numbers) {
    let sum = 0;

    for(let number of numbers) {
        sum += number;
    }
    return sum;
}
console.log(sumarNumeros(1, 5 ,7 ,10));
console.log(sumarNumeros(80, 145, 7, 60));



let persona = {nombre: "simon", edad: 20};
let otarPersona = {...persona, ocupacion: "pogramer"};

console.log(otarPersona);