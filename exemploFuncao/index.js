document.getElementById("voltar").addEventListener("click", trocarHome);

document.getElementById("sim").addEventListener("click", trocar);

function trocar(){
    document.getElementById("menuAparente").classList.add("inativo");
    document.getElementById("menuEscondido").classList.remove("inativo");
}


function trocarHome(){
    document.getElementById("menuEscondido").classList.add("inativo");
    document.getElementById("menuAparente").classList.remove("inativo");
}