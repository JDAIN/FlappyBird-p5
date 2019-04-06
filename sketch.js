let bird;
let pipes;
let backgroundImg;
let botPipeImg;
let topPipImg;


function preload() {
    backgroundImg = loadImage('images/background-day.png');
    base = loadImage('images/base.png');
    botPipeImg = loadImage('images/pipe-green.png');
    topPipImg = loadImage('images/pipe-green-top.png');
    birdImgMidFlap = loadImage('images/yellowbird-midflap.png');
    birdImgDownFlap = loadImage('images/yellowbird-downflap.png');
    birdImgUpFlap = loadImage('images/yellowbird-upflap.png');
}

function setup() {
    // put setup code here
    angleMode(DEGREES);
    createCanvas(450, 550);
    background(backgroundImg);
    drawBase();
    bird = new Bird();
    pipes = new Pipes();
}

function draw() {
    background(backgroundImg);
    // put drawing code here
    bird.update();
    bird.draw();

    pipes.update();
    pipes.draw();
    drawBase(); //draws base

    let fps = frameRate();
    fill(0);
    stroke(0);
    text("FPS: " + fps.toFixed(2), 10, height - 10);

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