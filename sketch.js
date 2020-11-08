var MonkeyGroup, Monkey_01, Monkey_02, Monkey_03, Monkey_04, Monkey_05, Monkey_06, Monkey_07, Monkey_08, Monkey_09, Monkey_10;
var ground, invisibleGround, groundImage;
var BananaGroup, BananaImage;
var StoneGroup, StoneImage ;
var background, backgroundImage;
var score = 0;

function preload()
{
  
  backgroundImage = loadImage("jungle.jpg")
  player_running = 
    loadAnimation ("Monkey_01.png", "Monkey_02,png", "Monkey_03.png", "Monkey_04.png", "Monkey_05.png", "Monkey_06.png", "Monkey_07.png", "Monkey_08.png", "Monkey_09.png", "Monkey_10.png");
  
  BananaImage = loadImage ("Banana.png");
  StoneImage = loadImage ("stone.png");
  groundImage = loadImage ("ground.jpg");
}

function setup() 
{
  
  createCanvas(600,300);
  monkey = createSprite (50,180,20,50)
  monkey.addAnimation (MonkeyGroup)
  monkey.scale = 0.5;
  
  ground = createSprite(200,180,400,20);
  ground.addImage("ground",groundImage);
  ground.x = ground.width /2;
  ground.velocityX = -2;
  
 invisibleGround = createSprite(200,190,400,10);
 invisibleGround.visible = false;
  
 StoneGroup = new Group ();
 BananaGroup = new Group ();
  
}

function draw()
{
  background(backgroundImage);
 score = score + Math.round (getFrameRate()/60);
 stroke ("white");
 textSize (20);
 fill ("white")
 text ("Score: " + score, 500, 50);

  switch (score)
  {
    case 10: player.scale = 0.12;
      break;
        case 20: player.scale = 0.14;
          break;
          case 30: player.scale = 0.16;
            break;
              case 40: player.scale = 0.18;
                break;
                default: break;
  }
  if (keyDown ("space"))
  {
    monkey.velocityY = -10;
  }
  
  monkey.velocityY = monkey.velocityY + 0.8
  
  if (ground.x < 0 )
  {
    ground.x = ground.width/2;
  }
  
  spawnBanana();
  spawnStone();
  
  monkey.collide (invisibleGround);
  
  drawSprites();
}

function spawnBanana()
{
  
  if (frameCount % 60 === 0) {
    var Banana = createSprite(600,120,40,10);
    Banana.y = random(80,120);
    Banana.addImage (CloudImage);
    Banana.scale = 0.5;
    Banana.velocityX = -3;
    
    Banana.lifetime = 200;
    
    Banana.depth = monkey.depth;
    monkey.depth = monkey.depth + 1;
    
    BananaGroup.add (Banana);
  }
  
}

function spawnStones() 
{
  if(frameCount % 60 === 0) 
  {
    var Stone = createSprite(600,165,10,40);
    Stone.velocityX = -6;
    
    var rand = Math.round (random (1,6));  
    
    Stone.scale = 0.5;
    Stone.lifetime = 300;
    StoneGroup.add (stone);
    
  }
}