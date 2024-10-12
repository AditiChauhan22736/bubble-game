function makeBubble(){
var  clutter = "";
var score = 60;
function increaseScore(){
    score += 10;
    document.querySelector("#scoreval").textContent= score;
}
for( var i=1; i<=168; i++){
    var rn= Math.floor(Math.random()*10)
   clutter += `<div class="bubble">${rn}</div>`;
}
document.querySelector("#pbottom").innerHTML= clutter;
}

var timer = 60;
  
function runTimer(){
   var timerint = setInterval(function()
{ 
    if(timer > 0){
        timer--;
  document.querySelector("#timerval").textContent= timer;
    }
    else{
        clearInterval(timerint);
    }
},1000) ;
}
function getNewHit(){
    var rn = Math.floor( Math.random()*10);
    document.querySelector("#hitinterval").textContent = rn;

  }
  document.querySelector("#pbottom").addEventListener("Click" , function (dets) {
    alert("chl rha h");
  });

runTimer();
makeBubble();
getNewHit();
increaseScore();
