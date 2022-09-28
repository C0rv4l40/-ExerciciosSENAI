//Criar um programa que simule um jogo de cartas, onde inicialmente deve-se perguntar o nome do jogador 1 e o nome do jogador 2. Cada jogador tem 5 cartas para jogar. Inicia pelo jogador 1, em seguida o jogador 2, e assim segue alternando até que cada jogador tenha "jogado" suas 5 cartas. Os valores das cartas devem se digitados. Vence o jogador que tiver a maior soma. Ao final mostrar o nome do jogador vencedor e a sua soma. Caso tenha dado empate, mostrar mensagem na tela "O jogo empatou!". (DESAFIO: Aceitar somente cartas com valores entre 1 e 13, como no baralho OU gerar as cartas aleatoriamente nesse intervalo numérico).

let cartaJogUm, cartaJogDois
let somaJog1 = 0, somaJog2 = 0
let nomeJog1, nomeJog2

    nomeJog1 = prompt("nome jogador um: ")
    nomeJog2 = prompt("nome jogador dois: ")

for (i = 0; i < 5; i++) {

    
        cartaJogUm = Number(prompt('digite uma carta: '))
        
        if (cartaJogUm > 1 && cartaJogUm < 13) {
            somaJog1 += cartaJogUm
        } else {
            alert('carta invalida')
        }
        

        cartaJogDois = Number(prompt('digite uma carta: '))
        
        if (cartaJogDois > 1 && cartaJogDois < 13) {
            somaJog1 += cartaJogDois
        } else {
            alert('carta invalida')
        }
        
    
}
if (somaJog1 > somaJog2) {
    alert(`${nomeJog1} ganhou com ${somaJog1}`)
}else{
    alert(`${nomeJog2} ganhou com ${somaJog2}`)
}