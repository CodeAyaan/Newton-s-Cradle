const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint = Matter.Constraint;

var roof;
var con;
var con2;
//Create multiple bobs, mulitple ropes varibale here


function setup() {
	createCanvas(800, 600);
	rectMode(CENTER);

	engine = Engine.create();
	world = engine.world;
	rectMode(CENTER);
	ellipseMode(RADIUS);

	var Options = {restitution:0.7}
	ball = Bodies.circle (285,110,20,Options);
    World.add(world,ball);

    var option1 = {pointA : {x:285,y:110}, bodyB:ball, length:100, stiffness:0.1};
	con = Matter.Constraint.create(option1);
    World.add(world,con);

	var Options = {restitution:0.7}
	ball2 = Bodies.circle (355,110,20,Options);
    World.add(world,ball2);

    var option1 = {pointA : {x:355,y:110}, bodyB:ball2, length:100, stiffness:0.1};
	con2 = Matter.Constraint.create(option1);
    World.add(world,con2);

	var Options = {restitution:0.7}
	ball3 = Bodies.circle (425,110,20,Options);
    World.add(world,ball3);

    var option1 = {pointA : {x:425,y:110}, bodyB:ball3, length:100, stiffness:0.1};
	con3 = Matter.Constraint.create(option1);
    World.add(world,con3);

	var Options = {restitution:0.7}
	ball4 = Bodies.circle (495,110,20,Options);
    World.add(world,ball4);

    var option1 = {pointA : {x:495,y:110}, bodyB:ball4, length:100, stiffness:0.1};
	con4 = Matter.Constraint.create(option1);
    World.add(world,con4);

	var roof_options={
		isStatic:true			
	}

	roof = Bodies.rectangle(400,100,230,20,roof_options);
    World.add(world,roof);

	Engine.run(engine);
	
  
}

function draw() {
	  rectMode(CENTER);
  background("#99004d");

  rect(roof.position.x,roof.position.y,230,20);
  line(con.pointA.x,con.pointA.y,ball.position.x,ball.position.y)
  line(con2.pointA.x,con2.pointA.y,ball2.position.x,ball2.position.y)
  line(con3.pointA.x,con3.pointA.y,ball3.position.x,ball3.position.y)
  line(con4.pointA.x,con4.pointA.y,ball4.position.x,ball4.position.y)
  //call display() to show ropes here
 
  
  //create ellipse shape for multiple bobs here
  ellipse(ball.position.x,ball.position.y,30)
  ellipse(ball2.position.x,ball2.position.y,30)
  ellipse(ball3.position.x,ball3.position.y,30)
  ellipse(ball4.position.x,ball4.position.y,30)
}

//Write keyPressed function and apply force on pressing up_arrow key on the first bob.
function keyPressed(){

	if(keyCode === RIGHT_ARROW){
	Matter.Body.applyForce(ball, {x:0,y:0},{x:0.05,y:0})
	
	}
	
	}
