const relogio = document.querySelector('.relogio');
const iniciar = document.querySelector('.iniciar');
const pausar = document.querySelector('.pausar');
const zerar = document.querySelector('.Zerar');
const dateLocal = document.querySelector('.date');
let segundos = 0;
let timer;

function getTime(seconds){
    const date = new Date(seconds * 1000);
    return date.toLocaleTimeString('pt-BR',{
        hour12: false,
        timeZone: 'UTC'
    });
}

function startTime(){
    timer = setInterval(function(){
        segundos++;
        relogio.innerHTML = getTime(segundos)
    },1000)
}

function getDate(){
    const dateLocal = new Date()
        return dateLocal.toLocaleDateString('pt-BR');
}


iniciar.addEventListener('click', function(event){
    relogio.classList.remove('pausar')
    clearInterval(timer);
    startTime();
});

pausar.addEventListener('click', function(event){
    clearInterval(timer);
    relogio.classList.add('pausar');
});

zerar.addEventListener('click', function(event){
    clearInterval(timer);
    segundos = 0;
    relogio.innerHTML = '00:00:00';
});

dateLocal.innerHTML = getDate();


