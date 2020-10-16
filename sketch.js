var bullet, wall;
var speed, weight, thickness;
var bulletWeight, bulletSpeed;
function setup() 
{
  createCanvas(1600,400);
  bullet = createSprite(50, 200, bulletWeight, 35);
  bullet.shapeColor="white";
  
  //values
  speed = random(223,321);
  weight = random(30,52);
  thickness = random(22,83);
  bulletWeight = random(30,52);
 
  //wall
  wall = createSprite(1200,200,thickness,height/2);
  wall.shapeColor=color(80,80,80);

  

  //speed
  bullet.velocityX = speed;
}

function draw() 
{
  background("black");  
 
  if (wall.x-bullet.x<(bullet.width+wall.width)/2) 
  {

  bullet.velocityX=0;
  var damage = 0.5 * bulletWeight * speed * speed/thickness * thickness * thickness
   if (damage<10) 
   {
    bullet.shapeColor=color(0,255,0);
   }
   if (damage>10) 
   {
    bullet.shapeColor=color(255,0,0);
   }
  
  drawSprites();
  }
}