var body = document.querySelector('body');
var container = document.querySelectorAll('.container-produtos');
var descricao = document.querySelectorAll('.descricao-produto');
var apagar = document.querySelectorAll('.apagar-produto');
var adicionar = document.querySelector('.adicionar');

var array = ['joao', 'lucas', 'jorge', 'andre', 'lina'];

load()

function load(){
    let cont = document.querySelectorAll('.container-produtos');
    let des = document.querySelectorAll('.descricao-produto');
    let apag = document.querySelectorAll('.apagar-produto')


    for(let i = 0; i < cont.length; i++) {
        
        des[i].innerText = array[i];

        // cont[i].addEventListener('click', function() {
            
        // })
        apag[i].addEventListener('click', function() {
            body.removeChild(cont[i]);
            array.splice(i, 1);
        })
    
    }
}

function add() {
    body.innerHTML += '<div class="container-produtos"><div class="descricao-produto"></div><button class="apagar-produto">x</button></div>';

    load()
}



