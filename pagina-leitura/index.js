document.getElementById("nextPage").addEventListener("click", function(){
    location.href = "exercicios/";
})

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
