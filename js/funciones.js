function randomico() {
    return Math.floor(Math.random() * 10) + 1;
  }
  
  function obtenernumero() {
    return parseInt(document.getElementById("inp_num").value);
  }
  function envio() {
    let num = obtenernumero();
    let random = randomico();
    let resultado = document.getElementById("lbl_resultado");
    
    if (num < random) {
      resultado.innerHTML = "El numero ingresado es menor que el generado.";
    } else if (num > random) {
      resultado.innerHTML = "El numero ingresado es mayor que el generado.";
    } else {
      resultado.innerHTML = "Ganaste";
    }}
  