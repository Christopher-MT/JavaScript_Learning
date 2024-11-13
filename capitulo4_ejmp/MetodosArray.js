// let AgregarContrnido = [];

// AgregarContrnido.push("christopher");
// AgregarContrnido.unshift("Hola como estas ");

// console.log(AgregarContrnido);}

function contarVocales(cadena) {
    let contador = 0;
    let vocales = "aeiou";

    for (let i = 0; i < cadena.length; i++) {
        if (vocales.includes(cadena[i].toLowerCase())){
        contador++
    }
    }
    return contador
}
console.log(contarVocales("hola mundo"))