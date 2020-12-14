//Create variables here
var dog, happyDog, database, foodS, foodStock, feedDog;
var fedTime, lastFed, foodObj, object;

function preload()
{
  //load images here
  dog_Img = loadImage("images/Dog.png");
  happyDog_Img = loadImage("images/happydog.png");
}

function setup() {
  createCanvas(500, 500);
  database = firebase.database()
  
  dog = createSprite(250, 300, 150, 150);
  dog.addImage(dog_Img);
  dog.scale=0.15;

  foodStock = database.ref('Food');
foodStock.on("value", readStock)

feed = createButton("Feed the dog");
feed.position(700, 95);
feed.mousePressed(feedDog);

addFood = createButton("Add Food");
addFood.position (800, 95);
addFood.mousePressed(addFood);

fedTime = createSprite(350, 320, 10, 10);

lastFed = createSprite(320, 120, 10, 10);

foodObj = createSprite(220, 90, 10, 10);

object = createSprite(80, 240, 10, 10);


}


function draw() { 
  background(46, 139, 87)
  


    //add styles here
    textSize(30);
    fill("yellow");
  stroke('black');
  text("Food Remaining:"+foodS, 170, 200)


  fedTime = database.ref('FeedTime');
fedTime.on("value", function(data){
lastFed = data.val();
})

  drawSprites();
}


  function readStock(data){

  
    foodS = data.val();
  }

  function writeStock(x){

    if(x<=0){
x= 0
    }else{
      x = x-1
    }
database.ref('/').update({
  Food:x
})
  }

  function feedDog(){
    dog.addImage(happyDog);
foodObj.updateFoodStock(foodObj.getFoodStock()-1);
database.ref('/').update({
  Food:foodObj.getFoodStock(),
  FeedTime:hour()
})
}

  function addFoods(){
    foodS++;
    databaser.ref('/').update({
      Food:foodS

      .position(250, 200)
      .mousePressed(function(){
        input.hide()
        button.hide()

        var addFood = input.value()

        foodCount +=1
      })
    })
  }






