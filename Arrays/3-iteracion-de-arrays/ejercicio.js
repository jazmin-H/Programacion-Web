
/* while-

const array = ["Shoto", "torta", "pasta"];

let contador = 0;

while(contador <array.length){
    console.log(array(contador))
    contador++;
}

//for 
for (let contado = 0; contado < frutas.length; contado++) {
  console.log(frutas[contado]) 
}

//foreach

array.forEach((element) => {
 console.log(element);
});
*/
const lista = [1,2,4,5,5,6,6,7] 

let suma = 0;
function sumarPares(numeros) {
  // código 
  for (let i = 0; i < numeros.length; i++) {
    if(numeros[i] % 2 === 0){
        suma = suma + numeros[i]
    
    }
 }
 return suma
}

console.log(sumarPares(lista))