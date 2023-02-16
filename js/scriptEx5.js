var validacaoSenha = document.getElementById("outputValidacaoSenha");

function verificaSenha() {
  var senha = document.getElementById("inputSenha").value;
  var mensagemValidacao;
  if (senha == "1234") {
    mensagemValidacao = "PERMITIDO.";
  } else {
    mensagemValidacao = "NEGADO.";
  }
  validacaoSenha.innerText = "ACESSO " + mensagemValidacao;
  event.preventDefault();
}
