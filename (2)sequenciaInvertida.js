//Faça um programa no qual o usuário deve digitar a sequência de números de 1 a 10, invertida. Caso digite algum número fora da sequência, interromper e mostrar uma mensagem "Você errou a sequência". Do contrário, ao final mostrar uma mensagem "Você terminou a sequência corretamente".
let sequencia
alert('digite a sequencai de 10 até 1')
sequencia = Number(prompt('digite o numero'))
    for(let i = 10; i > 1; i--){ 
    if (i == 10 && sequencia == 10) {
        sequencia = Number(prompt('digite o numero'))
         i --
    } 
    else{
        alert('errou!')
        break
    }
    if (i == 9 && sequencia == 9) {
        sequencia = Number(prompt('digite o numero'))
         i --
    } 
    else{
        alert('errou!')
        break
    }
    if (i == 8 && sequencia == 8) {
        sequencia = Number(prompt('digite o numero'))
         i --
    }   
    else{
        alert('errou!')
        break
    }
    if (i == 7 && sequencia == 7) {
        sequencia = Number(prompt('digite o numero'))
         i --
    }  
    else{
        alert('errou!')
        break
    }
    if (i == 6 && sequencia == 6) {
        sequencia = Number(prompt('digite o numero'))
         i --
    }   
    else{
        alert('errou!')
        break
    }
    if (i == 5 && sequencia == 5) {
        sequencia = Number(prompt('digite o numero'))
         i --
    }   
    else{
        alert('errou!')
        break
    }
    if (i == 4 && sequencia == 4) {
        sequencia = Number(prompt('digite o numero'))
         i --
    }   
    else{
        alert('errou!')
        break
    }
    if (i == 3 && sequencia == 3) {
        sequencia = Number(prompt('digite o numero'))
         i --
    }   
    else{
        alert('errou!')
        break
    }
    if (i == 2 && sequencia == 2) {
        sequencia = Number(prompt('digite o numero'))
         i --
    }    
    else{
        alert('errou!')
        break
    }
    if (i == 1 && sequencia == 1) {
         alert('você acertou!!')
    }
    else{
        alert('errou!')
        break
    }
    }