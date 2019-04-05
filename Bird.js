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

    collide(col_pipes) {
        //if()
    }

    _imageSwitcher() {
        imageMode(CENTER);
        switch (this.imageVersion) {
            case 0:
                image(birdImgMidFlap, 0, 0, 34, 24);
                break;
            case 1:
                image(birdImgDownFlap, 0, 0, 34, 24);
                break;
            case 2:
                image(birdImgMidFlap, 0, 0, 34, 24);
                break;
            case 3:
                image(birdImgUpFlap, 0, 0, 34, 24);
                break;
        }
    }
}