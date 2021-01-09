
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint=Matter.Constraint;
var bobDiameter;
function preload()
{
	
}

function setup() {
	createCanvas(2000, 2000);


	engine = Engine.create();
	world = engine.world;
	bobDiameter = 80;
	bobObject1= new Bob(200,400, bobDiameter)
	bobObject2= new Bob(300,400, bobDiameter)
	bobObject3= new Bob(400,400, bobDiameter)
	bobObject4= new Bob(500,400, bobDiameter)
	bobObject5= new Bob(600,400, bobDiameter)
    roof= new Roof(650,200,1000,20)

	rope = new Rope(bobObject1.body, roof.body, -bobDiameter * 2.5, 0);
	rope2 = new Rope(bobObject2.body, roof.body, -bobDiameter * 1.3, 0);
	rope3 = new Rope(bobObject3.body, roof.body, -bobDiameter * 0.1, 0);
	rope4 = new Rope(bobObject4.body, roof.body, -bobDiameter * -1.2, 0);
	rope5 = new Rope(bobObject5.body, roof.body, -bobDiameter * -2.4, 0)
	Engine.run(engine);
  
}


function draw() {
 
  rectMode(CENTER);
  ellipseMode(CENTER);
  background(90);
  roof.display();
  bobObject1.display();
  bobObject2.display();
  bobObject3.display();
  bobObject4.display();
  bobObject5.display();
 
  rope.display();
  rope2.display();
  rope3.display();
  rope4.display();
  rope5.display();
  Force();
  
  drawSprites();
 
}
function Force() {
  if (keyCode === UP_ARROW) {
    Matter.Body.applyForce(bobObject1.body, bobObject1.body.position, {
      x: -500,
      y: -45,
    });
  }
}


