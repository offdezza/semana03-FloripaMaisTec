var outputMaiorNum = document.getElementById("outputMaiorNum");

function verificaMaior() {
    var num1 = document.getElementById("inputNum1").value;
    var num2 = document.getElementById("inputNum2").value;
    var maiorNum;

    if(num1 > num2) {
        maiorNum = num1;
    } else {
        maiorNum = num2;
    } 
    outputMaiorNum.innerText = "O maior número é: " + maiorNum;
    event.preventDefault();
}