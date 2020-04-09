const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var engine, world;
var joint,weight;

function setup() {
  createCanvas(1200,400);
  engine = Engine.create();
  world = engine.world;

 var joint_options={
    isStatic: true
  }

joint = Bodies.rectangle(600,50,2200,20,joint_options);
World.add(world,joint);

var weight_options = {
  restitution : 1.0,
  density : 1.0
}

weight  = Bodies.circle(300,350,40,weight_options);
World.add(world,weight);

var options = {
  bodyA : weight,
  bodyB : joint,
  stiffness: 0.008,
  length : 10
}

var rope = Constraint.create(options);
World.add(world,rope);

fill("blue");
}

function draw() {
 background("black"); 
Engine.update(engine);
rectMode(CENTER);
rect(joint.position.x,joint.position.y,200,20);

fill("blue");
rectMode(CENTER);
rect(weight.position.x,weight.position.y,40);

strokeWeight(8);
stroke("white");
line(weight.position.x,weight.position.y,joint.position.x,joint.position.y)

if(keyCode===32){
weight.position.y = mouseY;
weight.position.x = mouseX;
}
}