const elementoLista = document.querySelector('ul') 
const elementoInput = document.querySelector('input')
const elementoBotao = document.querySelector('button')

const tarefas = [
    //  aqui ficara as tarefas
]

function mostraTarefas () {
    for (tarefa of tarefas) {
        const elementoTarefa = document.createElement('li')
        const textoTarefa = document.createTextNode(tarefa)

        elementoTarefa.appendChild(textoTarefa)
        elementoLista.appendChild(elementoTarefa)
    }
}

mostraTarefas ()