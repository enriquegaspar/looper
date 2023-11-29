//criando/declarando a função tocaSom com parâmetro ideElementoAudio
function tocaSom(idElementoAudio){
    const elemento = document.querySelector(idElementoAudio);
    //condicional if (se) e else(senão) operador de comparação && (E)
    if (elemento && elemento.localName === 'audio'){
       elemento.play();
    }else{
        console.log("elemento inválido não encontrado");
    }
}
//criando a referência constante listaDeTeclas
const listaDeTeclas = document.querySelectorAll('.tecla');
//Criando o código de repetição WHILE e mudando para FOR
//enquanro o contador for menos que o comprimento da lista, tocará o som.
for(let contador = 0;contador < listaDeTeclas.length;contador++){
    const tecla = listaDeTeclas[contador];
    const efeito = tecla.classList[1]; //chama a classe do indice 1 do som
    const idAudio = `#som_${efeito}`; //junção com template string
    tecla.onclick = function(){ //função anônima para tocaSom
        tocaSom(idAudio);

    }
    tecla.onkeydown = function(evento){ //função para pressionada
        if (evento.code === 'Space' || evento.code === 'Enter'){ 
            tecla.classList.add('ativa');
        }
    }
    tecla.onkeyup = function(){ //função para tecla despressionada
        tecla.classList.remove('ativa');
    }
}
