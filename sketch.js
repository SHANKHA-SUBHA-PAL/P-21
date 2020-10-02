
var bullet , wall , speed , weight, thickness;

function setup() {
  createCanvas(1600,400);
  
  thickness = random(22,83)

  bullet = createSprite(50, 200, 50, 05);
  bullet.shapeColor("white");
  wall = createSprite(1500, 200, thickness, height/2);
  wall.shapeColor(80,80,80)

  speed = random(50,90);
  weight = random(30,52);

  bullet.velocityX = speed;
  bullet.weight = weight;

}

function draw() {
  background(0,0,0);
  if (hasCollided(bullet,wall)){

    bullet.velocityX = 0
    
    var damage = 0.5 * weight * speed * speed/(thickness * thickness * thickness);
    
    if(damage>10){
    
      wall.shapeColor=color(255,0,0);
    
    }
    
    if(damage<10){
    
      wall.shapeColor=color(0,255,0);
    
    }
    
    } 
    
  drawSprites();
}





function hasCollided(bullet,wall){

bulletRightEdge = bullet.x+bullet.width;
wall.LeftEdge = wall.x;
if(bullet.RightEdge >= wall.LeftEdge ){

  return true;

}

return false;

}