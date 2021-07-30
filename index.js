var n=Math.floor(Math.random()*6)+1;
var temp="dice"+n+".png";
var diceimg="images/"+temp;
document.querySelectorAll("img")[0].setAttribute("src",diceimg);
var m=Math.floor(Math.random()*6)+1;
var temp2="dice"+m+".png";
var diceimg="images/"+temp2;
document.querySelectorAll("img")[1].setAttribute("src",diceimg);

if(n>m)
document.querySelector("h1").innerHTML=" 🚩Player 1 Wins!";
else if(n<m){
document.querySelector("h1").innerHTML="Player 2 Wins!🚩";
}
else{
document.querySelector("h1").innerHTML="Draw!";}