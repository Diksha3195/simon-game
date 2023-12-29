let gameSeq = [];
let userSeq = [];
let btns =["red","yellow","blue","green"];

let gameStart = false;
let level= 0;
let h2=document.querySelector("h2");
document.addEventListener("keypress",function(){
    if(gameStart == false){
        console.log("Game start keypress");
        gameStart =true;
        levelup();
    }
});
function gameFlash(btn){
    btn.classList.add("flash");
    setTimeout(function(){
        btn.classList.remove("flash");
    },250);
}
function userFlash(btn){
        btn.classList.add("userFlash");
        setTimeout(function(){
            btn.classList.remove("userFlash");
        },250);
        
    
    }
function levelup(){
    userSeq =[];
    level++;
    h2.innerText =`Level ${level}`;

    //random flash
    let ranind = Math.floor(Math.random ()*3);
    let rancol = btns[ranind];
    let ranbtn = document.querySelector(`.${rancol}`);

    gameSeq.push(rancol);
    console.log(gameSeq);
    gameFlash(ranbtn);

}
function checkans(ind){
    
    if(userSeq[ind] === gameSeq[ind]){
        if(userSeq.length == gameSeq.length){
            setTimeout(levelup,1000);
        }
    }
    else{
        h2.innerHTML =`Game Over! Your score was <b>${level}</b></br>Press any to start`;
        document.querySelector("body").style.backgroundColor ="red";
        setTimeout(function(){
            document.querySelector("body").style.backgroundColor ="white";
        },150);
        reset();
    }
}

function btnpress(){
    let btn = this;
    userFlash(btn);

    usercol = btn.getAttribute("id");
    console.log(usercol);
    userSeq.push(usercol);
    checkans(userSeq.length-1);
}

let allbtn = document.querySelectorAll(".btn");

for(btn of allbtn){
    btn.addEventListener("click",btnpress);
};
function reset(){
    userSeq = [];
    gameSeq =[];
    level=0;
    gameStart = false;
}