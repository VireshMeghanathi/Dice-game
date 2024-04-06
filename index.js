var random1 = Math.floor(Math.random()*6)+1;
var player1 = "images/dice"+ random1 +".png" 

element=document.querySelectorAll("img")[0]
element.setAttribute('src',player1)

var random2 = Math.floor(Math.random()*6)+1;
var player2 ="images/dice"+random2+".png"
element=document.querySelectorAll("img")[1].setAttribute('src',player2)


if(random1>random2){
    document.querySelector("h1").innerHTML="🚩 Play 1 Wins!"
}
else if(random2>random1) {
    document.querySelector("h1").innerHTML="Player 2 Wins! 🚩"
}
else{
    document.querySelector("h1").innerHTML="Draw..!"
}