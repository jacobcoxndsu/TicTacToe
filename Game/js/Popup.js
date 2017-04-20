var modal = document.getElementById('myBanner');
var text = document.getElementById('winnerText');
var B = document.getElementById('B');
var span = document.getElementsByClassName("close")[0];

modal.style.display = "block";

function displayWinner(num){
    if(num == 1){
        text.innerHTML = "Player 1 Wins!";
        B.style.backgroundColor = 'red';
    }
    if(num == 2){
        text.innerHTML = "Player 2 Wins";
        B.color = 0x0000ff;
    }
    modal.style.display = "block";
}

span.onclick = function() {
    location.reload();
}