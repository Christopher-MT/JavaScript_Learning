function sumaDeDigitos(n) {
    if (n < 10) {
        return n;// Caso base: si n es menor que 10, devuelve n (ya que es el único dígito)
    }else{
        return n + sumaDeDigitos (n -1)
    }
    
    // Llamada recursiva: suma el último dígito (n % 10) y llama a la función con el número sin el último dígito (Math.floor(n / 10))
  }
  console.log(sumaDeDigitos(5))