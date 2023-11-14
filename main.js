//criando/declarando a função tocaSom com parâmetro ideElementoAudio
function tocaSom(idElementoAudio){
    document.querySelector(idElementoAudio).play();
}
//criando a referência constante listaDeTeclas
const listaDeTeclas = document.querySelectorAll('.tecla');
//criando referência variável contador, atribuindo o valor inicial como "0"

//Criando o código de repetição WHILE e mudando para FOR
//enquanro o contador for menos que o comprimento da lista, tocará o som
for(let contador = 0;contador < listaDeTeclas.length;contador++){ 
    const tecla = listaDeTeclas[contador];
    const efeito = tecla.classList[1]; //chama a classe do indice 1 do som
    const idAudio = `#som_${efeito}`; //junção com template string
    tecla.onclick = function(){ //função anônima para tocaSom
        tocaSom(idAudio);
    }
    tecla.onkeydown = function(evento){ //função para
        if (EventSource.code != 'Tab'){
    }
    tecla.onkeyup = function(){
        tecla.classList.remove('ativa');
    }
}

