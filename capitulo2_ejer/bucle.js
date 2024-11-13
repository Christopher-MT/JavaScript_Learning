// let car = "#"
// for (let i = 0; i < 7; i++) {
    
//     console.log(car);
//     car = car + "#";
    
// }

let vari = "$"

for (let i = 0; i < 20; i++) {
    
    console.log(vari);

    vari = vari + "$"
    
}

let sim = 20

let varo = "$";

for (let b = 0; b < sim; b++) {
    for (let ñ = 0; ñ < sim; ñ++) {

        if ((b + ñ)%2 === 0) {
            varo += "$";
        }
        
    }

    varo += "\n";
}
console.log(varo)