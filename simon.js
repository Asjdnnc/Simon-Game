 h2=document.querySelector('#l');
 let allBtns=document.querySelectorAll('.btn');
 play=document.querySelector("#play");
 inp=document.querySelector("#username");
 plist=document.querySelector("#plist");
 slist=document.querySelector("#pscore");
 gameSeq=[];
 userSeq=[];
 hscore=0;
 hs=document.querySelector("#score");
 btns=[" ","red","blue","green","peru"];
 let start=false;
 level=0;
play.addEventListener('click',function(){
    if (start==false){
        console.log("game is started");
        start=true;
        name=inp.value;
        if(name!=""){
          li=document.createElement("li");
          plist.appendChild(li);
          li.innerText=name;
          c=1;
        }
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
  sc=level-1;
  if(sc==-1){
    sc=0;
  }
  if(sc>hscore){
    hscore=sc;
  }
    h2.innerText=`Game over \n Score ${sc} \n click play to start`; 
    hs.innerText=hscore;
    if(c!=1){
      slast=slist.lastChild;
      slast.innerText=sc;
    }
    as=document.createElement("li");
    as.innerText=level-1;
    slist.appendChild(as);
    inp.value="";
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
    userSeq.push(userColor);
    checkAns(userSeq.length-1);
}  
  for(btn of allBtns)
  {
    btn.addEventListener('click',btnPress);
  }
  function reset(){
    start=false;
    gameSeq=[];
    userSeq=[];
    level=0;
  }
