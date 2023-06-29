const controle = document.querySelectorAll("[data-controle]")

const estatisticas = document.querySelectorAll("[data-estatisticas]")
console.log(estatisticas)

const pecas = {
    "bracos": {
        "forca": 29,
        "poder": 35,
        "energia": -21,
        "velocidade": -5
    },

    "resistencia": {
        "forca": 41,
        "poder": 20,
        "energia": 0,
        "velocidade": -20
    },
    "vitalidade":{
        "forca": 0,
        "poder": 7,
        "energia": 48,
        "velocidade": -24
    },
    "pernas":{
        "forca": 27,
        "poder": 21,
        "energia": -32,
        "velocidade": 42
    },
    "poder":{
        "forca": 0,
        "poder": 28,
        "energia": 0,
        "velocidade": -2
    }
}

console.log(controle)

controle.forEach( (elemento) => {
    elemento.addEventListener("click", (event) =>{
        manipulaDados(event.target.dataset.controle, event.target.parentNode)
        atualizaEstatisticas(event.target.dataset.peca)

        console.log(event.target.parentNode)
    })
})


function manipulaDados(operacao, controle){
    const peca = controle.querySelector("[data-contador]")
    if(operacao === "-")
    
        peca.value = parseInt(peca.value) - 1
    else
        peca.value = parseInt(peca.value) + 1
}


function atualizaEstatisticas(peca){
    console.log(peca)

    estatisticas.forEach((elemento) => {
        elemento.textContent = parseInt(elemento.textContent) + pecas[peca][elemento.dataset.estatisticas]
    })
}



