let second = 6;
var score = 0;
let Hit = 0;
let RunningGame = true;

// Bubble Making Fucntion
function MakeBubble() {
    let cluster = "";

    for (let i = 1; i <= 96; i++) {
        let rn = Math.floor(Math.random() * 10)
        cluster += `<div class="pnum">${rn}</div>`
    }

    document.querySelector("#pbtm").innerHTML = cluster

}
// Run Time Function
function RunTimmer() {
    var timInterval = setInterval(() => {
        if (second > 0) {
            second--;
            document.querySelector("#timer").textContent = second;
        }
        else {
            clearInterval(timInterval)
            document.querySelector("#pbtm").innerHTML = `<div id="Gscore"><h1>Game Over</h1>
            <div>Your Score is ${score}</div><div id="Rstart">Restart</div></div>`
            document.querySelector("#hitval").textContent = 0;
            document.querySelector("#scoreval").textContent = 0;
            RunningGame = false;

        }
    }, 1000);
}
// Hit Bubble Fucntion
function HTbuble() {
    Hit = Math.floor(Math.random() * 10)
    document.querySelector("#hitval").textContent = Hit

}
function AddScore() {
    score += 10;
    document.querySelector("#scoreval").textContent = score
}
function MiusScore() {
    score -= 5;
    document.querySelector("#scoreval").textContent = score
}
function RunGame() {
    second = 6
    RunTimmer()
    MakeBubble()
    HTbuble()
    document.querySelector("#pbtm").addEventListener("click", function (dets) {
        chkNum = Number(dets.target.textContent);
        if (chkNum > 10) {
            chkNum = 1.32;
        }

        if (chkNum == Hit) {
            MakeBubble();
            HTbuble();
            AddScore();
        }
        else if (Number.isInteger(chkNum) != true) {
        }
        else {
            MiusScore();
        }
    });

}
function RestartGame() {
    document.querySelector("#timer").addEventListener('click',function () {
        RunGame()
    });
}
// RunGame()

function StartGame(){
    document.querySelector("#st").addEventListener("click",function(){
        RunGame()
        console.log("click hua")
   });
};
StartGame()