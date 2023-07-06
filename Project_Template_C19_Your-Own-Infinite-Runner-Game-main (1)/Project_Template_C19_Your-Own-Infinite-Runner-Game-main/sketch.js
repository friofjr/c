

function preload() {
    bgImg = loadImage("assets/bg.jpg")

    submarineImg = loadImage("assets/submarine.png")

    obstacleImg = loadImage("assets/shark.png")
}

function setup() {
    createCanvas(windowWidth, windowHeight)

    bg = createSprite(width/2 , height/2 , width,height)
    bg.addImage(bgImg)
    bg.scale = 0.6

    submarine = createSprite(-50, height-250)
    submarine.addImage(submarineImg)
    submarine.velocityX = 5
    submarine.scale = 1.5
    
}

function draw() {
  background("blue")

  if(keyDown("up")){
    submarine.y -= 10
  }
  
  if(keyDown("down")){
    submarine.y += 10
  }

  spawnObstacles()

  drawSprites()
}

function spawnObstacles(){
    if(frameCount % 100 == 0){
        obstacle = createSprite(width, random(height-100 , height-350) )
        obstacle.addImage(obstacleImg)
        obstacle.velocityX = -5
        obstacle.scale = 0.5 
    }
}



