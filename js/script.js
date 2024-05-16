// Seleção de elementos 
const nome = document.querySelector('#name')
const altura = document.querySelector('#altura')
const peso = document.querySelector('#peso')
const btn = document.querySelector('#calcular')
const result = document.querySelector('#result')

// Functions
function calculadora(height, weight) {
    let resultado = weight / (height * height)
    resultado = resultado.toFixed(3)
    if(resultado < 18.5) {
        result.innerHTML = `${nome.value}, seu IMC deu ${resultado} e com a classificação <mark>ABAIXO DO PESO.</mark>`
    } else if (resultado <= 24.9) {
        result.innerHTML = `${nome.value}, seu IMC deu ${resultado} e com a classificação <mark>PESO NORMAL.</mark>`
    } else if (resultado <= 29.9) {
        result.innerHTML = `${nome.value}, seu IMC deu ${resultado} e com a classificação <mark>SOBREPESO.</mark>`
    } else if (resultado <= 34.9) {
        result.innerHTML = `${nome.value}, seu IMC deu ${resultado} e com a classificação <mark>OBESIDADE GRAU I.</mark>`
    } else if (resultado <= 39.9) {
        result.innerHTML = `${nome.value}, seu IMC deu ${resultado} e com a classificação <mark>OBESIDADE GRAU II.</mark> CUIDADO!`
    } else if (resultado >= 40) {
        result.innerHTML = `${nome.value}, seu IMC deu ${resultado} e com a classificação <mark>OBESIDADE GRAU III.</mark> CUIDADO!`
    }
    
}

// Eventos
btn.addEventListener('click', (e) => {
    e.preventDefault()
    const nomeInput = nome.value
    const alturaInput = altura.value
    const pesoInput = peso.value
    if(!nomeInput || !alturaInput || !pesoInput) return 

    calculadora(alturaInput, pesoInput)
  
})