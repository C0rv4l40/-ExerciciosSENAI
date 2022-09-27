//Programar para que o usuário digite 5 números e caso sejam pares, mostre a média deles. Se algum número digitado não for par, ao final não será mostrada a média e sim uma mensagem “Um dos números digitados era ímpar”.
let num, acumulo = 0, media

for (i = 5; i > 0; i--){

    num = Number(prompt('insira 5 valores: '))
   
    if (num % 2 == 0) {
        acumulo = num + acumulo
    } else {
        alert(`o número não era par`)
        break;
    }
}
if(i == 0){
    media = (acumulo / 5).toFixed(2)
    alert(`parabens voce conseguiu`)
    alert(`a média dos números é:\n\n${media}`)
}
