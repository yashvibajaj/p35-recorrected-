var backImage, balloonImage;
var balloon;
var position, balloonPosition;
var database;
var balloonImage1,balloonImage2;




function preload(){
   
  backImage = loadImage("sprites/Hot Air Ballon-01.png");
  balloonImage = loadImage("sprites/Hot Air Ballon-02.png");
  balloonImage1 = loadImage("sprites/Hot Air Ballon-03.png");
  balloonImage2 = loadImage("sprites/Hot Air Ballon-04.png");
}

function setup() {
  createCanvas(1600,800);

   balloon = createSprite(150,150,20,20);
   balloon.addImage(balloonImage);
   balloon.scale = 0.4;

   database = firebase.database();

    balloonPosition = database.ref('ball/height');

    balloonPosition.on("value",readPosition,showError);



  
}

function draw() {
  background(backImage); 

  if(keyDown(LEFT_ARROW)){
    balloon.x = balloon.x-10;
  }
  if(keyDown(RIGHT_ARROW)){
    balloon.x = balloon.x+10;
  }
  if(keyDown(UP_ARROW)){
    balloon.y = balloon.y-10;
    balloon.addAnimation("hot air",balloonImage1);
    balloon.scale = balloon.scale - 0.01;
  }
  if(keyDown(DOWN_ARROW)){
    balloon.y = balloon.y+10;
    balloon.addAnimation("hot air",balloonImage2);
    balloon.scale = balloon.scale + 0.01;
  }

  textSize(20);
  fill("black");
  text("Use arrow keys to move the hot air ballon",25,20);

  drawSprites();
}

function readPosition(data){
   
  position = data.val();
  ball.x = position.x;
  ball.y = position.y;

}

function showError(){

  console.log("getting error");
}