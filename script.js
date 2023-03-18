
let numberOne, numberTwo

numberOne = Number(prompt("Digite o primeiro número:"))
numberTwo = Number(prompt("Digite o segundo número:"))

const sum = numberOne + numberTwo
const sub = numberOne - numberTwo
const multi = numberOne * numberTwo
const div = numberOne / numberTwo
const rest = numberOne % numberTwo

alert(`A soma dos dois números é: ${sum}`)
alert(`A subtração dos dois números é: ${sub}`)
alert(`A multiplicação dos dois números é: ${multi}`)
alert(`A divisão dos dois números é: ${div.toFixed(2)}`)
alert(`O resto da divisão dos dois números é: ${rest}`)

if(sum % 2 == 0){
  alert(`A soma dos dois número é par: ${sum}`)
} else {
  alert(`A soma dos dois número é impar: ${sum}`)
}

if(numberOne == numberTwo){
  alert("Os números inseridos são iguais")
} else {
  alert("Os números inseridos são diferentes")
}