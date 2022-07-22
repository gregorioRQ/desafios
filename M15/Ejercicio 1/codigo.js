

let costosFijos = document.querySelector(".costos-fijos");
let costosVariables = document.querySelector(".costos-variables");
let precioVenta = document.querySelector(".precio-venta");
let agregar = document.querySelector(".agregar");

agregar.addEventListener("click", mostrar);

function mostrar() {
  let resultado = costosFijos.value / (precioVenta.value - costosVariables.value);

  let div =  document.createElement("div");
  let contenido = document.createTextNode(resultado);
  div.appendChild(contenido);

  let div1 = document.getElementById("div1");
  document.body.insertBefore(div, div1);

  console.log(resultado);
}
