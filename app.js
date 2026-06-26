const opciones = {
  temperatura: ["celsius", "fahrenheit", "kelvin"],
  distancia: ["metros", "kilometros", "millas"],
  peso: ["gramos", "kilogramos", "libras"]
};

function actualizarOpciones() {
  const tipo = document.getElementById("tipo").value;
  const desde = document.getElementById("desde");
  const hacia = document.getElementById("hacia");

  desde.innerHTML = "";
  hacia.innerHTML = "";

  opciones[tipo].forEach(u => {
    desde.innerHTML += `<option value="${u}">${u}</option>`;
    hacia.innerHTML += `<option value="${u}">${u}</option>`;
  });

  hacia.selectedIndex = 1;
  document.getElementById("resultado").textContent = "";
}

function convertir() {
  const tipo = document.getElementById("tipo").value;
  const valor = parseFloat(document.getElementById("valor").value);
  const desde = document.getElementById("desde").value;
  const hacia = document.getElementById("hacia").value;
  const resultadoEl = document.getElementById("resultado");

  if (isNaN(valor)) {
    resultadoEl.textContent = "Por favor ingresa un número válido.";
    resultadoEl.className = "resultado error";
    return;
  }

  let resultado;
  if (tipo === "temperatura") resultado = convertirTemperatura(valor, desde, hacia);
  else if (tipo === "distancia") resultado = convertirDistancia(valor, desde, hacia);
  else resultado = convertirPeso(valor, desde, hacia);

  resultadoEl.textContent = `${valor} ${desde} = ${parseFloat(resultado.toFixed(4))} ${hacia}`;
  resultadoEl.className = "resultado";
}

actualizarOpciones();
