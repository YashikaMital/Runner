var runner, rockGroup, runnerImg, rockImg, ground;
var count = 0;

function preload(){
    runnerImg=loadImage("running.jpg");
    rockImg=loadImage("rock.jpg");
}

function setup(){
    createCanvas(700,500);
   runner=createSprite(100,350,10,10);
  rockGroup=createGroup();
    runner.addImage(runnerImg);
    ground = createSprite(350,450,700,10);
    textSize(18);
    textFont("Georgia");
    textStyle(BOLD);

}
function draw(){
    background(255);
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
      var rock = createSprite(710,425,40,10);
      rock.addImage(rockImg)
      rock.scale = 0.2;
     rock.debug= true;
      rock.velocityX = -6;
      rock.lifetime = 250;
      rockGroup.add(rock);
    }
  }