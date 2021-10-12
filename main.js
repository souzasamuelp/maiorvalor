function maiorValor() {
    let numberUm = parseInt( window.prompt("Digite um número: ") )
    let numberDois = parseInt( window.prompt("Digite outro número: ") )

    let maior 
    if(numberUm == numberDois) {
        maior = "ambos são IGUAIS"
    } else if(numberUm > numberDois) {
        maior = `o maior valor é ${numberUm}`
    } else {
        maior = `o maior valor é ${numberDois}`
    }

    let resultado = document.querySelector("section#resultado")
    resultado.innerHTML = `<p>Analisando os valores ${numberUm} e ${numberDois}, ${maior}</p>`
}