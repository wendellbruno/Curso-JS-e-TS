const inputNovaTarefa = document.querySelector('.input-nova-tarefa')
const addTarefa = document.querySelector('.add-tarefa');
const tarefas = document.querySelector('.tarefas')


function criarLi(){
    const li = document.createElement('li');
    return li;
}

function criarTarefa(texto){
    const li = criarLi();
    li.innerText = texto;
    tarefas.appendChild(li);
    limparTarefa(li);
    salvarTarefas();
}

function limparInput(){
    inputNovaTarefa.value = '';
    inputNovaTarefa.focus();
}

function limparTarefa(li){
    li.innerText += ' ';
    const botaoApagar = document.createElement('button');
    botaoApagar.innerText = "Apagar";
    botaoApagar.setAttribute('class', 'Apagar');
    li.appendChild(botaoApagar);
}

function salvarTarefas(){
    const liTarefas = tarefas.querySelectorAll('li');
    const listaDeTarefas = [];

    for(let tarefa of liTarefas){
        let tarefaTexto = tarefa.innerText;
        tarefaTexto = tarefaTexto.replace('Apagar', '').trim();
        listaDeTarefas.push(tarefaTexto);
    }
    const tarefasJSON = JSON.stringify(listaDeTarefas);
    localStorage.setItem('tarefas', tarefasJSON);
    console.log(tarefasJSON);
}

function adcionarTarefasSalvas(){
    const tarefas = localStorage.getItem('tarefas');
    const listaDeTarefas = JSON.parse(tarefas);

    for(let tarefa of listaDeTarefas){
        criarTarefa(tarefa);
    }
}
adcionarTarefasSalvas();

addTarefa.addEventListener('click', function(){
    if(!inputNovaTarefa.value) return;
    criarTarefa(inputNovaTarefa.value)
    limparInput();
})

inputNovaTarefa.addEventListener('keypress', function(e){
   if(e.keyCode === 13){
    if(!inputNovaTarefa.value) return;
    criarTarefa(inputNovaTarefa.value)
    limparInput();
   }
})

document.addEventListener('click', function(e){
    const el = e.target;
    if(el.classList.contains('Apagar')){
        el.parentElement.remove();
        salvarTarefas();
    }
})