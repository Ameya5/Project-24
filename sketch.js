
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

function preload()
{
	
}

function setup() {
	createCanvas(800, 700);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
	paperBall = new Paper(100,400,20);
	ground = new Ground(400,680,800,10);

	side1 = new Dustbin(600, 670, 250, 10);
	side2 = new Dustbin(480,625,10,100);
	side3 = new Dustbin(730,625,10,100);


	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(0);
  drawSprites();
  keyPressed();
  paperBall.display();
  ground.display();
  side1.display();
  side2.display();
  side3.display();
}

function keyPressed(){
	if(keyCode === UP_ARROW){
		Matter.Body.applyForce(paperBall.body,paperBall.body.position,{x:2,y:-4});
	}
}