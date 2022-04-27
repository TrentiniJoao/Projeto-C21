
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var ball;
var groundObj;
var block1, block2, block3;
function preload()
{

}

function setup() {
	createCanvas(1600, 700);

	engine = Engine.create();
	world = engine.world;

	var ball_options={
		isStatic: false,
		restitution: 0.3,
		friction: 0,
		density: 1.2
	}

	ball = Matter.Bodies.circle(260, 100, 40, ball_options);
	World.add(world, ball);

	

	//Crie os Corpos Aqui.
	var plane_options={
		isStatic: true
	}
	
	block1 = Bodies.circle(220,10,10,block1_options)
	World.add(world,block1);

	block2 = Bodies.rectangle(110,50,10,10,block2_options);
	World.add(worls,block2);

	block3 = Bodies.rectangle(350,50,10,10,block3_options);
	World.add(world,block3);

	groundObj = new Ground(width/2, 670, width, 20);

	fill("red")
	

	Engine.run(engine);
	
	
}


function draw() {
	rectMode(CENTER);
  	background("lightgreen");
  
  	drawSprites();
	
	Engine.update(engine);
	
	rectMode(CENTER)
	ellipseMode(CENTER)

	groundObj.display();
}

function KeyPressed(){
	if(KeyCode === UP_ARROW){
		Matter.Body.applyForce(ball, ball.position, {x:85,y:-85})


	}
}

