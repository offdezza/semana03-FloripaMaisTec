var classificacaoIdade = document.getElementById("classificacaoIdade");

function verificaClassificacaoIdade() {
  var idade = document.getElementById("inputIdade").value;
  var classificacao;

  if (idade >= 0 && idade <= 12) {
    classificacao = "Criança";
  } else if (idade > 12 && idade <= 17) {
    classificacao = "Adolescente";
  } else if (idade > 17 && idade <= 65) {
    classificacao = "Adulto";
  } else if (idade > 65 && idade <= 110) {
    classificacao = "Sênior";
  } else {
    classificacao = "Inválida";
  }
  classificacaoIdade.innerText = "Classificação: " + classificacao;
  event.preventDefault();
}
