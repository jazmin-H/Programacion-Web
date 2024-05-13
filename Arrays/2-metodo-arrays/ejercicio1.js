
const array = ["Shoto", "queso", "pasta"]
function procesarpedidos(pedidos){
   const nombreCliente = pedidos.shift();
   const bebida = "Manaos";
   pedidos.unshift(bebida);
   pedidos.push(nombreCliente);
   return pedidos; 
}

console.log(procesarpedidos(array));



