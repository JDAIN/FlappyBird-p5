class Pipes {
    constructor() {
        this.pipes = [];
        this.xspeed = 2.5;
        this.x = width;
    }

    draw() {
        for (let i = 0; i < this.pipes.length; i++) {
            rect(this.pipes[i].top.x, this.pipes[i]["top"].y, this.pipes[i]["top"].w, this.pipes[i]["top"].h);
            rect(this.pipes[i]["bottom"].x, this.pipes[i]["bottom"].y, this.pipes[i]["bottom"].w, this.pipes[i]["bottom"].h);


        }

    }

    update() {

        //every 55 frames new pipe
        if(frameCount % 55 === 0) {
            this.pipes.push(
                {
                    "top":
                        {"x": this.x, "y": -1, "w": 40, "h": 100},
                    "bottom":
                        {"x": this.x, "y": height, "w": 40, "h": -100}
                });
        }
        if(this.pipes.length >5){
            this.pipes.shift();
        }


// console.log(this.pipes[1]);
        for (let i = 0; i < this.pipes.length; i++) {
            this.pipes[i]["top"]["x"] -= this.xspeed;
            this.pipes[i]["bottom"]["x"] -= this.xspeed;

        }

//this.pipes.push(this.x);
    }



}