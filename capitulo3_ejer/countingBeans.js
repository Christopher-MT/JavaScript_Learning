const contarBs = cadena => {
    let contador = 0;
    
    for (let i = 0; i < cadena.length; i++) {
        if (cadena[i] === "B") {
            contador++;
        }
    }
    return contador;
}
    console.log(contarBs("BBSB"));
    console.log(contarBs("BBC")); 
    console.log(contarBs("abcB")); 
    console.log(contarBs("BBBB")); 
    console.log(contarBs("hello world")); 