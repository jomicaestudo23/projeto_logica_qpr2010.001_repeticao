//estrutura de repetição for
const divfor = document.querySelector('#div-for')
for ( i = 0; i < 10; i++ ){
    console.log (i + 1  , 'amor')
    divfor.innerHTML += `${i} - Amor <br> `  
}
//contador/acumulador 
const inputNum = document.querySelector('#num')
const btnNum = document.querySelector('#btn-num')
const divContAcum = document.querySelector('#div-cint-acum')

let cont = 0

btnNum.addEventListener('click', (evt)=>{
    let numDigitado = Number(inputNum.value)

    cont++
    acum += numDigitado

    divContAcum.innerHTML = `TOTAL DE NÚMERO DIGITADO É: ${cont} <br> 
    A SOMA DOS NÚMEROS É: ${acum}`

})