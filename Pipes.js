class Pipes {
    constructor() {
        this.pipes = [];
        this.xspeed = 2.5;
        this.x = width;
        this.gap = 130;
    }

    draw() {
        for (let i = 0; i < this.pipes.length; i++) {
            rect(...this.pipes[i]["top"]);
            rect(...this.pipes[i]["bottom"]);
        }
    }

    update() {
        //every 55 frames new pipe
        if (frameCount % 55 === 0) {
            let quarterWidth= height/4;
            let gapStart= quarterWidth;
            let gapEnd= quarterWidth*3-this.gap;
            let randomStartGapY= Math.random() * (gapEnd - gapStart + 1)  + gapStart;

            this.pipes.push(
                {
                    "top":
                        [this.x, -1, 40, randomStartGapY],
                    "bottom":
                        [this.x, randomStartGapY+this.gap, 40, height]
                });
        }
        if (this.pipes.length > 4) {
            this.pipes.shift();
        }
        for (let i = 0; i < this.pipes.length; i++) {
            this.pipes[i]["top"][0] -= this.xspeed;
            this.pipes[i]["bottom"][0] -= this.xspeed;

        }
    }


}