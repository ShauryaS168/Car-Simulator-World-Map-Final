var car, carImage, mum, tok, lon;
var bg;
var PLAY = 1;
var END = 0;
var CHOOSE = 3;
var CITY2 = 2;
var gameState = CHOOSE;
var CITY3 = 4;
var carHorn, carStarting, carSound;
var gameOver;
var propGroup;
var planeGroup;


function preload(){
  carImage = loadImage("images/car.png");
  mum = loadImage("images/mumbai.jpg");
  lon = loadImage("images/london.png");
  tok = loadImage("images/tokyo.jpg");
  car1IMG = loadImage("images/car.png");
  car2IMG = loadImage("images/car2.png");
  car3IMG = loadImage("images/car3.png");
  car4IMG = loadImage("images/car4.png");
  prop1 = loadImage("images/prop1.png");
  prop2 = loadImage("images/prop2.png");
  prop3 = loadImage("images/prop3.png");
  prop4 = loadImage("images/prop4.png");
  prop5 = loadImage("images/prop5.png");
  prop6 = loadImage("images/prop6.png");
  prop7 = loadImage("images/prop7.png");
  prop8 = loadImage("images/prop8.png");
  prop9 = loadImage("images/prop9.png");
  prop10 = loadImage("images/prop10.png");
  prop11 = loadImage("images/prop11.png");
  prop12 = loadImage("images/prop12.png");
  prop13 = loadImage("images/prop13.png");
  prop14 = loadImage("images/prop14.png");
  prop15 = loadImage("images/prop15.png");
  prop16 = loadImage("images/prop16.png");
  prop17 = loadImage("images/prop17.png");
  prop18 = loadImage("images/prop18.png");
  prop19 = loadImage("images/prop19.png");
  plane1 = loadImage("images/plane1.png");
  plane2 = loadImage("images/plane2.png");
  plane3 = loadImage("images/plane3.png");
  plane4 = loadImage("images/plane4.png");
  carHorn = loadSound("images/carhorn.wav");
  carStarting = loadSound("images/carstarting.mp3");
  gameOver = loadImage("images/gameover.jpeg");
  carSound = loadSound("images/gtr.mp3");






}

function setup() {
 createCanvas(1400,400);
 bg = createSprite(700,200,20,20);
bg.shapeColor="yellow";
 car = createSprite(60,350,60,30);
 car1 = createSprite(60,350,60,30);
 car2 = createSprite(60,350,60,30);

 car.addImage(carImage);
 car1.addImage(carImage);
 car2.addImage(carImage);
 car.scale = 0.6;
 car1.scale = 0.6;
 car.depth = car.depth+1;
 car2.scale = 0.6;
 car1.visible=false;
 car2.visible=false;
 //bg.velocityX = -2;
 //bg.x=bg.width/2;
propGroup= new Group();
planeGroup= new Group();
}

function draw() {
 
background("grey");
// city mumbai 
if(gameState===PLAY){
  bg.addImage(mum,0,0,10,10);
  if(keyDown("space")){
    carHorn.play();
  }
  if(keyDown(RIGHT_ARROW)){
    car.x = car.x+2; 
  }
  if(keyDown(LEFT_ARROW)){
    car.x = car.x-2;
  }
 spawnProp();
 planes();
 //if(bg.x<0){
   //bg.x=bg.width/2;
 if(car.x>=1400){
   gameState = CITY2;
 }
}
// choosing welcome page
if(gameState===CHOOSE){
  background("yellow");
  fill("red");
  textSize(32);
  text("Car Simulator: World Map",500,50);
  textSize(24);
  text("Level Up to unlock City 2 and 3",500,100);
  text("Press H to start",580,150);
  carStarting.play();
 if(keyDown("h")){
   car.addImage(car1IMG);
   gameState=PLAY;
 }
 

}

// city tokya
if(gameState==CITY2){
  bg.addImage(tok);
car1.visible=true;
car1.addImage(car4IMG);
car1.scale = 0.5;
car.visible=false;
  if(keyDown(RIGHT_ARROW)){
    car1.x = car1.x+2; 
  }
  if(keyDown("space")){
    carHorn.play();
  }
  if(keyDown(LEFT_ARROW)){
    car.x = car.x-2;
  }
 spawnProp2();
 planes2();

 if(car1.x>=1400){
   gameState = CITY3;
 }
}

// next city of london
if(gameState==CITY3){
  bg.addImage(lon);
car2.visible=true;
car2.addImage(car2IMG);
car2.scale = 0.5;
car1.visible=false;

  if(keyDown(RIGHT_ARROW)){
    car2.x = car2.x+2; 
  }
  if(keyDown("space")){
    carHorn.play();
  }
  if(keyDown(LEFT_ARROW)){
    car.x = car.x-2;
  }  
 spawnProp3();
 planes3();
 if(car2.x>=1400){
   gameState = END;
   propGroup.setLifetimeEach(0);
   propGroup.destroyEach();
   planeGroup.setLifetimeEach(0);
  planeGroup.destroyEach();
 }
}


if(gameState===END){
  background("white");
  propGroup.setLifetimeEach(0);
  propGroup.destroyEach();
  planeGroup.setLifetimeEach(0);
  planeGroup.destroyEach();
  bg.addImage(gameOver);
  
 


}

    drawSprites();
}

