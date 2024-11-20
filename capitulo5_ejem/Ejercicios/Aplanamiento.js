let combineArrays = [[1, 2], [3, 4], [5]];

let mixArray = combineArrays.reduce((acc, arr) => acc.concat(arr), []);
console.log(mixArray);


