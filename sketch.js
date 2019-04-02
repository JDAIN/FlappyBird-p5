let bird;
let pipes;
let backgroundImg;
let baseImg;
function preload(){
    backgroundImg = loadImage('images/background-day.png');
    base = loadImage('images/base.png');

}

function setup() {
  // put setup code here
    createCanvas(450,600);
    console.log(backgroundImg);
    background(backgroundImg);
    drawBase();
    bird = new Bird();
    pipes = new Pipes();
}

function draw() {
    background(backgroundImg);

  // put drawing code here
    bird.draw();
    bird.update();
    pipes.update();
    pipes.draw();

    drawBase() //draws base


}

function drawBase(){
   return image(base,0,height-base.height+30, width, base.height);
}
function keyPressed(){
    if(keyCode = "UP_ARROW"){
        bird.up();
    }
}
function mousePressed() {

    bird.up();
}