// let math = function () {
//     let PI = 3.14;

//     function sum(a, b) {
//         return a + b;
//     }

//     function multiply(a, b) {
//         return a * b;
//     }

//     function random() {
//         return Math.random();
//     }

//     return {
//         sum,
//         multiply,
//         random
//     }

//     function floor(a) {
//         return Math.floor(a);
//     }

// }()

// console.log(math.floor(math.random() * 10));
// console.log(math.sum(2, 3));
// console.log(math.multiply(2, 3));
// console.log(math.PI);


function adivinaElNumero() {
    let numeroSecreto = Math.floor(Math.random() * 100) + 1;
    let intento;
  
    while (intento !== numeroSecreto) {
      intento = parseInt(prompt("Adivina el número (entre 1 y 100):"));
  
      if (intento < numeroSecreto) {
        console.log("Demasiado bajo.");
      } else if (intento > numeroSecreto) {
        console.log("Demasiado alto.");
      } else {
        console.log("¡Correcto! Has adivinado el número.");
      }
    }
  }
  
  adivinaElNumero();
    