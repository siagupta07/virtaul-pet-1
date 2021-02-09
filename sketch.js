//Create variables here

var dog,dogIMG, dog1, dog2;
var database, foodS, foodStock, Food;
var score = 20;
var database
function preload()
{
  dog1=loadImage("images/dogImg.png")
  dog2=loadImage("images/dogImg1.png")
}

function setup() {
  createCanvas(500, 500);
  database=firebase.database();
  dog=createSprite(250,250,10,10);
  dog.addImage(dog1);
  dog.scale = 0.3;

  foodStock = database.ref('Food');
    foodStock.on("value", readStock);
  
}


function draw() {  
background("lightblue")
  
  //add styles here
  if(keyWentDown(UP_ARROW)){
    dog.addImage(dog2)
    writeStock(foodS)
    score--
  }
  drawSprites();
  textSize(25)
  fill("blue");
  text("Food remaining : "+score,20,40);
  
}

function readStock(data){
  foodS = data.val()
}

function writeStock(x){
  database.ref('/').update({
    Food:x
  })
}


