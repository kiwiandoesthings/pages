console.info("Script Working");

var body = document.getElementById("game-body");
var canvas = document.getElementById("canvas");
var ctx = canvas.getContext("2d");

var screenWidth = window.innerWidth;
var screenHeight = window.innerHeight;

canvas.setAttribute("width", screenWidth);
canvas.setAttribute("height", screenHeight);


var frameCounter = 0;

var player = {
    x: 400,
    y: 400,
    velocityX: 0,
    fruits: 0,
    moveSpeed: 15
}

var input = {
    left: false,
    right: false
}


function getInput(toggle, event) {
    let key = event.key;

    console.log(key);

    if (key == "z") {
        window.location.href = "https://kiwian.pages.gay/index.html";
    }

    if (toggle) {
        if (key == "a" || key == "ArrowLeft") {
            input.left = true;
        }
        else if (key == "d" || key == "ArrowRight") {
            input.right = true;
        }
    }
    if (!toggle) {
        if (key == "a" || key == "ArrowLeft") {
            input.left = false;
        }
        else if (key == "d" || key == "ArrowRight") {
            input.right = false;
        }
    }

    if (input.left) {
        player.velocityX = -player.moveSpeed;
    }
    if (input.right) {
        player.velocityX = player.moveSpeed;
    }
    if (!input.left && !input.right) {
        player.velocityX = 0;
    }

    console.log(player.velocityX);
}

function updateGame() {
    frameCounter++;
    player.x += player.velocityX;
}

function renderGame() {
    // Clear the screen
    ctx.fillStyle = "white";
    ctx.fillRect(0, 0, screenWidth, screenHeight);

    // Render the rest
    ctx.font = "30px Arvo"
    ctx.fillStyle = "black";
    ctx.fillText(frameCounter, 200, 200);
    ctx.fillText("its not finished yet chill, it will be before long", 400, 200);
    ctx.fillText("click z to go back to the main site", 300, 300);

    ctx.fillStyle = "red";
    ctx.fillRect(player.x, player.y, 30, 30);
}


setInterval(function() {
    updateGame();
    renderGame();
}, 10);