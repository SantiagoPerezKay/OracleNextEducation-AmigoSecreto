// El principal objetivo de este desafío es fortalecer tus habilidades en lógica de programación. Aquí deberás desarrollar la lógica para resolver el problema.
let listaNombres = [];

function agregarAmigo() {
  let nombre = document.getElementById("amigo").value.trim();
  //el trim() se lo agrego para limpiar espacios al principio y al final de la cadena.

  nombre
    ? (listaNombres.push(nombre), (document.getElementById("amigo").value = ""))
    : alert("nombre nullo, ingrese un nombre valido");

  agregarAmigosUl();
}

function agregarAmigosUl() {
  let lista = document.getElementById("listaAmigos");
  lista.innerHTML = "";

  for (let index = 0; index < listaNombres.length; index++) {
    let li = document.createElement("li");
    li.textContent = listaNombres[index];
    lista.appendChild(li);
  }
}
function limpiarLista() {
  let lista = document.getElementById("listaAmigos"); 
  lista.innerHTML = "";  
}

function sortearAmigo() {
  let numero = Math.floor(Math.random() * listaNombres.length);
  let nombreSorteado = listaNombres[numero];

  let sorteado = document.getElementById("resultado");
  let li = document.createElement("li");
  li.textContent = nombreSorteado;
  sorteado.appendChild(li);
}

function reset(){
  listaNombres = [];
limpiarLista();
let ganador = document.getElementById("resultado");
ganador.innerHTML = "";
}
