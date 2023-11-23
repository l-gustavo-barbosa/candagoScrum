function saida() {
  let nomeBold = localStorage.getItem("textoNode");
  let textBold = document.createTextNode(nomeBold);
  let bold = document.querySelector("b");
  bold.appendChild(textBold);


  window.print();
}
