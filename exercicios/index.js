
document.getElementById("form").addEventListener("submit", function(event) {
    event.preventDefault(); // Evitar o comportamento padrão do formulário
    
    const repostas = [document.forms['exercicios']['Pergunta1'].value, document.forms['exercicios']['Pergunta2'].value]
    avalia(repostas);
});

function avalia(respostas){
    let gabarito = ['A','B'];
    var nota = 0;
    for(i = 0; i < respostas.length; i++){
        if(gabarito[i] == respostas[i]){
            nota++;
        } else {console.log("Errou a questão " + (1 + i))}
    }
    if(nota >= (gabarito.length / 2)){
        location.href = "../certificado/"
    } else {window.alert("Nota insuficiente. Por favor, refaça o teste.")}

}