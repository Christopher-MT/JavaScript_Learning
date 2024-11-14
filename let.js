// let five = 10;
// console.log(five +  five);

let johan = 8;
let weimar = ""

for (gay = 0; gay < johan; gay++){
    for ( carepa = 0; carepa < johan; carepa++){

        if ((carepa + gay)% 2 == 0){
            weimar += " ";
        }else {
            weimar +="$";
        }
    }
    weimar += "\n";
}
console.log(weimar)

// // CON BUCLE
// let etiquetas = [];
// let repetir = 5;
// for(let i = 0; i < repetir; i ++) {
//     etiquetas.push(`Usuario ${i + 1}`)
// };

// console.log(etiquetas);

// CON FUNCIÓN
function repeti(veces, callback) {
    for (let i = 0; i < veces; i++) {
        callback(i);
    }
}

let etiqueta = [];
    repeti (5, i => {
    etiqueta.push(`Usuario ${i + 1}`)
})

console.log(etiqueta)


// function repetir(veces, callback) {
//     for (let i = 0; i < veces; i++) {
//       callback(i);
//     }
//   }
  
//   let etiqueta = [];
//   repetir(5, i => {
//     etiqueta.push(`Usuario ${i + 1}`);
//   });
  
//   console.log(etiqueta);


let numero = 0;

while (numero <= 18) {
    console.log(numero)
    numero = numero +2;
}
console.log(numero)


for (let actual = 20; ;actual = actual + 1) {
        if(actual % 7 == 0){
            console.log(actual);
            break
        }
}

let persona = {a: 10, b: 50, c: 70}

console.log(persona);