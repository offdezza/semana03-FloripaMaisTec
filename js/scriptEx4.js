var outputClassificacaoBonificacao = document.getElementById(
  "outputClassificacaoBonificacao"
);

function verificaClassificacaoPedido() {
  var valorVenda = document.getElementById("inputValorVenda").value;
  var classificacaoPedido;

  if (valorVenda <= 10.0 && valorVenda > 0) {
    classificacaoPedido =
      "Bronze. O valor do pedido de R$ " +
      valorVenda +
      " se encaixa na faixa de até 10.000,00 reais.";
  } else if (valorVenda > 10.0 && valorVenda < 100.0) {
    classificacaoPedido =
      "Prata. O valor do pedido de R$ " +
      valorVenda +
      " se encaixa na faixa entre 10.000,00 e 99.999,99 reais.";
  } else if (valorVenda >= 100.0 && valorVenda <= 500.0) {
    classificacaoPedido =
      "Ouro. O valor do pedido de R$ " +
      valorVenda +
      " se encaixa na faixa entre 100.000,00 e 500.000,00 reais.";
  } else if (valorVenda > 500.0) {
    classificacaoPedido =
      "Platinum. O valor do pedido de R$ " +
      valorVenda +
      " se encaixa na faixa acima de 500.000 reais.";
  } else {
    classificacaoPedido = "Valor inserido é inválido.";
  }
  outputClassificacaoBonificacao.innerText =
    "Classificação da Bonificação: " + classificacaoPedido;
  event.preventDefault();
}
