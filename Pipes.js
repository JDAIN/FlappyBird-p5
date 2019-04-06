class Pipes {
    constructor() {
        //init empty array len 5 (0 = top, 1 = bottom element)
        this.pipes = [[[0], [0]], [[0], [0]], [[0], [0]], [[0], [0]], [[0], [0]]];
        this.pointer = 0;
        this.xspeed = 2.5;
        this.x = width;
        this.gap = 120;
        //divide height by 4 and select first and last
        this.gapStart = height / 4;
        this.gapEnd = this.gapStart * 3 - this.gap;
    }

    draw() {
        for (let i = 0; i < this.pipes.length; i++) {
            //index used for circular array
            let index = [(this.pointer + i) % this.pipes.length];
            this.pipes[index][0][0] -= this.xspeed;
            this.pipes[index][1][0] -= this.xspeed;
            //top
            image(topPipImg, ...this.pipes[index][0]);
            //bottom
            image(botPipeImg, ...this.pipes[index][1]);
        }


    }

    update() {
        //every 60 frames new pipe
        if (frameCount % 60 == 0) {
            let randomStartGapY = Math.random() * (this.gapEnd - this.gapStart) + this.gapStart;
            this.pipes[this.pointer] = [[this.x, randomStartGapY, 52, -topPipImg.height],
                [this.x, randomStartGapY + this.gap, 52, botPipeImg.height]];
            //increase pointer for circular array
            this.pointer++;
        }
    }
}