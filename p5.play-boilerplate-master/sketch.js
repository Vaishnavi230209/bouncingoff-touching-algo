var fixedRect, movingRect;

function setup() {
  createCanvas(1200,800);
  fixedRect = createSprite(600, 400, 50, 80);
  fixedRect.shapeColor = "green";
  fixedRect.debug = true;
  fixedRect.velocityY=-5;
  movingRect = createSprite(400,200,80,30);
  movingRect.shapeColor = "green";
  movingRect.debug = true;
  movingRect.velcotyY=5;
  go1 =createSprite (100,100,50,50);
  go2 =createSprite (200,100,50,50);
  go1.shapeColor="green";
  go2.shapeColor="green";
}

function draw() {
  background(0,0,0);  
  movingRect.x = World.mouseX;
  movingRect.y = World.mouseY;
bounceOff(movingRect,fixedRect)

  
  
  
  drawSprites();
}
function bounceOff(o1,o2){
  if (o1.x - o2.x < o2.width/2 + o1.width/2
    &&o2.x - o1.x < o2.width/2 + o1.width/2)
    {
      o1.velcotiyX=o1.velcotyX*(-1);
      o2.velcotiyX=o2.velcotyX*(-1);
    }
    if (o1.y - o2.y < o2.height/2 + o1.height/2
      && o2.y - o1.y < o2.height/2 + o1.height/2){
        o1.velocityY=o1.velocityY*(-1);
        o2.velocityY=o2.velocityY*(-1);
      }

  }


