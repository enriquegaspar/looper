//criando/declarando a função tocaSom com parâmetro ideElementoAudio
function tocaSom(idElementoAudio){
    document.querySelector(idElementoAudio).play();
}
//criando/invocando a função tocaSomPom
document.querySelector('.tecla_pom').onclick = tocaSom;

//criando a referência constante listaDeTeclas
const listaDeTeclas = document.querySelectorAll('.tecla');

//atribuindo o clique no botão "0" que é 0 1 item da lista de teclas.
listaDeTeclas[0].onclick = tocaSom;
//criando referência variável contador, atribuindo o valor inicial como "0"
let contador = 0;
//Criando o código de repetição WHILE
//enquanro o contador for menos que o comprimento da lista, tocará o som
while(contador < listaDeTeclas.length){ 
    const efeito = listaDeTeclas[contador].classList[1];
    const idAudio = "#som_"+efeito;
    listaDeTeclas[contador].onclick = function(){
        tocaSom(idAudio)
    };
    contador = contador + 1;
    console.log(contador);
}
