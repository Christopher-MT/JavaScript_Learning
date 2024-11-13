

// for (let i = 0; i < 100; i++) {
    
    
//     if (i % 3 == 0) {
//         console.log("buzz")
        
//     }else if (i % 5 == 0) {
//         console.log("fizz")
        
//     }else {
//         console.log(i)
//     }
        
// }
for (let i = 0; i < 100; i++) {
    
    if (i % 3 == 0 && i % 5 != 0){
        console.log("Fizz");
    
    }else if (i % 3 != 0 && i % 5 == 0){
        console.log("Buzz");
        
    }else if(i % 3 == 0 && i % 5 == 0){
        console.log("Fizz Buzz");
    }else{
        console.log(i);
        
    }

}