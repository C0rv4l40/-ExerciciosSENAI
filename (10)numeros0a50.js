//Fazer um programa no qual o usuário deve digitar 10 números entre 0 e 50. Ao final deve mostrar o maior número digitado e o menor número digitado. Os números digitados que não estiverem entre 0 e 50, devem ser desconsiderados. (DESAFIO: Ao final, dizer a quantidade de números que foram desconsiderados)
let numero, numeroMax = 0, numeroMin = 51, fora = 0

for(let i = 10; i > 0; i --){
    numero = Number(prompt(`insira um numero de 0 a 50`))
    
    if(numero < 51 && numero > 0){
        if(numero>numeroMax){
            numeroMax = numero
        }
        if(numero < numeroMin){
            numeroMin = numero
        }
    }
    else{
         fora++
    }
}
alert(`o Número maior é ${numeroMax}\nNúmero menor ${numeroMin}\nNumeros ignorados ${fora}`)
