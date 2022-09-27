//Desenvolver um programa no qual o usuário digite o número de multas que deseja cadastrar e para cada multa deve colocar o valor em reais e os pontos perdidos na carteira de habilitação. Ao final, mostrar o somatório das multas e dos pontos, caso os pontos alcancem 21 ou mais, exibir a mensagem “Você está irregular”, senão, exibir “Você está regular”.
let multas, valor, pontos, acumuloPontos = 0, acumuloValor = 0, qualMulta = 1

multas = Number(prompt("digite o número de multas que deseja cadastrar"))

for(i = multas; i > 0; i--){

    valor = Number(prompt(`Valor da multa ${qualMulta}`))
    pontos = Number(prompt("pontos na carteira"))
    acumuloValor = acumuloValor + valor
    acumuloPontos = acumuloPontos + pontos
    qualMulta ++
}
if (acumuloPontos>=21) {
    alert(`o valor total das multas ficou em R$${acumuloValor}\nvocê recebeu ${acumuloPontos} pontos\n\nvocê está irregular`)
}else{
    alert(`o valor total das multas ficou em R$${acumuloValor}\nvocê recebeu ${acumuloPontos} pontos\n\nvocê está regular`)
}
