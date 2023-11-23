document.getElementById("prevPage").addEventListener("click", function(){
    history.back();
})

var i = 0;
document.getElementById("topDown").addEventListener("click", function(){
    i++;
   if(i % 2){
    document.getElementById("nav").classList.remove('inativo');
   }else {document.getElementById("nav").classList.add('inativo');}
})


function emitir(){
    console.log("nome");
    var nome = document.getElementById("nomeSobrenome").value;
    localStorage.setItem("textoNode",nome);
    location.href = "conclusao/";
}

function home(){
    location.href = "https://l-gustavo-barbosa.github.io/candagoScrum/"
}