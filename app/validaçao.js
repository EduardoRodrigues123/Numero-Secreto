function     verificaSeOchutepossuiumValorValida(chute){
  const numero = +chute

  if (chuteForInvalido(numero)){
    elementoChute.innerHTML += "<div> valor invalido </div>"
  }

  if (numeroForMaiorOuMenorQueOvalorPermitido){
    elementoChute.innerHTML += `<div> valor invalido: o numero secreto precisa estar entre ${menorValor} e ${maiorValor} </div> `
  }

  if( numero === numeroSecreto){
    document.body.innerHTML = `
    <h2>Parabens, voce acertou!</h2>
    <h3>O numero secreto era ${numeroSecreto}</h3>
    `
  }
}

function chuteForInvalido(numero) {
    return Number.isNaN(numero)
}

function numeroForMaiorOuMenorQueOvalorPermitido (numero){
    return numero > maiorValor || numero < menorValor
}
