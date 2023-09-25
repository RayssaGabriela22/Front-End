//Selecionando o botao pelo ID
const botao = document.querySelector("#botao");
const contadorElemento = document.querySelector("#contador");
const botao2 = document.querySelector("#botao2")
const botao3 = document.querySelector("#botao3")
//Inicializando contador
let contador = 0;


//Função que sera chamada quando o botao for clicado
function aumentarContador() {
    contador++
    contadorElemento.textContent = contador;
}

//Adicionando ouvinte do evento para click do botao
botao.addEventListener("click", aumentarContador);

function diminuir() {

    if (contador <= 0) {
        document.querySelector("#mostrar").innerHTML =
            `<div class="alert alert-danger fade show" role="alert"> 
            <div class="d-flex justify-content-between ">
                <span> Menor numero atingido </span> 
                <button type = "button" class ="btn-close" data-bs-dismiss = "alert"> </button>
            </div>
        </div>`
    } else {
        contador--
        contadorElemento.textContent = contador
    }

}
botao2.addEventListener("click", diminuir);

function zerar() {
    contador = 0;
    contadorElemento.textContent = contador;
}
botao3.addEventListener("click", zerar);
