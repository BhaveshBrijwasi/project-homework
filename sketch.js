var astronaut,astronaut;
var spaceImg,spaceImg,endImg;
var asteroid, asteroidImg;
var jumpSound, dieSound;
var gameState;


//Game States
var PLAY=1;
var END=0;

function preload(){
  pathImg = loadImage("space.png");
  asteroidImg = loadAnimation("asteroid.jpg");
  astronautImg = loadAnimation("astronaut.jpg");
  oxygenImg = loadAnimation("oxygen.jpg");
  endImg =loadAnimation("gameOver.png");
  jumpSound = loadSound("jump.mp3");
  dieSound = loadSound("die.mp3");
}

function setup(){
  
createCanvas(600,600);

asteroid = createSprite(300,300);
asteroid.addImage("asteroid", asteroidImg);
asteroid.velocity = 2;

astronaut = createSprite(200,200,50,50);
astronaut.scale=0.3;
astronaut.addImage("astronaut", astronautImg)
}


function draw() {

  if(gameState===PLAY){
if(keyDown("left")){
astronaut.x = astronaut.x - 3;
 
}
if(keyDown("right")){

  astronaut.x = astronaut.x + 3
}

if (keyDown("space")){
astronaut.velocityY = -10

}

if(asteroid.y > 400){
  asteroid.y = 300
}

  }
}