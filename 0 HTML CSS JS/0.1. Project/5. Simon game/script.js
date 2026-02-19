let gameSeq = [];
let userSeq = [];

let btns = ["yellow", "red", "purple", "green"]

let started = false;
let level = 0;
let h2 = document.querySelector("#level")

document.addEventListener("keypress", function () {
   if (started == false) {
      console.log("GAME STARTED")
      started = true
      levelUp()
   }
});

function gameFlash(btn) {
   btn.classList.add("flash")
   setTimeout(function () {
      btn.classList.remove("flash");
   }, 200)
}

function userFlash(btn) {
   btn.classList.add("useFlash");
   setTimeout(function () {
      btn.classList.remove("useFlash");
   }, 200);
}

function levelUp() {
   userSeq = [];
   level++;
   h2.innerText = `Level ${level}`;

   let random = Math.floor(Math.random() * 3)
   let randomcolor = btns[random]
   let randbtn = document.querySelector(`.${randomcolor}`)

   gameSeq.push(randomcolor)
   console.log(gameSeq)
   gameFlash(randbtn);
}

let allBtns = document.querySelectorAll(".btn");
for (btn of allBtns) {
   btn.addEventListener("click", btnPress);
}

function btnPress() {
   let btn = this;
   userFlash(btn);
   let userColour = btn.getAttribute("id")
   userSeq.push(userColour)

   checkAns();
}

function checkAns() {
   let idx = userSeq.length - 1;
   if (userSeq[idx] == gameSeq[idx]) {
      if(userSeq.length == gameSeq.length){
         setTimeout(levelUp,1000);
      }
   } else {
      h2.innerHTML = ("Game Over press any key to start");
      resetGame();
   }
}

function resetGame() {
   started = false;
   gameSeq = [];
   userSeq = [];
   level = 0;
}



