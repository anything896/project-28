
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
var mango1,mango2,mango3,mango4;
var tree,boy,ground;
function preload()
{
	
}
//x,y,width,hight
function setup() {
	createCanvas(800, 700);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here
	tree=createSprite(700,650,200,20);
	boy=createSprite(100,650,150,15);
	ground=createSprite(350,625,15,700);
   mango1=new Mango(700,425,15,15);
   mango2=new Mango(750,425,15,15);
   mango3=new Mango(650,425,15,1);
   mango4=new Mango(700,455,15,1);
   Stone=new Hand(100,725,15,15);
	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(0);
  mango1.display();
  mango2.display();
  mango3.display();
  mango4.display();
  boy.display();
  tree.display();
  stone.display();
  ground.display();
  detectcollision(stone,mango1);
  detectcollision(stone,mango2);
  detectcollision(stone,mango3);
  detectcollision(stone,mango4);
  drawSprites();
 
}
function keyPressed(){
 if keycode === "space"(){
   Matter.body.setposition{stone x:100,y:725}
 }
}



