let bird;
let pipes;
let backgroundImg;
let botPipeImg;
let topPipImg;
let gameOverImg;
let base;

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
}

function draw() {
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
        image(gameOverImg,width/2-(gameOverImg.width/2), height*0.25);
        noLoop();
    }

}

function drawBase() {
    return image(base, 0, height - base.height + 30, width, base.height);
}

function keyPressed() {
    if (keyCode === UP_ARROW || key === ' ') {
        bird.up();
    }
}

function mousePressed() {
    bird.up();
}