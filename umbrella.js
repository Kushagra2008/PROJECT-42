class umbrella {
    constructor(x, y) {
        this.x = x;
        this.y = y;
        this.body = Matter.Bodies.circle(this.x, this.y, 50, { isStatic: true });
        this.image = loadAnimation("walking_1.png",
            "walking_2.png",
            "walking_3.png",
            "walking_4.png",
            "walking_5.png",
            "walking_6.png",
            "walking_7.png",
            "walking_8.png");
        World.add(world, this.body);
    }

    display() {
        var pos = this.body.position;
        // var sprite = createSprite(pos.x, pos.y, 20, 20);
        animation(this.image, pos.x, pos.y);


        // rectMode(CENTER);
        // rect(this.x, this.y, 20, 20);

    }
}