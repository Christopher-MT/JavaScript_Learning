// function isVen(n) {
//     if (n == 0){
//         return false;
//     }else{
//         if (n == 1) {
//             return false;
//         }else{
//             if (n < 0) {
//                 return isVen (-n)
//             }else{return isVen (n - 2);

//             }
//         }
//     }
// }
//     console.log(isVen(50));
//     console.log(isVen(75));
//     console.log(isVen(-1));
    function isVen(n) {
        if (n == 0) return true;
        else if (n == 1) return false;
        else if (n < 0) return isVen(-n);
        else return isVen(n - 2);
}

    console.log(isVen(50));
    console.log(isVen(75));
    console.log(isVen(-1));
// function isEven(n) {
//     if (n == 0) return true;
//     else if (n == 1) return false;
//     else if (n < 0) return isEven(-n);
//     else return isEven(n - 2);
//   }
  
//   console.log(isEven(50));
//   // → true
//   console.log(isEven(75));
//   // → false
//   console.log(isEven(-1));
//   // → false