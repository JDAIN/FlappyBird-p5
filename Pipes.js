class Pipes {
    constructor() {
        //TODO implement deque with len 5 which wraps for better performance
        this.pipes = [];
        this.xspeed = 2.5;
        this.x = width;
        this.gap = 130;
        //divide height by 4 and select first and last
        this.gapStart = height / 4;
        this.gapEnd = this.gapStart * 3 - this.gap;
    }

    draw() {
        for (let i = 0; i < this.pipes.length; i++) {
            this.pipes[i]["top"][0] -= this.xspeed;
            this.pipes[i]["bottom"][0] -= this.xspeed;
            //top

            image(topPipImg, ...this.pipes[i]["top"]);
            //bottom
            image(botPipeImg, ...this.pipes[i]["bottom"]);
        }


    }

    update() {
        //every 55 frames new pipe
        if (frameCount % 60 == 0) {
            let randomStartGapY = Math.random() * (this.gapEnd - this.gapStart) + this.gapStart;
            this.pipes.push(
                {
                    "top":
                        [this.x, randomStartGapY, 52, -topPipImg.height],
                    "bottom":
                        [this.x, randomStartGapY + this.gap, 52, botPipeImg.height]
                });
        }
        if (this.pipes.length > 4) {
            this.pipes.shift();
        }
    }
}