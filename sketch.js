var dragon1,dragon1Img,dragon2,dragon2Img,runner,runnerImg,arrow,arrowImg,cannon,cannonImg,cannonball,cannonballImg,backgroundimage;



function preload(){
  backgroundimage = loadImage("background.png");
  dragon1Img = loadImage("dragon.gif");
  dragon2Img = loadImage("dragon2.gif");
  runnerImg = loadAnimation("run.png","run1.png","run2.png","run3.png","run4.png","run5.png");
  arrowImg = loadImage("arrow.png");
  cannonImg = loadImage("cannon.jpg");
  cannonballImg = loadImage("cannonball.png");
  
} 

function setup() {
  createCanvas(windowWidth,windowHeight);
  runner = createSprite(width/7,height-300,50,50)
  runner.addAnimation("running",runnerImg);
  runner.scale = 0.3;
  
  
}

function draw() {
  background(backgroundimage);  
  drawSprites();
}