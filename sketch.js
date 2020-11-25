var runner, rockGroup, runnerImg, rockImg, ground;
var count = 0;

function preload(){
    runnerImg=loadImage("running.jpg");
    rockImg=loadImage("rock.jpg");
}

function setup(){
    createCanvas(displayWidth-10, displayHeight-165);
   runner=createSprite(100,350,10,10);
  rockGroup=createGroup();
    runner.addImage(runnerImg);
    ground = createSprite(350,450,displayWidth-10,10);
    textSize(18);
    textStyle(BOLD);
   // fill(0);

}
function draw(){
    background("field.jpg");
    runner.scale = 0.2;
    runner.collide(ground)

    if(keyWentDown(UP_ARROW)&& runner.y>379){
    runner.velocityY = -12 ;
          }
    
          runner.velocityY = runner.velocityY + 0.5;
          text("Score: "+ count, 250, 100);
          count = count+Math.round(World.frameRate/60.1);

    Rock();
    drawSprites();
}

function Rock() {
    if (World.frameCount % 80 === 0) {
      var rock = createSprite(835,425,40,10);
      rock.addImage(rockImg)
      rock.scale = 0.2;
    // rock.debug= true;
      rock.velocityX = -6;
      rock.lifetime = 250;
      rockGroup.add(rock);
    }
  }