var play,about,playimg,aboutimg,back,backImg,aboutbg;
var soundimg,nosoundimg;
var logo,logoimg;
var timer=100;
var gameState="wait"
var bg1;
var wallGroup,wls

function preload(){
    aboutimg=loadImage("buttons23/about1.png")
    nosoundoimg=loadImage("buttons23/nosound1.png")
    soundimg=loadImage("buttons23/sound1.png")

    playimg=loadImage("buttons23/play1.png")
    logoimg=loadImage("Logo.gif")

    bg1=loadImage("bgl1.png")
    aboutbg=loadImage("about.jpg")
}

function setup(){
createCanvas(windowWidth,windowHeight)

play=createSprite(100,100,20,20)
play.addImage(playimg)


about=createSprite(100,200,20,20)
about.addImage(aboutimg)

sound=createSprite(100,300,20,20)
sound.addImage(soundimg)

nosound=createSprite(100,400,20,20)
nosound.addImage(nosoundoimg)


    
}

function draw(){
//background(logoimg)


if (gameState==="wait"){

    background(logoimg)

if(mousePressedOver(play)){
    gameState="play"
}
if(mousePressedOver(about)){
    gameState="about"
}

if (gameState==="play"){
    background(bg1)
    play.visible=false
    about.visible=false
    sound.visible=false 
    nosound.visible=false
    
}

if(gameState==="about"){
    background(aboutbg)
    play.visible=false
    about.visible=false
    sound.visible=false
    nosound.visible=false
    back=createSprite(200,200,30,20)

   


    /*if(mousePressedOver(back)){
        gameState="wait"
    }*/
   
}


} 


    drawSprites()    
}


