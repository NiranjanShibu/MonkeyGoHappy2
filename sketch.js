
var monkey , monkey_running;
var banana ,bananaImage, obstacle, obstacleImage;
var bananaGroup, obstacleGroup;
var score = 0;
var ground;
var background, backgroundImage;

function preload(){
  
  
  monkey_running = loadAnimation("Monkey_01.png","Monkey_02.png","Monkey_03.png","Monkey_04.png","Monkey_05.png","Monkey_06.png","Monkey_07.png","Monkey_08.png","Monkey_09.png", "Monkey_10.png");
  
  bananaImage = loadImage("banana.png");
  obstacleImage = loadImage("obstacle.png");
  backgroundImage = loadImage("jungle.jpg");
 
}



function setup() {
  createCanvas(600, 355);

  monkey = createSprite(80, 315, 20, 20);
  monkey.addAnimation("run", monkey_running);
  monkey.scale = 0.1;
  
  ground = createSprite(400, 350, 1200, 10);
  ground.velocityX = -4;
  ground.x = ground.width/2;
  console.log(ground.x);
  
  bananaGroup = createGroup();
  obstacleGroup = createGroup();
} 


function draw() {
  
  background(backgroundImage);
  
  fill("black");
  text("Score: "+ score, 500,50);
 
  
  if(keyDown("space") && monkey.y > 314){
     monkey.velocityY = -11;
     }
  
  monkey.velocityY = monkey.velocityY + 0.4;
  
  monkey.collide(ground);
  
  if (ground.x < 0){
      ground.x = ground.width/2;
    }
  
score = score + Math.round(frameRate()/60);
  
  rock();
  food();
  drawSprites();
}

function food(){
  
  if (frameCount % 80 === 0) {
    banana = createSprite(600,50,20,20);
    banana.y = Math.round(random(175, 235));
    banana.addImage(bananaImage);
    banana.scale = 0.07;
    banana.velocityX = -3;
    banana.lifetime = 210;
    
    bananaGroup.add(banana);
  }
  
  if(monkey.isTouching(bananaGroup)){
     score = score+50;
    bananaGroup.destroyEach();
     }
  
}

function rock(){
  
  if (frameCount % 300 === 0) {
     obstacle = createSprite(600,334.5,20,20);
    obstacle.addImage(obstacleImage);
    obstacle.scale = 0.08;
    obstacle.velocityX = -3;
    obstacle.lifetime = 210;
    
    obstacleGroup.add(obstacle);
  }
  
  if(monkey.isTouching(obstacleGroup)){
     score = score-100;
    obstacleGroup.destroyEach();
     }
  
}






