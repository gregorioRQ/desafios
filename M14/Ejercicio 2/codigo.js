

// la function recibe el array si los intereses.

function arrayInversiones(array) {

// el array  vacio será retornado despues de que el bucle reordene los items agregando intereses.
  let arrayOferta = [];

  for (let i = 0; i < array.length; i++) {
    let selector = array[i];

    // la formula calculará el interes.
    let interes =  (selector.capital * selector.plazo * selector.tasa) / 100;

    // el nuevo item intereses es añadido al array.
    arrayOferta.push({capital: selector.capital, plazo: selector.plazo, tasa: selector.tasa, Intereses: interes});
  }
  return arrayOferta;
}
