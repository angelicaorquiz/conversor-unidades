const factoresDistancia = {
  metros: 1,
  kilometros: 1000,
  millas: 1609.344
};

const factoresPeso = {
  gramos: 1,
  kilogramos: 1000,
  libras: 453.592
};

function convertirDistancia(valor, desde, hacia) {
  return valor * factoresDistancia[desde] / factoresDistancia[hacia];
}

function convertirPeso(valor, desde, hacia) {
  return valor * factoresPeso[desde] / factoresPeso[hacia];
}
