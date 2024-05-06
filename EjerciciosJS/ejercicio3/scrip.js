/*seleccionar el id de la lista 
el valor del input
*/

function agregarElementos() { 
    let lista = document.getElementById("lista");
    let input = document.getElementById("textarea").value
    const elementoLista = document.createElement("li");
    const buttom = document.createElement("button");

    elementoLista.textContent = input;
    buttom.textContent = "delete";
     
    lista.appendChild(elementoLista);
    elementoLista.append(buttom);  

    buttom.onclick = function (){
         elementoLista.remove(buttom);
    }
    //console.log(lista);

    
}