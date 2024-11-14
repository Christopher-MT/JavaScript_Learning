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


  // Math.pow: calcula la potencia de un número, elevando un número base a un exponente.

  // Math.sqrt: calcula la raíz cuadrada de un número. Math.pow(base, exponent): Calcula base elevado a exponent.
    
  //Math.random() devuelve un número pseudoaleatorio entre 0 (incluido) y 1 (excluido).
//Ejemplo:
console.log(Math.random());  // → 0.635362... (ejemplo)

//            FUNCIONES DE REDONDEO
// Math.floor(): Redondea hacia abajo al número entero más cercano.
//Ejemplo:
console.log(Math.floor(4.9));  // → 4


// Math.ceil(): Redondea hacia arriba al número entero más cercano.
//Ejemplo:
console.log(Math.ceil(4.1));  // → 5


//Math.round(): Redondea al número entero más cercano.
//Ejemplo:
console.log(Math.round(4.5));  // → 5


//Math.abs(): Devuelve el valor absoluto (sin el signo negativo).
//Ejemplo:
console.log(Math.abs(-5));  // → 5