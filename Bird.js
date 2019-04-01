class Bird {
    constructor() {
        this.x = 90;
        this.y = height / 2;
        this.gravity = 0.8;
        this.velocity = 0;
        this.radius = 15;
        this.maxVelocity = 7;
        this.upLift = -11;
    }

    draw() {
        circle(this.x, this.y, this.radius);
    }

    update() {
        //console.log(Math.floor(this.y), Math.floor(this.velocity), this.gravity);
        this.velocity += this.gravity;
        this.y += this.velocity;
        //borders
        if (this.y + this.radius > height) {
            this.y = height - this.radius;
            this.velocity = this.maxVelocity;
        } else if (this.y + this.radius < 0) {
            this.y = 0;
            this.velocity = 0;
        }
        //max vel
        if (this.velocity > this.maxVelocity) {
            this.velocity = this.maxVelocity;
        }
    }

    up() {
        this.velocity = this.upLift;
    }

}