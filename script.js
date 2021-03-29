//carne para Mulher - 300 gramas de por mulher + de 6 horas  - 400
// Carne - 400 grama por pessoa + de 6 horas - 650
// Cerveja - 1200ml por pessoa + de 6 horas - 2000ml
// Refrigerante/água - 1000 ml por pessoa + de 6 horas 1500ml

// criança valem por 0,5
let inputMulher = document.querySelector('#mulher')
let inputHomem = document.querySelector('#homem')
let inputCriancas = document.querySelector('#criancas')
let inputDuracao = document.querySelector('#duracao')
let res = document.querySelector('#resultado')



function calcular(){


    if(inputCriancas.value == 0 && inputHomem.value == 0 && inputMulher.value == 0 ){
        alert(`Digite um valor.`)
        res.innerHTML = ''
    } else {
        if(inputDuracao.value == 0){
            alert(`Digite, aproximadamente, a quantidade de horas do evento.`)
        }
    let mulher = inputMulher.value;
    let homem = inputHomem.value;
    let criancas = inputCriancas.value;
    let duracao = inputDuracao.value;

    
    
    let qntTotalCarne = carnePM(duracao) * mulher + carnePP(duracao) * homem + ( carnePP(duracao) / 2 * criancas);
  

    let qntTotalCerveja = cervejaPM(duracao) * mulher + cervejaPP(duracao) *  homem;


    let qntTotalBebida = bebidaPP(duracao) * homem + ( bebidaPP(duracao) / 2 * criancas);


    res.innerHTML = `<p> <img class="imgicon" src="/imagens/icon-carne.png" width="50"> ${qntTotalCarne / 1000} Kg de carne.</p>`
    res.innerHTML += `<p> <img class="imgicon" src="/imagens/lata-icon.png" width="40">${ Math.ceil(qntTotalCerveja / 355)} Latas de Cerveja. </p>`
    res.innerHTML += `<p> <img class="imgicon" src="/imagens/icon-refri.png" width="50">${ Math.ceil(qntTotalBebida / 2000)} Pet's de bebidas. </p>`
  
}

inputMulher.value = ''
inputCriancas.value = ''
inputHomem.value = ''
inputDuracao.value = ''

function cervejaPM(duracao){
    if(duracao >= 6){
        return 1800
    } else{
        return 1200
    }
}

function carnePM(duracao){
    if(duracao >= 6) {
        return 400
    } else {
       return 300
    }
}

function carnePP(duracao){
    if(duracao >= 6){
        return 650
    }else {
        return 400
    }

}

function cervejaPP(duracao){
    if(duracao >= 6){
        return  2500
    }else {
        return 2000
    }
}
function bebidaPP(duracao){
    if(duracao >= 6){
        return  1500
    }else {
        return 1000
    }
}

}