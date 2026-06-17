//  controlando for

const inputFrase = document.querySelector('#numero')
const inputNumRepeticao = document.querySelector('#num-repeticao')
const btnFrase = document.querySelector ('#btn-frase')
const divFrase = document.querySelector ('#div-frase')

btnFrase.addEventListener('click', (evt)=>{
    
    let contador = 0;

    for ( contador = 0; contador < 1000; contador ++ ){
    
    if ( i % 7 === 0)

    

    divFrase.innerHTML = ''
    

        divFrase.innerHTML += ` ${contador} <br>`
    }

})

//coleção de dados - array
const  presentes = [ ' bicicleta', 'celular', 'camisa do mengão', 'doleira',
'tênis adidas']
const divArray = document.querySelector('#div-array')

for(i = 0; i < 5; i++ )
    divArray.innerHTML = `${presentes}` 
// for in 
const divForIn = document.querySelector('#div-forin')
    
for(let posicao in presentes){
    divForIn.innerHTML += `${presentes[posicao]} <br>`

}
//for of
const divForOf = document.querySelector('#div-forof')

for(let elemento of presentes){
divForOf.innerHTML += `${elemento}<br>`

}