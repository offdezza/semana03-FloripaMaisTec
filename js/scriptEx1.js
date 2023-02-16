/*var num = parseInt(prompt("Digite um numero qualquer: "));

if (num % 2 == 0) {
  console.log("O número " + num + " é um número par.");
} else if (num % 2 != 0) {
  console.log("O número " + num + " é um número ímpar.");
} else {
  console.log("Valor digitado é inválido.");
} */

function verificaNumParImpar() {
  var num = document.getElementById("inputNumParImpar").value;

  if (num % 2 == 0) {
    console.log("O número " + num + " é um número par.");
  } else if (num % 2 != 0) {
    console.log("O número " + num + " é um número ímpar.");
  } else {
    console.log("Valor digitado é inválido.");
  }
  event.preventDefault();
}
