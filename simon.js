 h2=document.querySelector('h2');
 gameSeq=[];
 userSeq=[];
 btns=[" ","red","blue","green","peru"]
 let start=false;
 level=0;
document.addEventListener('keypress',function(){
    if (start==false){
        console.log("game is started");
        start=true;
        levelUp();
    }
});
 function levelUp(){
    userSeq=[];
    level++;
    h2.innerText="Level "+level;   
    randomIdx=Math.floor(Math.random()*4+1);
    randomColor=btns[randomIdx];
    randombtn=document.querySelector(`.${randomColor}`);
    gameSeq.push(randomColor); 
    gameFlash(randombtn);
    
 };
 function checkAns(idx){
if(userSeq[idx]===gameSeq[idx]){
    if(userSeq.length==gameSeq.length){
      setTimeout(levelUp,1000); 
    }
}
else{
    h2.innerText=`Game over \n Score ${level-1} \n press enter to start` ; 
    document.querySelector("body").style.backgroundColor="red";
    setTimeout(function(){
        document.querySelector("body").style.backgroundColor="white";
    },150)
    reset(); 
}
}
 function gameFlash(btn){
    btn.classList.add("flash");
    setTimeout(function(){btn.classList.remove("flash")},400);
 }  
 function userFlash(btn){
    btn.classList.add("userFlash");
    setTimeout(function(){btn.classList.remove("userFlash")},400);
 }  
 function btnPress(){
    btn=this;
    userFlash(btn);
    userColor=btn.getAttribute('id');
    console.log(userColor);
    userSeq.push(userColor)
    checkAns(userSeq.length-1);
}  
  
  let allBtns=document.querySelectorAll('.btn');
  for(btn of allBtns){
    btn.addEventListener('click',btnPress);
  }
  function reset(){
    start=false;
    gameSeq=[];
    userSeq=[];
    level=0;
  }