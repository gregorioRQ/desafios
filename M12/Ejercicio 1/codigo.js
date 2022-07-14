
let h1 = document.querySelector("h1");

let edad = parseInt(prompt("ingrese la edad"));

if(edad > 18 || edad == "number"){
  let bienvenida = "Hola le damos la bienvenida.";
  h1.innerHTML = bienvenida;
}else{
  alert("error, ud es menor de edad.")
}
