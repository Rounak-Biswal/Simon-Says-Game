let start = false;
let level = 0;
let h2 = document.querySelector("h2");
let btns = ["red","purple","blue","orange"];
let gameSeq = [];
let userSeq = [];

document.addEventListener("keypress",function(){
    if(start == false){
        start = true;
        levelUp();
    }
});

function levelUp(){
    userSeq = [];
    level++;
    h2.innerText = `Level ${level}`;


    let randIdx = Math.floor(Math.random() * 4);
    let randColor = btns[randIdx];
    let btn = document.querySelector(`.${randColor}`);
    gameSeq.push(randColor);
    gameFlash(btn);
}

function gameFlash(btn){
    btn.classList.add("gameFlash");
    setTimeout(function(){
        btn.classList.remove("gameFlash");
    }, 100);
}

function userFlash(btn){
    btn.classList.add("userFlash");
    setTimeout(function(){
        btn.classList.remove("userFlash");
    }, 100);
}

let allBtns = document.querySelectorAll(".btn")
for(x of allBtns){
    x.addEventListener("click", btnPress);
}

function btnPress(){
    let btn = this.getAttribute("id");
    userFlash(this);
    userSeq.push(btn);
    checkAns(userSeq.length-1);
}

function checkAns(idx){
    if(gameSeq[idx] === userSeq[idx]){
        if(userSeq.length == gameSeq.length){
            setTimeout(levelUp,1000);
        }
    }
    else{
        h2.innerText = `Game Over :( \nScore : ${level}\nPress any key to start`;
        start = false;
        gameSeq = [];
        level = 0;
    }
}