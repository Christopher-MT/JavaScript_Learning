function esPar(n) {
    if(n % 2 == 0){
        console.log("Es par");
    }else{
        console.log("Es impar");//Tambien se puede poner un (return "Es impar";) da lo  mismo que console.log en esta ocacion
    }
}

console.log(esPar(10));
console.log(esPar(5));