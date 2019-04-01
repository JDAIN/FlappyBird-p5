let bird;
let pipes;


function setup() {
  // put setup code here
    createCanvas(450,650);
    background("deepskyblue");
    bird = new Bird();
    pipes = new Pipes();
}

function draw() {
    background("deepskyblue");
  // put drawing code here
    bird.draw();
    bird.update();
    pipes.update();
    pipes.draw();



}
function keyPressed(){
    if(keyCode = "UP_ARROW"){
        bird.up();
    }
}
function mousePressed() {
    console.log();
    bird.up();
}