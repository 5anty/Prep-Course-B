// En los próximos problemas, deberás completar la función.
// Todo tu código irá dentro de las llaves de la función.
// Asegúrate que usas "return" cuando la consola te lo pida.
// Pista: "console.log()" NO fucionará.
// No cambies los nombres de las funciones.

function imprimirSumaNumeros() {
  var a = 0
  for(var i=1 ; i<11 ; i++){
    a = a + i;
  }
  return a;

    // Imprime la suma de los números del 1 al 10
    // Pista: usa un acumulador
    // Tu código:
}

function encuentraPares(array){
  return array.filter(numero => numero % 2 ===0);
  // Devuelve un arreglo con los pares encontrados
  // en el arreglo de enteros pasado como parámetro
  // Tu código:
}

function elevaAlCuadrado(array){
return array.map((e) => e ** 2);
   
  // Devuelve un arreglo con cada número del array
  // elevado al cuadrado
  // Tu código:
}


function sumaArray(array){
  var S = 0;
  for(e of array) S += e
  return S;
  // Devuelve el resultado de sumar todos los elementos
  // de un arreglo de enteros dado
  // Tu código:
}

function numeroDigitos(num){
  return num.toString().length;
  
  // Devuelve el número de dígitos de un número dado
  // Tu código:
}
  
  
  // No modificar nada debajo de esta línea
  // --------------------------------
  
  module.exports = {
    imprimirSumaNumeros,
    encuentraPares,
    elevaAlCuadrado,
    sumaArray,
    numeroDigitos
  };
