var numSecret = parseInt(Math.floor(Math.random() * 20) + 1)
var tentativas = 5

while (tentativas > 0) {
  var chute = parseInt(prompt("Digite um número entre 1 e 20, você terá " + tentativas + " tentativas!"))

  if (numSecret == chute) {
    document.write("<h2>Parabéns você acertou!</h2>")
    break
  } else if (chute > numSecret) {
    alert("O número secreto é menor")
    tentativas = tentativas - 1
  } else if (chute < numSecret) {
    alert("O número secreto é maior")
    tentativas = tentativas - 1
  }
}

if (chute != numSecret) {
  document.write("<h2>" + "Suas tentativas acabaram, o número secreto era " + numSecret + "</h2>")
}
