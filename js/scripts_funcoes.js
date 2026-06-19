
function mensagem (){
    console.log('uma mensagem')
    
}

mensagem()

function mensagemLinda(txt){
    console.log(txt)
}

mensagemLinda('Brasil vai dar um pau no Haiti')

function somaNumeros (num1, num2){
    return num1 + num2
}

console.log('As somas dos números',somaNumeros(10, 58))

const multiplicacao = function(num1, num2){
    return num1 * num2
}

console.log(multiplicacao(64, 5))

console.log('------> ARROW FUNCTION <------')

const msgArrow = () => {
    console.log('Outra mensagem na arrow function')
}

msgArrow()

const divisaoNum = (valor1, valor2) => {
    let resposta;

    if (valor2 !== 0) {
        resposta = valor1 / valor2;
    } else {
        resposta = 'NÃO É POSSÍVEL DIVISÃO POR ZERO';
    }

    return resposta;
};
console.log(divisaoNum(10,8000))

console.log(Math.random())

console.log ('O numero sorteado é ===>', parseInt(Math.random() * 100))

setTimeout(() =>{
    console.log('Executou após 5s')
}, 5000)

let cont = 0

/*const intervalo = setInterval(()=>{
    cont++
    console.log(cont, 'Repetição da SetInterval')

    if(cont == 10){
        clearInterval(intervalo)
    }


}, 3000)*/

const divNumSorteio = document.querySelector('#div-num-sorteio')

let contVolta = 0, numSorteado = 0

const sorteo = setInterval(() => {
    contVolta++

    numSorteado = parseInt(Math.random() * 60)

    console.log(`${contVolta}º número sorteado ${numSorteado}`)

    divNumSorteio.innerHTML += `${contVolta}º número sorteado ${numSorteado}<br>`

    if (contVolta == 6){
        console.log('-------> SORTEIO ENCERRADO <-------')
        divNumSorteio.innerHTML += '-----> SORTEIO ENCERRADO <------'
        clearInterval(sorteo)
        contVolta = 0
        numSorteado = 0
    }
}, 2000)