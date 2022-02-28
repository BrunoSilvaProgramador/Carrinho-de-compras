var back = document.querySelector('.back');
var result = document.querySelector('.result')
var array = [];
var quantidade = [];
var quantidadeCalc = [];
var precos = [];
var precosCalc = [];
var sit = [];

load()
function load(){
    let cont = document.querySelectorAll('.button_c');
    let des = document.querySelectorAll('.descricao-produto');
    let apag = document.querySelectorAll('.apagar-produto');
    let checkbox = document.querySelectorAll('#check');
    let preco = document.querySelectorAll('#preço');
    let quant = document.querySelectorAll('#quantitativo');
    let menos = document.querySelectorAll('#menos');
    let mais = document.querySelectorAll('#mais');

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
        })
        if(checkbox[i].checked){sit[i] = 1;} else{sit[i] = 0;}

        if(quantidade[i] == 0){quant[i].value = '';} else{quant[i].value = quantidade[i];}

        if(precos[i] == 0){preco[i].value = '';} else{preco[i].value = precos[i];}
        
        menos[i].addEventListener('click', function() { 
            if(quant[i].value <=0){quant[i].value = 0;} else{quant[i].value--;}
        })

        mais[i].addEventListener('click', function(){quant[i].value ++;})
    }
    result.innerText = 'R$ 0';
}
function add() {
    calc()
    var nome = prompt('Digite o nome do produto:');
    if(nome.length <= 0){
        alert('Digite o nome do produto')
    }else{
        array.push(nome);
        back.innerHTML += '<div class="button_c"><span class="container-produtos"><div class="desc"><div class="descricao-produto"></div><input type="checkbox" id="check" checked></div><div class="dados"><div class="quantidade"><button class="quant" id="menos">-</button><input type="number" id="quantitativo" placeholder="Quant"><button class="quant" id="mais">+</button></div><input type="number" id="preço" placeholder="Preço"><button class="apagar-produto">x</button></div></span></div>';
        load()
    }
    
}

function calc(){
    let checkbox = document.querySelectorAll('#check');
    let preco = document.querySelectorAll('#preço');
    let quant = document.querySelectorAll('#quantitativo') 
    for(let i=0; i < checkbox.length; i++){
        if(sit[i] == 1){
            if(checkbox[i].checked){                
                if(quant[i].value == ''){quant[i].value = 0;}
                if(preco[i].value == ''){preco[i].value = 0;}
                sit[i] = 1;
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
        }else{
            if(checkbox[i].checked){ 
                if(quant[i].value == ''){quant[i].value = 0;}
                if(preco[i].value == ''){preco[i].value = 0;}
                sit[i] = 1;
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
}


function calcular(){
    calc()
    let cont = document.querySelectorAll('.container-produtos');
    let resultado = 0;
    for(let i = 0; i < cont.length; i++) {
        resultado += (Number(quantidadeCalc[i] * precosCalc[i]));
    }
    result.innerText = `R$ ${resultado}`;
}