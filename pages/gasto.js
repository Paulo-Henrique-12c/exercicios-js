function gastoCombustivel(tempo, velocidadeMedia){
    return (tempo * velocidadeMedia) / 12
}


let tempo1 = Number(prompt("Digite o Tempo em Horas da Viagem: "))
let velocidadeMedia1 = Number( prompt("Digite a Velocidade Média: "))


console.log(`${gastoCombustivel}`)

