

let nombre = prompt("porfavor ingrese el nombre de usuario.");
let clave = parseInt(prompt("ahora ingrese su clave."));

let h1 = document.querySelector("h1");

if(nombre == "admin" && clave == 1234){
  h1.innerHTML = "BIENVENIDO "+nombre+"!!!.";
}else{
  alert("usuario o contraseña incorrectos.");
}
