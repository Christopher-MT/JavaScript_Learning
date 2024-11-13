function range(inicio, fin, paso = inicio < fin ? 1 : -1){
    let rango = [];
    if(paso > 0){
        for (let i = inicio; i <= fin; i+= paso) rango.push(i);
    }else{
        for(let i = inicio; i >= fin; i += paso) rango.push(i);
    }

    return rango;

}

function sum(rango) {
    let total = 0;
    for( let valor of rango){
        total += valor;
    }
    return total
}

console.log(range(1, 10));
console.log(range(5, 2, -1));
console.log(sum(range(1,10)))