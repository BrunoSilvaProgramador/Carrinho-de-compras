var back = document.querySelector('.back');
var result = document.querySelector('.result')
var array = [];
var quantidade = [];
var quantidadeCalc = [];
var precos = [];
var precosCalc = [];

load()
function load(){
    let cont = document.querySelectorAll('.button_c');
    let des = document.querySelectorAll('.descricao-produto');
    let apag = document.querySelectorAll('.excluir');
    let checkbox = document.querySelectorAll('.check');
    let editar = document.querySelectorAll('.editar');
    let preco = document.querySelectorAll('.preço');
    let quant = document.querySelectorAll('.quantitativo');
    let menos = document.querySelectorAll('.menos');
    let mais = document.querySelectorAll('.mais');
    let p = document.querySelector('.p')

    for(let i = 0; i < cont.length; i++) {
        des[i].innerText = array[i];
        apag[i].addEventListener('click', function() {
            back.removeChild(cont[i]);
            array.splice(i, 1);
            quantidade.splice(i, 1);
            precos.splice(i, 1);
            quantidadeCalc.splice(i, 1);
            precosCalc.splice(i, 1);
            result.innerText = 'R$ 0';
            let container = document.querySelectorAll('.button_c');
            if(container.length == 0) {
                p.style.display = 'block';
            }
            
            
        })
        checkbox[i].addEventListener('click', function() {
            if(checkbox[i].classList.contains('check_active')){
                checkbox[i].classList.remove('check_active');
            }else{
                checkbox[i].classList.add('check_active');
            } 
        })
        editar[i].addEventListener('click', function() {
            array[i] = prompt('Digite o nome da tarefa');
            des[i].innerText = array[i];
        })

        if(quantidade[i] == 0){quant[i].value = '';} else{quant[i].value = quantidade[i];}

        if(precos[i] == 0){preco[i].value = '';} else{preco[i].value = precos[i];}
        
        menos[i].addEventListener('click', function() { 
            if(quant[i].value <=0){quant[i].value = 0;} else{quant[i].value--;}
        })

        mais[i].addEventListener('click', function(){
            quant[i].value ++;
        })
    }
    result.innerText = 'R$ 0';
    if(cont.length > 0) {
        p.style.display = 'none';
    }
}
function add() {
    calc()
    var nome = prompt('Digite o nome do produto:');
    if(nome.length <= 0){
        alert('Digite o nome do produto')
    }else{
        array.push(nome);
        back.innerHTML +='<div class="button_c"><span class="container-produtos"><div class="desc"><div class="descricao-produto"></div><div class="excluir"></div><div class="editar"></div><div class="check check_active"></div></div><div class="dados"><div class="quantidade"><button class="quant menos" >-</button><input type="number" class="quantitativo" placeholder="Quant"><button class="quant mais">+</button></div><input type="number" class="preço" placeholder="Preço"></div></span></div>';
        load()
    }
    
}

function calc(){
    let checkbox = document.querySelectorAll('.check');
    let preco = document.querySelectorAll('.preço');
    let quant = document.querySelectorAll('.quantitativo') 
    quantidadeCalc = [];
    precosCalc = [];
    for(let i=0; i < checkbox.length; i++){
        if(checkbox[i].classList.contains('check_active')){              
            if(quant[i].value == ''){quant[i].value = 0;}
            if(preco[i].value == ''){preco[i].value = 0;}
            quantidade[i] = quant[i].value;
            precos[i] = preco[i].value;
            quantidadeCalc[i] = quant[i].value;
            precosCalc[i] = preco[i].value;
        }else{
            if(quant[i].value == 0){quant[i].value = '';}
            if(preco[i].value == 0){preco[i].value = '';}
            quantidadeCalc[i] = 0;
            precosCalc[i] = 0;
        }  
    }
}


function calcular(){
    result.innerText = `R$ 0`;
    calc()
    let cont = document.querySelectorAll('.button_c');
    let resultado = 0;
    for(let i = 0; i < cont.length; i++) {
        resultado += (Number(quantidadeCalc[i] * precosCalc[i]));
    }
    result.innerText = `R$ ${resultado}`;
}