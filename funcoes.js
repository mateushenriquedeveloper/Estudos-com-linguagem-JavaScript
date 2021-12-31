var vetor=new Array();
var posJogador=Math.floor(Math.random() * (12 - 1) + 1);
var posObjetivo=Math.floor(Math.random() * (25 - 13) + 13);
var posVilao=Math.floor(Math.random() * (25 - 1) + 1);
var cont=0;
var intervalo;
function comandos(botao){
    var col=document.getElementById("comandos");
    var i=vetor.length;
    vetor[i]=botao.id;
    col.innerHTML+=botao.id+"<br>";
}
function posicionar(){
   document.getElementById(posJogador).innerHTML="<img src='F1.jpg' width='100' heigth='100'>";
   document.getElementById(posObjetivo).style.backgroundImage="url(chegada.jpg)";
   document.getElementById(posVilao).innerHTML="<img src='buraco.png' width='100' heigth='100'>";
}
function jogar(){
   intervalo=setInterval(movimentar, 1000);
}
function movimentarVilao(){
document.getElementById(posVilao).innerHTML="";
posVilao=Math.floor(Math.random() * (25 - 1) + 1);
document.getElementById(posVilao).innerHTML= "<img src='buraco.png'width='100' heigth='100'>"
}
function movimentar(){
  document.getElementById(posJogador).innerHTML="<img src = 'marca.jpg' width='100' height='100'>";
  var comando=vetor[cont];
  if(comando=="acima"){
    posJogador-=5;
    if(posJogador<1)
       gameOver(1);
}
  else if(comando=="abaixo"){
    posJogador+=5;
    if(posJogador>25)
       gameOver(1);
}
  else if(comando=="direita"){
    if(posJogador%5!=0)
       posJogador++;
}
  else if(comando=="esquerda"){
    if((posJogador-1)%5!=0)
      posJogador--;
    else
      gameOver(1);
}
  document.getElementById(posJogador).innerHTML="<img src = 'F1.jpg' width='100' height='100'>"
  cont++;

  if(posVilao!=posJogador)
     movimentarVilao();
  else
      gameOver(2);  

  if(cont==vetor.length)
     gameOver(0);
}
function gameOver(i){
  clearInterval(intervalo);
  if(posJogador==posJogador && i==0)
            txt="Chegou no seu objetivo";
  else if(posJogador!=posObjetivo && i==0)
            txt="Não terminou o objetivo";
  else if(i==1)
          txt="Comando errado";
  else if(i==2)
          txt="Caiu no buraco";
  document.getElementById("botoes").innerHTML=txt;
  

}