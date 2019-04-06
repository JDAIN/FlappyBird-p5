class Bird {
    constructor() {
        this.x = 90;
        this.y = height / 2;
        this.gravity = 0.8;
        this.velocity = 0;
        this.maxVelocity = 8;
        this.upLift = -11;
        this.imageVersion = 0;
        this.angle = 0;
        this.aVelocity = 0;
        this.aAccel = 0.9;
        this.maxAngle = 90;
        this.maxAvelocity = 9;
    }

    draw() {
        if (frameCount % 17 == 0) {
            this.imageVersion++;
            if (this.imageVersion > 3) {
                this.imageVersion = 0;
            }
        }
        push();
        translate(this.x, this.y);
        if (this.velocity < 6) {
            rotate(-25); //set angle ignore this.angle
            this.angle = 0;
            this._imageSwitcher();
        } else {
            rotate(this.angle);
            this._imageSwitcher();
        }
        pop();

    }

    update() {
        //constrain top
        this.y = constrain(this.y, 0, height);

        this.velocity += this.gravity;
        this.y += this.velocity;
        this.velocity = constrain(this.velocity, -99, this.maxVelocity);


        this.angle += this.aVelocity;
        this.aVelocity += this.aAccel;
        this.angle = constrain(this.angle, 0, this.maxAngle);
        this.aVelocity = constrain(this.aVelocity, 0, this.maxAvelocity);
    }

    up() {
        this.aVelocity = 0;
        this.velocity = this.upLift;
    }


    collide() {
        //birdImgDownFlap.width/2 is for the bird(start point is the center of the bird)
        let frontBorderBird = this.x + birdImgMidFlap.width / 2;
        let topBorderBird = this.y - birdImgUpFlap.height / 2;
        let botBorderBird =this.y + birdImgUpFlap.height / 2;

        //collision with base
        if (this.y > height - base.height + 30 - birdImgDownFlap.width / 2) {
            return true;
        }
        for (let i = 0; i < pipes.pipes.length; i++) {
            if (pipes.pipes[i][0][1]) {
                //top pipe collision, first check y than x collision
                if (topBorderBird < pipes.pipes[i][0][1] && frontBorderBird > pipes.pipes[i][0][0]
                    && frontBorderBird < pipes.pipes[i][0][0] + pipes.pipes[i][0][2]) {
                    return true;
                }
                //bottom pipe collision, first check y than x collision
                if (botBorderBird > pipes.pipes[i][1][1] && frontBorderBird > pipes.pipes[i][1][0]
                    && frontBorderBird < pipes.pipes[i][1][0] + pipes.pipes[i][1][2]) {
                    return true;
                }
            }


        }
    }

    _imageSwitcher() {
        imageMode(CENTER);
        switch (this.imageVersion) {
            case 0:
                image(birdImgMidFlap, 0, 0, birdImgMidFlap.width, birdImgMidFlap.height);
                break;
            case 1:
                image(birdImgDownFlap, 0, 0, birdImgDownFlap.width, birdImgDownFlap.height);
                break;
            case 2:
                image(birdImgMidFlap, 0, 0, birdImgMidFlap.width, birdImgMidFlap.height);
                break;
            case 3:
                image(birdImgUpFlap, 0, 0, birdImgUpFlap.width, birdImgUpFlap.height);
                break;
        }
    }
}