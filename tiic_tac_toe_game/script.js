const boxes = document.querySelectorAll('.box')
const button = document.querySelector('#game_over')
const body = document.body
const winnerMessage = document.getElementById('winner-message');
const winnerText = document.getElementById('winner-text');
const restartButton = document.getElementById('restart-button');
const winnerText1 = document.getElementById('winner-text1');

let playerX = true;
let moves = 0;
const winPattern = [
    [0, 1, 2],
    [0, 3, 6],
    [0, 4, 8],
    [1, 4, 7],
    [2, 5, 8],
    [2, 4, 6],
    [3, 4, 5],
    [6, 7, 8]
]
boxes.forEach((box) => {
    box.addEventListener(('click'), () => {
        console.log(box)
        if (playerX) {
            box.innerHTML = "X"
            playerX = false;
            box.style.color = 'red'
        }
        else {
            box.innerHTML = "O"
            playerX = true
            box.style.color = 'blue'

        }
        playerX = playerX;
        box.style.pointerEvents = "none";
        moves++;
        box.disabled = true
        checkWinner();
    });
})

const checkWinner = () => {
    for (let pattern of winPattern) {
        // console.log(pattern[0],pattern[1],pattern[2])
        // console.log(boxes[pattern[0]].innerHTML,boxes[pattern[1]].innerHTML,boxes[pattern[2]].innerHTML)
        let pos1val = boxes[pattern[0]].innerHTML
        let pos2val = boxes[pattern[1]].innerHTML
        let pos3val = boxes[pattern[2]].innerHTML

        if (pos1val != "", pos2val != "", pos3val != "") {
            if (pos1val === pos2val && pos2val === pos3val) {
                showWinner(pos1val);
                return
            }
        }
        if (moves === 9) {
            showDraw();
        }
    };
}
const showWinner = (winner) => {
    winnerText.textContent = `
     ${winner}`;
    winnerMessage.style.display = 'block';
};
const showDraw = () => {
    winnerMessage.style.display = 'block';
    winnerText1.textContent = 'Game Draw'

};
restartButton.addEventListener('click', () => {
    location.reload()
    console.log("reloaded")
    // playerX = true;
});

