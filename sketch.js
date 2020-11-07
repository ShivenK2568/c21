var rect1;
var rect2;
var gameobj1 , gameobj2,gameobj3,gameobj4;

function setup() {
  createCanvas(1200,800);
  rect1=createSprite(600, 400, 50, 80);
  rect2=createSprite(400,200,80,30);
  rect1.shapeColor="blue";
  rect2.shapeColor="blue";
  gameobj1=createSprite(200,100,30,80);
  gameobj2=createSprite(200,200,80,50);
  gameobj1.shapeColor="blue";
  gameobj2.shapeColor="blue";
  gameobj3=createSprite(900,100,50,50);
  gameobj4=createSprite(900,800,50,50);
  gameobj3.shapeColor="blue";
  gameobj4.shapeColor="blue";
  gameobj3.velocityY=5;
  gameobj4.velocityY=-5;
}

function draw() {
  background(0,0,0); 
  rect2.x=World.mouseX; 
  rect2.y=World.mouseY;

 if(istouching(gameobj1,rect2)){
    gameobj1.shapeColor="yellow";
    rect2.shapeColor="yellow";
 }
 else{
    gameobj1.shapeColor="blue";
    rect2.shapeColor="blue";
 }
 bounceoff(gameobj3,gameobj4);

  drawSprites(); 
}

