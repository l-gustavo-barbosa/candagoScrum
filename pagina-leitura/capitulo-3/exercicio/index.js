//seleciona o elemento de id "form", adiciona um eventListener que ao identificar um evento "submit" inicia uma função.
document.getElementById("form").addEventListener("submit", function(event) {
    event.preventDefault(); // Evitar o comportamento padrão do formulário
    //armazena as respostas selecionando-as pelo formulario/nome dos inputs
    const repostas = [document.forms['exercicios']['Pergunta1'].value, document.forms['exercicios']['Pergunta2'].value,
    document.forms['exercicios']['Pergunta3'].value, document.forms['exercicios']['Pergunta4'].value, document.forms['exercicios']['Pergunta5'].value]
    //inicia função "avalia" e passa as respostas como parametro
    avalia(repostas);
});
var i = 0;
document.getElementById("topDown").addEventListener("click", function(){
    i++;
   if(i % 2){
    document.getElementById("nav").classList.remove('inativo');
   }else {document.getElementById("nav").classList.add('inativo');}
})

function avalia(respostas){
    //armazena o gabarito dos exercicios
    let gabarito = ['C','C','D','C','B'];
    //inicia a variavel que armazena a nota
    var nota = 0;
    //inicia o laço de repetição que verifica as respostas
    for(i = 0; i < respostas.length; i++){
        //verifica se a resposta da pergunta de valor i bate com a resposta de valor i
        if(gabarito[i] == respostas[i]){
            //adiciona 1 ponto na nota
            nota++;
        } else {console.log("Errou a questão " + (1 + i))}
    }
    //verifica se a nota é maior que a média
    if(nota >= (gabarito.length / 2)){
        //redireciona o usuario para a proxima pagina ou para o certificado
        location.href = "../../certificado/"
    } else {window.alert("Nota insuficiente. Por favor, refaça o teste.")}

}
//seleciona o elemento de id "prevPage", adiciona um eventListener que ao identificar um evento "click" inicia uma função
document.getElementById("prevPage").addEventListener("click", function(){
    //volta uma etapa no histórico do navegador
    history.back();
})

function home(){
    location.href = "https://l-gustavo-barbosa.github.io/candagoScrum/"
}