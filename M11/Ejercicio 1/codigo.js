let costosFijos = parseInt(prompt("Ingrese los costos fijos"));
let precionVenta = parseInt(prompt("Ingrese los precio de ventas"));
let costosVariables = parseInt(prompt("Ingrese los costos de variables"));

let resultado = precionVenta - costosVariables;
let pe = costosFijos / resultado;

document.write("Su Punto de equilibrio es: "+ pe)