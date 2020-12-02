
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var ground1;
var ball1;
var dustbin;

function preload()
{

}

function setup() {
	createCanvas(1600, 700);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
	ground1=new Ground(100,660,3200,20);
	ball1=new Ball(100,600,30,30);
	dustbin=new Dustbin(1090,600,100,100)


	Engine.run(engine);
  
}


function draw() {
  background("white");
  Engine.update(engine);
  ball1.display();
  ground1.display();
  dustbin.display();
  
 
}

function keyPressed(){
  if(keyCode===UP_ARROW){
	  Matter.Body.applyForce(ball1.body,ball1.body.position,{x:85,y:-85})
  }
}


