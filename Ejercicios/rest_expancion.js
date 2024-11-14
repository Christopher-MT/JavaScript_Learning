// EJERCICIO FACIL

function suma(...numbers) {
    return numbers.reduce((accomulator, num)=> accomulator + num, 0)
}
console.log(suma(1, 2, 3, 4, 5, 6, 7, 8, 9, 10));
console.log(suma(10, 20, 30, 40, 50, 60, 70, 80, 90, 100));

//EJERCICIO DIFICIL
function promedioPonderado (numeros, pesos) {
    let totalPeso = pesos.reduce((total, peso)=> total + peso, 0);
    let sumaPonderada = numeros.reduce((total, num , i)=> total + num * pesos[i], 0);
    return totalPeso / sumaPonderada;
}

console.log(promedioPonderado([3, 4, 8], [1, 2, 3]));


