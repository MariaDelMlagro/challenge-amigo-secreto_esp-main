
let amigo = ["jairo"];


let lista= document.getElementById("listaAmigos");

for (let i = 0; i < amigo.length; i++) {
    console.log(amigo[i]); 

    let li = document.createElement("li"); 
    li.textContent = amigo [i]; 
    lista.appendChild(li); 

}
 
function agregarAmigo() {
    let nombre = document.getElementById("nombreAmigo").value;
    document.getElementById("nombreAmigo").value = "";
    if (nombre === "") {
        alert("Por favor, inserte un nombre.");
        return;
    }

    amigo.push(nombre); 
   
    

    lista.innerHTML = ""
    for (let i = 0; i < amigo.length; i++) {
    console.log(amigo[i]); 

    let li = document.createElement("li"); 
    li.textContent = amigo [i]; 
    lista.appendChild(li); 

    

}

}

function sortearAmigo() {

    let indiceAleatorio = Math.floor(Math.random() * amigo.length);

    let amigoSorteado = amigo[indiceAleatorio];
    document.getElementById("resultado").innerHTML = "El amigo seleccionado es: " + amigoSorteado;

}


