// Divisíveis por 7 entre 1 e 1000

const divCalculo = document.querySelector('#div-calculo');

let quantidade = 0;

for (let i = 1; i <= 1000; i++) {
    if (i % 7 === 0) {
        quantidade++;
    }
}

divCalculo.innerHTML =
    `Existem ${quantidade} números divisíveis por 7 entre 1 e 1000.`;

// Coleção de dados - array

const presentes = [
    'bicicleta', 'celular', 'camisa do mengão', 'doleira', 'tênis adidas'
];

// Lendo array com for tradicional

const divArray = document.querySelector('#div-array');

for (let i = 0; i < presentes.length; i++) {
    divArray.innerHTML += `${presentes[i]} <br>`;
}

// For in

const divForIn = document.querySelector('#div-forin');

for (let posicao in presentes) {
    divForIn.innerHTML += `${posicao} - ${presentes[posicao]} <br>`;
}

// For of

const divForOf = document.querySelector('#div-forof');

for (let elemento of presentes) {
    divForOf.innerHTML += `${elemento} <br>`;
}

// Foreach

const divForeach = document.querySelector('#div-foreach');

presentes.forEach((elemento, posicao) => {
    divForeach.innerHTML += `${posicao + 1} - ${elemento} <br>`;
});
//coleção de objetos literais
const pessoas = [
    {nome: 'Miguel Luiz', idade: 25, renda:850},
    {nome: 'Guilerme', idade: 22, renda: 10000}, 
    {nome: 'Kaua Luiz', idade: 19, renda: 4000},
    {nome: 'Gleidson pink', idade: 20, renda: 4500},
    {nome: 'Bob Jonatas', idade: 21, renda: 2500}
]
// listando objeto literal
const divListaObjFor = document.querySelector('#div-listaobj-for')

for(i = 0; i <pessoas.length;i++){
    divListaObjFor.innerHTML += `${pessoas[i].nome}, 
    ${pessoas[i].idade} 
    R$ ${pessoas[i].renda.toFixed(2).replace('.',',')}<br>`
}
// Lista obj pelo for in

const divListaObjForIn = document.querySelector('#div-listaobj-forin')

for(let indice in pessoas){
    divListaObjForIn.innerHTML += `${indice} - ${pessoas[indice].nome}, 
    ${pessoas[indice].idade}, 
    R$ ${pessoas[indice].renda.toFixed(2).replace('.',',')}<br>`

}
// Lista obj pelo for of
const divListaForOf = document.querySelector('#div-listaobj-forof')

    let contForOf = 0

    for(let elem of pessoas){
        contForOf++

        divListaForOf.innerHTML += 
        `${contForOf} - ${elem.nome}, ${elem.idade}, 
        ${elem.renda.toFixed(2).replace('.',',')}<br>`
    }
// Lista obj pelo foreach
const divListaForeach = document.querySelector('#div-lista-foreach')

pessoas.forEach((elem, i)=>{
    divListaForeach.innerHTML +=
    `${i + 1} - ${elem.nome}, 
    ${elem.idade}, R$ ${elem.renda.toFixed(2).replace('.',',')}<br>`
})