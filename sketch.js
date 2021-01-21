const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var umbrellaObj;
var maxDrops = 100;
var drops = [];
var sound;
var thunderImages = [];
var thunderSound;

function preload() {
    sound = loadSound("rain.mp3");
    thunderImages = [
        loadImage('1.png'),
        loadImage('2.png'),
        loadImage('3.png'),
        loadImage('4.png')
    ];
    thunderSound = loadSound('thunder.mp3');
}

function setup() {
    engine = Engine.create();
    world = engine.world;
    canvas = createCanvas(1000, 700);

    umbrellaObj = new umbrella(width / 2, height - 110);
    Engine.run(engine);
    drops.push(new raindrop(random(0, width), random(0, width)));
}

function draw() {
    Engine.update(engine)
    background(0);
    if (frameCount % 5 == 0) {
        drops.push(new raindrop(random(200, width), random(0, width)));
    }

    if (frameCount % round(random(70, 120)) == 0) {
        // rand = random(1, 4);
        var rand = Math.round(random(0, 4));
        console.log(rand);
        x = random(20, 580);
        switch (rand) {
            case 0: image(thunderImages[0], x, 0);
                console.log(0)
                break
            case 1: image(thunderImages[1], x, 0);
                console.log(1)
                break
            case 2: image(thunderImages[2], x, 0);
                console.log(2)
                break
            case 3: image(thunderImages[3], x, 0);
                console.log(3)
                break
        }
        thunderSound.play();
    }
    else {
        sound.play();
    }

    for (var i = 0; i < drops.length; i++) {
        drops[i].update();
        drops[i].display();
    }

    umbrellaObj.display();
}

