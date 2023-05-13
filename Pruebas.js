function multiplicarArgumentos() {
    // Usa la palabra clave `arguments` para multiplicar todos los argumentos y devolver el producto.
    // Si no se pasan argumentos retorna 0. Si se pasa un argumento, simplemente retórnalo.
    // [PISTA]: "arguments" es un arreglo.
    // Tu código:
   producto = 1
   for (i=0; i<arguments.length; i++){
   producto = producto * arguments[i]
   }
   console.log(producto)
   return producto
 }
 
 multiplicarArgumentos(10,0,10)