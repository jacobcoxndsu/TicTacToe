var canvas = document.getElementById('header');
canvas.width = window.innerWidth;
canvas.height = 75;

var piece = ((window.innerWidth)/2)/3;
    
var ctx = canvas.getContext('2d');

function updateHeader(){
    drawHeader();
}

function drawHeader(){
    ctx.clearRect(0,0,window.innerWidth, 75);
    ctx.fillStyle = "rgba(255, 255, 255, 0.5)";
    ctx.fillRect(0,0,window.innerWidth, 75);
    ctx.width = window.innerWidth;
    ctx.height = 75;
    ctx.fillStyle = 'red';
    ctx.fillRect(piece,0, piece, 75);
    
    ctx.fillStyle = 'blue';
    ctx.fillRect(piece*4,0, piece, 75);
    //ctx.clearRect(0,0,canvas.width, canvas.height);
    //var x = (canvas.width / 2) / 3;
    //ctx.rect(x,0,x+x,50);
    //ctx.strokeStyle = 'white';
    //ctx.createLinearGradient(0,0,170,0);
    //ctx.stroke();
}

updateHeader();