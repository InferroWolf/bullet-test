var bullet,wall,thickness;
var speed,weight,damage;

function setup() {
  createCanvas(1600,400);
  speed=random(220,320);
  weight=random(30,80);
  thickness=random(20,80);
  bullet=createSprite(50,200,50,10);
  wall=createSprite(1200,200,thickness,height/2);
  bullet.velocityX=speed;
}

function draw() {
  background(255,255,255); 
  wall.shapeColor=color("black");
  if(bullet.isTouching(wall)){
    bullet.velocityX=0;
    damage=0.5*speed*speed*weight/(thickness*thickness*thickness);
    console.log(damage);

 bullet.x=1450;
  }
  if (damage>10){
    wall.shapeColor="red";
  }
  else if (damage<15 && damage>7){
    wall.shapeColor="yellow";
  }
  else if (damage<7){
    wall.shapeColor="green";
  }
  drawSprites();
}