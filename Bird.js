class Bird {
    constructor() {
        this.x = 90;
        this.y = height / 2;
        this.gravity = 0.8;
        this.velocity = 0;
        this.maxVelocity = 7;
        this.upLift = -11;
        this.imageChanger = 0;
    }

    draw() {
        if (frameCount % 17 == 0) {
            this.imageChanger++;
            if (this.imageChanger > 2) {
                this.imageChanger = 0;
            }
        }
        switch (this.imageChanger) {
            case 0:
                image(birdImgMidFlap, this.x, this.y, 34, 24);
                break;
            case 1:
                image(birdImgDownFlap, this.x, this.y, 34, 24);
                break;
            case 2:
                image(birdImgUpFlap, this.x, this.y, 34, 24);
                break;
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
        //max vel
        if (this.velocity > this.maxVelocity) {
            this.velocity = this.maxVelocity;
        }
    }

    up() {
        this.velocity = this.upLift;
    }

    collide(col_pipes) {
        //if()
    }

}