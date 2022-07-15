

let alternativas = [
  {
    nombre:"Plan001",
    capital: 150000,
    plazo: 30,
    tasa: 15
  },
  {
    nombre:"Plan002",
    capital: 300000,
    plazo: 180,
    tasa: 10
  },
  {
    nombre:"Plan003",
    capital: 485000,
    plazo: 60,
    tasa: 23
  }
]

let alternativasConinteres = [];

for (var i = 0; i < alternativas.length; i++) {
  let contador = alternativas[i];
  let interes = (contador.capital * contador.plazo * contador.tasa) / 100;
  alternativasConinteres.push({
    nombre: contador.nombre,
    capital: contador.capital,
    plazo: contador.plazo,
    tasa: contador.tasa,
    interes: interes
  })
}

console.log(alternativasConinteres);
