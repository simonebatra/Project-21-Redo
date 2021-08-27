const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;

let engine;
let world;

var ballOptions;
var ball;
var groundOptions;
var ground;
var wall1;
var wall2;

function setup() {
  createCanvas(800,400);
  engine = Engine.create();
  world = engine.world;
 
  ballOptions={
    restitution:0.95,
	isStatic: false,
	friction: 0.5
  }

  groundOptions={
	  isStatic:true
  }

  ball=Bodies.circle(200, 100, 20, ballOptions);
  World.add(world, ball);

  ground=Bodies.rectangle(400, 400, 800, 10, groundOptions);
  World.add(world, ground);

  wall1=Bodies.rectangle(700, 375, 10, 250, groundOptions);
  World.add(world, wall1);

  wall2=Bodies.rectangle(400, 375, 10, 250, groundOptions);
  World.add(world, wall2);


  rectMode(CENTER);
  ellipseMode(RADIUS);
}

function draw() 
{
	Engine.update(engine);

	if (keyWentDown("up")){
		combined_force();
	}

  background(51);
  ellipse(ball.position.x, ball.position.y, 20);
  rect(ground.position.x, ground.position.y, 800, 10);
  rect(wall1.position.x, wall1.position.y, 10, 250);
  rect(wall2.position.x, wall2.position.y, 10, 250);
}

function combined_force(){
  Matter.Body.applyForce(ball, {x:0, y:0}, {x:0.05, y:-0.01});
}
