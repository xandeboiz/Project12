var path,boy, leftBoundary,rightBoundary;
var pathimg,boyimg;
var i;

function preload(){
  pathimg = loadImage("path.png");
  boyimg = loadAnimation("Runner-1.png","Runner-2.png");
 
}

function setup(){
  
  createCanvas(400,400);
 path = createSprite(200,200);
 path.addImage("pathimage",pathimg);
path.scale=1.2;

boy = createSprite(200,350);
boy.addAnimation("boyimage", boyimg);
boy.scale=0.08;
  

leftBoundary=createSprite(0,0,100,800);
leftBoundary.visible = false;


rightBoundary=createSprite(410,0,100,800);
rightBoundary.visible = false;
}

function draw() {
  background(0);
  path.velocityY = 4;
  
  boy.x = mouseX;
  
  edges= createEdgeSprites();
  boy.collide(edges[3]);
  boy.collide(leftBoundary);
  boy.collide(rightBoundary);
  

  if(path.y > 400 ){
    path.y = height/1.6;
  }
  
  drawSprites();
}
