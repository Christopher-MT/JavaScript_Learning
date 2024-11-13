function reverseArray(arr) {
    let reversedArray = [];
    for(let i = arr.length -1; i >= 0; i--  ) {
        reversedArray.push(arr[i]);
    }
    return reversedArray;
}

function reverseArrayInPlace(arr) {
    let inicio = 0;
    let fin = arr.length -1;

    while (inicio < fin) {
        let temp = arr[inicio];
            arr[inicio] = arr[fin];
            arr[fin] = temp;
            inicio++;
            fin--;
    }
}
console.log(reverseArray([1, 2, 3, 4, 5, 6, 7, 8, 9]));
let arr = [1, 2, 3, 4, 5];
reverseArrayInPlace(arr);
console.log(arr);
