var Engine = Matter.Engine,
  World = Matter.World,
  Events = Matter.Events,
  Bodies = Matter.Bodies;
 

var divisions = [];
var plinkos = [];

var particles;

var turn = 0;
var score = 0;
var count = 0;

var gameState = "PLAY";


var divisionHeight=300;
var score =0;


function setup() {
      createCanvas(800, 800);

  engine = Engine.create();
  world = engine.world;


  ground = new Ground(width/2,height,width,20);

  for (var k = 0; k <=width; k = k + 80) {
    divisions.push(new Divisions(k, height-divisionHeight/3.5, 10, divisionHeight));
  }


   for (var j = 30; j <=width; j=j+50) 
   {
   
      plinkos.push(new Plinko(j,75));
   }

   for (var j = 50; j <=width-10; j=j+50) 
   {
   
      plinkos.push(new Plinko(j,160));
   }

    for (var j = 30; j <=width; j=j+50) 
   {
   
      plinkos.push(new Plinko(j,245));
   }

    for (var j = 50; j <=width-10; j=j+50) 
   {
   
      plinkos.push(new Plinko(j,330));
   }

   

   
}
 


function draw() {
  background("black");

  Engine.update(engine);
  ground.display();

  if(gameState==="PLAY")
  {
  
    for (var i = 0; i < plinkos.length; i++) {
      
      plinkos[i].display();
      
    }

    for (var k = 0; k < divisions.length; k++) {
      
      divisions[k].display();
    }

    textSize(20)
    text("Score : "+score,20,30);

    textSize(20)
    text("Chances : "+turn,1200,30);

    textSize(20);
    text("Remember you have only 5 chances to play. All the best !",180,30);
     
      if(particles!==undefined)
     {
        particles.display();
        if(particles.body.position.y>600)
        {
          if(particles.body.position.x<520)
          {
            score=score+500;
            particles=undefined;
          } 
          else if(particles.body.position.x>520 && particles.body.position.x<960)
          {
            score=score+50;
            particles=undefined;
          }
           else if(particles.body.position.x>960 && particles.body.position.x<1330)
          {
            score=score+200;
            particles=undefined;
          }
          
         
        }
      }

    if (turn===5 ){
      gameState="END"
    }
  } 
   if (gameState==="END")
  {

    fill("white")
    textSize(20);
    text("Nice try! If you want to have another chance press SPACE.",200,200);

  }
    if(keyIsDown(32))
    {
      gameState="PLAY";
      turn=0;
      score=0;
    }
  

  textSize(30);
  if (gameState==="PLAY"){
    for(var a=15;a<=455;a+=80){
      text("500",a,420);
    }
    for(var a=495;a<=895;a+=80){
      text("50",a,420);
    }
    for(var a=975;a<=1335;a+=80){
      text("200",a,420);
    }
  }
 
}
function mousePressed(){
  if(turn<=5)
  {
    turn++;
    particles =new Particle(mouseX,30,10);
  }
  



}

  
   