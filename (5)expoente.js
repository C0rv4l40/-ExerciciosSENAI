//Fazer um programa no qual o usuário deve digitar um número e o expoente dele. Mostrar na tela o resultado do cálculo. (Não é permitido usar o operador **)
let num, expoente, resultado = 1

num = Number(prompt('insira o número:'))
expoente = Number(prompt('insira o número do expoente:'))

for (let i = expoente; i != 0; i--) {
    resultado = resultado * num
        
}
alert(`o resultado é ${resultado}`)