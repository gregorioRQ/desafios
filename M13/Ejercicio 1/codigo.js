let flujoCaja = [
  {
    periodo: "Enero",
    ingreso: 1500,
    egreso: 1500
  },
  {
    periodo: "Febrero",
    ingreso: 2500,
    egreso: 2500
  },
  {
    periodo: "Marzo",
    ingreso: 84683,
    egreso: 1155
  },
  {
    periodo: "Abril",
    ingreso: 135353,
    egreso: 1533
  },
  {
    periodo: "Mayo",
    ingreso: 1535,
    egreso: 5434
  },
  {
    periodo: "Junio",
    ingreso: 4343354,
    egreso: 5434543
  },
  {
    periodo: "Julio",
    ingreso: 435453,
    egreso: 4543
  },
  {
    periodo: "Agosto",
    ingreso: 78351,
    egreso: 7816
  },
  {
    periodo: "Septiembre",
    ingreso: 1878,
    egreso: 95634
  },
  {
    periodo: "Octubre",
    ingreso: 48483,
    egreso: 9433
  },
  {
    periodo: "Noviembre",
    ingreso: 35483,
    egreso: 53133
  },
  {
    periodo: "Diciembre",
    ingreso: 3843,
    egreso: 348133
  }
]

let ingreso = 0;
let egreso = 0;


for (var i = 0; i < flujoCaja.length; i++) {
  let contadorDeFlujo = flujoCaja[i];
  ingreso = ingreso + contadorDeFlujo.ingreso;
  egreso = egreso + contadorDeFlujo.egreso;
}

let h1 = document.querySelector(".h1");
h1.innerHTML = "La cantidad total de ingresos del año pasado fue de: "+ingreso+"<br>El egreso total del año pasado fue de: "+egreso;
