var bgImg;

const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;

var engine, world;
var snowflakes = [];
//var snow1, snow2, snoww3, snow4, snow5;

function preload(){
bgImg = loadImage("snow3.jpg");
}

function setup() {
  createCanvas(900,400);
  
  engine = Engine.create();
  world = engine.world;

 /* snow1 = new snow(250,200);
  snow2 = new snow(450,100);
  snow3 = new snow(650,50);
  snow4 = new snow(850,50);
  snow5 = new snow(50,100);*/
  
}

function draw() {
  background(bgImg);  
  Engine.update(engine);
 /* snow1.display();
  snow2.display();
  snow3.display();
  snow4.display();
  snow5.display();*/

  if(frameCount % 5 === 0) {
    snowflakes.push( new snow(random(800, 100), 10, 10 ));
  }

  for (var j = 0; j < snowflakes.length; j++) {
   
    snowflakes[j].display();
  }
  
  drawSprites();
}