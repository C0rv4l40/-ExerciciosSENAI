//Desenvolva um programa no qual o usuário deve digitar o nome e a idade de 5 pessoas. Ao final mostrar a média de idade delas e a maior idade dentre essas pessoas. (DESAFIO: Mostrar na tela também o nome da pessoa com maior idade)
let nome, idade, idadeMax = 0, nomeMax, media = 0, somaIdd =0

    for(let i = 0; i < 5; i ++){
        nome = prompt('digite o nome:')
        idade = Number(prompt("digite a idade: "))

        if (idade >= idadeMax) {
            if (idade == idadeMax) {
                nomeMax = nome + "e" + nomeMax
            }
            else{
                nomeMax = nome
        }
            idadeMax = idade
        }
        else{

        }
        somaIdd = (somaIdd + idade)
    }

    media = (somaIdd / 5).toFixed(2)

    alert(`o participante ${nomeMax} tem a maior idade, de ${idadeMax}\ne ${media} é a média de idade`)