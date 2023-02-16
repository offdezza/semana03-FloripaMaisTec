var outputPermissao = document.getElementById("outputPermissao");

function verificaPermissao() {
    var peso = document.getElementById("inputPeso").value;
    var comprimento = document.getElementById("inputComprimento").value;
    var permissao;

  if (peso <= 1500 && peso > 0 && comprimento <= 5 && comprimento > 0) {
    permissao = "Liberado. Peso de " + peso + "kg e comprimento  de " + comprimento + " metros dentro do permitido.";
  } else if (peso >= 1500 && peso > 0 && comprimento <= 5 && comprimento > 0) {
    permissao = "Negado. Peso de " + peso + "kg acima do permitido.";
  } else if (peso <= 1500 && peso < 0 && comprimento <= 5 && comprimento > 0) {
    permissao = "Valor inválido. Peso de " + peso + "kg abaixo de 0.";
  } else if (peso <= 1500 && peso > 0 && comprimento >= 5 && comprimento > 0) {
    permissao = "Negado. Comprimento  de " + comprimento + " metros acima do permitido.";
  } else if (peso <= 1500 && peso > 0 && comprimento <= 5 && comprimento < 0) {
    permissao = "Valor inválido. Comprimento de " + comprimento + " metros abaixo de 0.";
  } else if (peso >= 1500 && peso > 0 && comprimento >= 5 && comprimento > 0) {
    permissao = "Negado. Peso de " + peso + "kg e comprimento  de " + comprimento + " metros acima do permitido.";
  } else {
    permissao = "Valores inseridos são inválidos.";
  }
  outputPermissao.innerText = "Permissão: " + permissao;
  event.preventDefault();
}