// for Mumbai
function spawnProp(){
  if(frameCount%230===0){
    var prop = createSprite(000,350,30,20);
    prop.velocityX = 3;


    var rand = Math.round(random(1,10));
    switch(rand){
      case 1 : prop.addImage(prop1);
      break;
      case 2 : prop.addImage(prop2);
      prop.scale=0.7;
      break;
      case 3 : prop.addImage(prop7);
      break;
      case 4 : prop.addImage(prop13);
      prop.scale=0.8;
      break;
      case 5 : prop.addImage(prop5);
      prop.scale=0.7;
      break;
      case 6 : prop.addImage(prop6);
      prop.scale=0.8;
      break;
      case 7 : prop.addImage(prop16);
      prop.scale=1.3;
      break;
      case 8 : prop.addImage(prop17);
      prop.scale=0.8;
      break;
      case 9 : prop.addImage(prop18);
      prop.scale=2000;
      break;
      case 10 : prop.addImage(prop19);
      prop.scale=0.8;
      break;

  
    }
    prop.depth = car.depth;
    car.depth = car.depth+1;
     propGroup.add (prop);
  }
}
// for Mumabi
function planes(){
  if(frameCount%300===0){
    var plane = createSprite(1400,30,30,10);
    plane.velocityX=-7;
    plane.addImage(plane3);
    plane.scale=0.1;
  }
}




// for Tokyo

function spawnProp2(){
  if(frameCount%230===0){
    var prop = createSprite(000,350,30,20);
    prop.velocityX = 3;


    var rand = Math.round(random(1,6));
    switch(rand){
      case 1 : prop.addImage(prop8);
      prop.scale=0.5;
      break;
      case 2 : prop.addImage(prop9);
      prop.scale=0.5;
      break;
      case 3 : prop.addImage(prop10);
      prop.scale=0.6;
      break;
      case 4 : prop.addImage(prop12);
      prop.scale=0.5;
      break;
      case 5 : prop.addImage(prop14);
      prop.scale=0.5;
      break;
      case 6 : prop.addImage(prop15);
      prop.scale=0.5;
      break;
  
    }
    prop.depth = car1.depth;
    car1.depth = car1.depth+1;
  }
}
// for Tokyo
function planes2(){
  if(frameCount%300===0){
    var plane = createSprite(1400,30,30,10);
    plane.velocityX=-7;
    plane.addImage(plane4);
    plane.scale=0.1;
  }
}

// for London
function spawnProp3(){
  if(frameCount%230===0){
    var prop = createSprite(000,350,30,20);
    prop.velocityX = 3;


    var rand = Math.round(random(1,6));
    switch(rand){
      case 1 : prop.addImage(prop3);
      break;
      case 2 : prop.addImage(prop2);
      prop.scale=0.75;
      break;
      case 3 : prop.addImage(prop4);
      break;
      case 4 : prop.addImage(prop11);
      prop.scale=0.9;
      break;
      case 5 : prop.addImage(prop15);
      prop.scale=0.5;
      break;
      case 6 : prop.addImage(prop14);
      prop.scale=0.5;
      break;
  
    }
    prop.depth = car2.depth;
    car2.depth = car2.depth+1;
  }
}
// for London 
function planes3(){
  if(frameCount%300===0){
    var plane = createSprite(1400,30,30,10);
    plane.velocityX=-7;
    plane.addImage(plane1);
    plane.scale=0.3;
    planeGroup.add(plane)
  }
}