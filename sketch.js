function preload(){
bgImg = loadImage("bg.png")
obstacle1Img = loadImage("obstacle1.png")
obstacle2Img = loadImage("obstacle2.png")
coinImg = loadImage("coin.png")
playerImg = loadAnimation("player1.png")
player_running = loadAnimation("player2.png","player3.png")
}

function setup() {
 createCanvas(1000,1000)
 bg = createSprite(600, 350, 1000,1000)
 bg.addImage(bgImg)
 bg.velocityX = -2

 player = createSprite(camera.position.x,450,100,100)
 player.addAnimation("standing",playerImg)
 player.addAnimation("running",player_running)
 player.scale = 0.4

 

}

function draw() {

    background("red")
 drawSprites()
 if(bg.x<0){
 bg.x = width/2
 }
 createCoins()
 createObstacles()
 playerControls()
}

function playerControls(){
    if(keyDown(RIGHT_ARROW)){
        player.velocityX = 2        
        player.changeAnimation("running",player_running)
    }
}

function createObstacles(){
if(frameCount% 150 === 0){
obstacle1 = createSprite(1000,random(400,500))
rand = Math.round(random(1,2))
switch(rand){
    case 1: obstacle1.addImage(obstacle1Img);
    break;
    case 2: obstacle1.addImage(obstacle2Img)
}
obstacle1.velocityX = -3
obstacle1.scale = 0.2

}
}

function createCoins(){
    if(frameCount% 200===0){
        coin = createSprite(1000,random(400,500))
        coin.addImage(coinImg)
        coin.velocityX = -3
        coin.scale = 0.2
    
    }
}