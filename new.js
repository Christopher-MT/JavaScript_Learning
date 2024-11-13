let size = 8;
let car = " ";

for (let ñ = 0; ñ < size; ñ++) {
    for (let b = 0; b < size; b++){

        if ((b + ñ)% 2 == 0) {
            car += " ";
            }else {
                car += "#";
            }
    }
    car += "\n";
}
console.log(car);

