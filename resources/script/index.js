document.getElementById("voltar").addEventListener("click", trocarHome);

document.getElementById("sim").addEventListener("click", trocar);
document.getElementById("nao").addEventListener("click", iniciarJornada);

function trocar(){
    document.getElementById("menuAparente").classList.add("inativo");
    document.getElementById("menuEscondido").classList.remove("inativo");
}


function trocarHome(){
    document.getElementById("menuEscondido").classList.add("inativo");
    document.getElementById("menuAparente").classList.remove("inativo");
}

function iniciarJornada(){
    window.location.href = "pagina-leitura/";
}