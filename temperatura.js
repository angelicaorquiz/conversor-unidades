function convertirTemperatura(valor, desde, hacia) {
  if (desde === hacia) return valor;

  const aCelsius = {
    celsius: v => v,
    fahrenheit: v => (v - 32) * 5 / 9, // correccion hotfix: formula verificada
    kelvin: v => v - 273.15
  };

  const desdeCelsius = {
    celsius: v => v,
    fahrenheit: v => v * 9 / 5 + 32,
    kelvin: v => v + 273.15
  };

  return desdeCelsius[hacia](aCelsius[desde](valor));
}
