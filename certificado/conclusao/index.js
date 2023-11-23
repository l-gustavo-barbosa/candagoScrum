function saida(){
    var nome = localStorage.getItem("textoNode");
let textNode = document.createTextNode("Certificamos por meio deste que " + nome + ", completou o treinamento Scrum da CandaGo, e obteve média  igual ou superior à 50% nos testes aplicados.");
let text = document.querySelector("#text");
    text.appendChild(textNode);
window.print();
}
