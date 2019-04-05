class Bird {
    constructor() {
        this.x = 90;
        this.y = height / 2;
        this.gravity = 0.8;
        this.velocity = 0;
        this.maxVelocity = 8;
        this.upLift = -11;
        this.imageChanger = 0;
        this.angle = 0;
        this.aVelocity = 0;
        this.aAccel = 0.9;
    }

    draw() {
        if (frameCount % 17 == 0) {
            this.imageChanger++;
            if (this.imageChanger > 3) {
                this.imageChanger = 0;
            }
        }
        if (this.velocity < 7) {
            push();
            translate(this.x, this.y);
            rotate(-25);
            this.angle = 0;
            imageMode(CENTER);
            switch (this.imageChanger) {
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
            pop();
        } else {
            push();
            translate(this.x, this.y);

            this.angle += this.aVelocity;

            this.aVelocity += this.aAccel;
            this.angle = constrain(this.angle, 0, 90);
            this.aVelocity = constrain(this.aVelocity, 0, 9);
            rotate(this.angle);
            imageMode(CENTER);
            switch (this.imageChanger) {
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
            pop();
        }

    }

    //image(birdImgMidFlap, this.x, this.y, 34, 24);
    //circle(this.x, this.y, this.radius);


    update() {
        //console.log(Math.floor(this.y), Math.floor(this.velocity), this.gravity);
        this.velocity += this.gravity;
        this.y += this.velocity;
        //borders
        // if (this.y + this.radius > height) {
        //     this.y = height - this.radius;
        //     this.velocity = this.maxVelocity;
        // } else if (this.y + this.radius < 0) {
        //     this.y = 0;
        //     this.velocity = 0;
        // }

        if (this.velocity > this.maxVelocity) {
            this.velocity = this.maxVelocity;
        }

    }

    up() {
        this.aVelocity = 0;
        this.velocity = this.upLift;
    }

    collide(col_pipes) {
        //if()
    }

}