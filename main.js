
const botoes = document.querySelectorAll(".botao");
const conteudo = document.querySelectorAll(".aba-conteudo")
const contador = document.querySelectorAll(".contador")
const tempoObjetivo0 =new Date(2024/08/13/08/56)
const tempoObjetivo1 =new Date(2024/09/16/08/56)
const tempoObjetivo2 =new Date(2024/05/14/08/56)
const tempoObjetivo3 =new Date(2024/03/14/08/56)
contador[0].textContent="olha"
contador[1].textContent="olha"
contador[2].textContent="olha"
contador[3].textContent="lins"
for (let i = 0 ; i < botoes.length ; i++){
    botoes[i].onclick = function (){
        for (let j = 0; j < botoes.length ; j++){
            botoes[j].classList.remove("ativo")
            conteudo[j].classList.remove("ativo")
        }
        botoes[i].classList.add("ativo")
        conteudo[i].classList.add("ativo")
    }
}
