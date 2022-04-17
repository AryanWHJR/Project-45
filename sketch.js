var canvas, dolphin, dolphin_ani, bg, bg1;

function preload(){
    dolphin_ani=loadAnimation("D0.png","D1.png","D2.png","D3.png","D4.png","D5.png","D6.png","D7.png");
    bg_img=loadImage("bg.jpg")
}

function setup() {
    createCanvas(600,400);
    dolphin = createSprite(50,350,20,10)
    dolphin.addAnimation("SwimmingDolphin", dolphin_ani)
    dolphin.scale = 0.6


    bg1 = createSprite(900,200,600,400)
    bg1.addImage(bg_img)
    bg = createSprite(300,200,600,400)
    bg.addImage(bg_img)

    
    dolphin.depth = bg.depth+1
}

function draw() {
    background("#ffffff")
    
    if(keyDown("RIGHT_ARROW")){
        bg.velocityX = -3
        bg1.velocityX = -3
    }
    else{
        bg.velocityX = 0
        bg1.velocityX = 0
    }
    if(bg.x < -300){
        bg.x = 900
    }
    if(bg1.x < -300){
        bg1.x = 900
    }
    if(keyDown("UP_ARROW")){
        dolphin.y-=5
    }
    if(keyDown("DOWN_ARROW")){
        dolphin.y+=5
    }
    if(dolphin.y > 360){
        dolphin.y = 360
    }
    if(dolphin.y < 40){
        dolphin.y = 40
    }
    drawSprites()
}