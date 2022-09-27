//Fazer um programa que calcule o fatorial de um número. Fatorial é a multiplicação do próprio número por todos abaixo dele até 1. (Exemplo do fatorial de 5 seria: 5x4x3x2x1 = 120. Fatorial de 5 é 120).
let num, resultado = 0
num = Number(prompt('insira o numero desejado'))
 for(let i = num; i != 1; i --){
    if (resultado == 0) {
        resultado = (num * (i - 1))
    }
    else{
        resultado = resultado * (i-1)
    }
 }
alert(`o resultado é ${resultado}`)