let starterBird;
let starterSwitcher;
let bird;
let pipes;
let backgroundImg;
let botPipeImg;
let topPipImg;
let gameOverImg;
let base;
let gameOver;
let input;

function preload() {
    backgroundImg = loadImage('images/background-day.png');
    base = loadImage('images/base.png');
    botPipeImg = loadImage('images/pipe-green.png');
    topPipImg = loadImage('images/pipe-green-top.png');
    birdImgMidFlap = loadImage('images/yellowbird-midflap.png');
    birdImgDownFlap = loadImage('images/yellowbird-downflap.png');
    birdImgUpFlap = loadImage('images/yellowbird-upflap.png');
    gameOverImg = loadImage('images/gameover.png')

}

function setup() {
    angleMode(DEGREES);
    createCanvas(450, 550);
    background(backgroundImg);
    drawBase();
    bird = new Bird();
    pipes = new Pipes();
    starterBird = new Bird();
    frameRate(60);
    gameOver = false;
    input = false;
    starterSwitcher = -1;
}

function draw() {
    if (input) {
        background(backgroundImg);
        bird.update();
        bird.draw();

        pipes.update();
        pipes.draw();
        drawBase();

        let fps = frameRate();
        fill(0);
        stroke(0);
        text("FPS: " + fps.toFixed(2), 10, height - 10);
        if (bird.collide()) {
            console.log("lose");
            image(gameOverImg, width / 2 - (gameOverImg.width / 2), height * 0.25);
            setTimeout(noLoop(),5000);
            noLoop();
            gameOver = true;
        }
    } else {

        background(backgroundImg);
        starterBird.velocity = 7;
        starterBird.y += starterSwitcher * 0.3;
        starterBird.draw();
        if (starterBird.y > height / 2 + 6) {
            starterSwitcher = -1;
        } else if (starterBird.y < height / 2 - 6) {
            starterSwitcher = 1;
        }
        drawBase();


    }

}

function drawBase() {
    return image(base, 0, height - base.height + 30, width, base.height);
}

function reset() {
    frameRate(60);
    input = false;
    gameOver = false;
    bird = new Bird();
    pipes = new Pipes();
    starterBird = new Bird();
    starterSwitcher = -1;
    loop();
}

function keyPressed() {
    if (!gameOver) {
        if (keyCode === UP_ARROW || key === ' ') {
            input = true;
            bird.up();
        } else {
            reset();
        }
    }
}

function mousePressed() {
    if (!gameOver) {
        input = true;
        bird.up();
    } else {
        reset();
    }
}