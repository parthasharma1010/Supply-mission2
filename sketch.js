var helicopterIMG, helicopterSprite, packageSprite,packageIMG;
var packageBody,ground, rect1,rect2,rect3;
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

function preload()
{
	helicopterIMG=loadImage("helicopter.png")
	packageIMG=loadImage("package.png")
}

function setup() {
	createCanvas(800, 700);
	rectMode(CENTER);
	

	packageSprite=createSprite(width/2, 80, 10,10);
	packageSprite.addImage(packageIMG)
	packageSprite.scale=0.2

	helicopterSprite=createSprite(width/2, 200, 10,10);
	helicopterSprite.addImage(helicopterIMG)
	helicopterSprite.scale=0.6

	groundSprite=createSprite(width/2, height-35, width,10);
	groundSprite.shapeColor=color(255)

	rect1Sprite=createSprite(395, 655, 200, 10);
	rect1Sprite.shapeColor=("red");
	rect2Sprite=createSprite(290, 610, 10, 100);
	rect2Sprite.shapeColor=("red");
	rect3Sprite=createSprite(490, 610, 10, 100);
	rect3Sprite.shapeColor=("red");
	engine = Engine.create();
	world = engine.world;

	packageBody = Bodies.circle(width/2 , 200 , 5 , {restitution:0.4, isStatic:true});
	World.add(world, packageBody);
	
Engine.update
	//Create a Ground
	ground = Bodies.rectangle(width/2, 650, width, 10 , {isStatic:true} );
 	World.add(world, ground);
	rect1 = Bodies.rectangle(395, 655, 200, 10, {isStatic:true});
	World.add(world, rect1);
	Engine.update(engine);
	// rect2 = Bodies.rectangle(290, 610, 10, 100, {isStatic:true});
	// World.add(world, rect2);
	// rect3 = Bodies.rectangle(490, 610, 10, 100, {isStatic:true});
	// World.add(world, rect3);
	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(0);
  packageSprite.x = packageBody.position.x 
  packageSprite.y = packageBody.position.y 
  Matter.Body.setStatic(rect1, {isStatic:true});

  drawSprites();
 
}

function keyPressed() {
 if (keyCode === DOWN_ARROW) {  
	Matter.Body.setStatic(packageBody, false);
	Matter.Body.setStatic(packageBody, isStatic);
	
// packageBody = {
// 	restitution : 1.0
// }
// 	packageSprite.x= packageBody.position.x 
// 	packageSprite.y= packageBody.position.y 
// 	packageBody.scale=0.5;*/
	

    // Look at the hints in the document and understand how to make the package body fall only on
    
  }
}



