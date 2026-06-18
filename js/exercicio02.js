//estrutura de repetição for
const divfor = document.querySelector('#div-for')
for ( i = 0; i < 10; i++ ){
    console.log (i + 1  , 'amor <br>')
    divfor.innerHTML += `${i} - Amor <br> `  
}
//contador/acumulador 
const inputNum = document.querySelector('#num')
const btnNum = document.querySelector('#btn-num')
const divContAcum = document.querySelector('#div-cont-acum')

let cont = 0
let acum = 0.0

btnNum.addEventListener('click', (evt)=>{
    let numDigitado = String(inputNum.value)

    cont++
    acum += numDigitado

    divContAcum.innerHTML = `TOTAL DE NÚMERO DIGITADO É: ${cont} <br> 
    A SOMA DOS NÚMEROS É: ${acum}`

})
//  controlando for

const inputFrase = document.querySelector('#frase')
const inputNumRepeticao = document.querySelector('#num-repeticao')
const btnFrase = document.querySelector ('#btn-frase')
const divFrase = document.querySelector ('#div-frase')

btnFrase.addEventListener('click', (evt)=>{
    let numRepeti = Number(inputNumRepeticao.value)
    let frase = inputFrase.value

    divFrase.innerHTML = ''

    for ( i = 0 ; i < numRepeti ; i++ ){

        divFrase.innerHTML += ` ${frase} <br>`
    }

})
// atividade 1 
const divCalculo = document.querySelector('#div-calculo');

let quantidade = 0;

for (let i = 1; i <= 1000; i++) {
    if (i % 7 === 0) {
        quantidade++;
    }
}

divCalculo.innerHTML =
    `Existem ${quantidade} números divisíveis por 7 entre 1 e 1000.`;
// ATIVIDADE 2
const digNum = document.querySelector('#num-calc')
const btnCalc = document.querySelector('#btn-calculo')
const divCalc = document.querySelector('#div-divisores')


