class raindrop {
    constructor(x, y) {
        this.x = x;
        this.y = y;
        this.body = Matter.Bodies.circle(this.x, this.y, 2);
        World.add(world, this.body, { friction: 0.1 });
    }
    update() {
        if (this.body.position.y > height) {
            Matter.Body.setPosition(this.body, { x: random(0, width), y: random(0, width) });
        }
    }
    display() {
        push();
        fill('cyan');
        var pos = this.body.position;
        ellipseMode(CENTER);
        ellipse(pos.x, pos.y, 4, 4)
        pop();

    }
}