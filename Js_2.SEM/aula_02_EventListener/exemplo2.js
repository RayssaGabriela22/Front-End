const visor = document.querySelector("#visor");
//Adicionando um ouvinte do evento para keydown no documento
document.addEventListener("keydown", (Event) => {
    /*if (event.key === "a" || event.key === "A") {
        visor.textContent = "Tecla A preciosada";
    } else if (event.key === "d" || event.key === "D") {
        visor.textContent = event.key;  
    }*/
    visor.textContent = event.key;
})
