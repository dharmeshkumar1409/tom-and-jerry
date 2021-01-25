var tom1;
var tom1Img, tom2Img, tom3Img, tom4Img;
var jerry;
var jerry1Img, jerry2Img, jerry3Img, jerry4Img;
var bg, bgImg;

function preload() {
    //load the images here

    tom1Img = loadAnimation("cat1.png");
    tom2Img = loadAnimation("cat2.png", "cat3.png");
    tom3Img = loadAnimation("cat4.png");

    jerry1Img = loadAnimation("mouse1.png");
    jerry2Img = loadAnimation("mouse2.png", "mouse3.png");
    jerry3Img = loadAnimation("mouse4.png");

    bgImg = loadImage("garden.png");
}

function setup() {
    createCanvas(1000, 800);
    //create tom and jerry sprites here

    bg = createSprite(500, 400, 30, 30);
    bg.addImage(bgImg);
    bg.scale = 1.18;

    tom = createSprite(880, 650, 30, 30);
    tom.addAnimation("cat_sitting", tom1Img);
    tom.scale = 0.18;

    jerry = createSprite(150, 650, 30, 30);
    jerry.addAnimation("jerry_sitting", jerry1Img);
    jerry.scale = 0.18;

}

function draw() {
    background("black");
    keyPressed();
    //Write condition here to evalute if tom and jerry collide

    if (tom.x - jerry.x < (tom.width - jerry.width) / 2) {
        tom.velocityX = 0;
        tom.addAnimation("cat_resting", tom3Img);
        tom.changeAnimation("cat_resting");
        jerry.addAnimation("jerry_resting", jerry3Img);
        jerry.changeAnimation("jerry_resting");

    }

    drawSprites();

    // fill("red");
    // textSize(20);
    // text(mouseX + "," + mouseY, 10, 45);

}


function keyPressed() {

    //For moving and changing animation write code here

    if (keyCode === LEFT_ARROW) {
        tom.velocityX = -5;
        tom.addAnimation("cat_running", tom2Img);
        tom.changeAnimation("cat_running");
        jerry.addAnimation("jerry_teasing", jerry2Img);
        jerry.changeAnimation("jerry_teasing");
    }


}
