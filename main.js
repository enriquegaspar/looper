//criando/declarando a função toca SomPom
function tocaSomPom(){
    document.querySelector('#som_tecla_pom').play();
}
//criando/invocando a função tocaSomPom
document.querySelector('.tecla_pom').onclick = tocaSomPom;

//criando a referência constante listaDeTeclas
const listaDeTeclas = document.querySelectorAll('.tecla');

//atribuindo o clique no botão "0" que é 0 1 item da lista de teclas.
listaDeTeclas[0].onclick = tocaSomPom;

let contador = 0;
//Criando o código de repetição WHILE
while{

}