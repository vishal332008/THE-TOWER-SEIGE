const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var engine, world;

function setup(){
  createCanvas(1000,600);

  engine = Engine.create();
  world = engine.world;

  ground1 = new Ground(500,height,1000,20);
  ground2 = new Ground(550,height-150,250,20);
  ground3 = new Ground(800,height-300,250,20);

  block1 = new Block(550,height-180);
  block2 = new Block(550-40,height-180);
  block3 = new Block(550+40,height-180);
  block4 = new Block(550-80,height-180);
  block5 = new Block(550+80,height-180);
  block6 = new Block(550,height-230);
  block7 = new Block(550-40,height-230);
  block8 = new Block(550+40,height-230);
  block9 = new Block(550,height-280);

  block10 = new Block(800,height-335);
  block11 = new Block(800-40,height-335);
  block12 = new Block(800+40,height-335);
  block13 = new Block(800-80,height-335);
  block14 = new Block(800+80,height-335);
  block15 = new Block(800,height-385);
  block16 = new Block(800-40,height-385);
  block17 = new Block(800+40,height-385);
  block18 = new Block(800,height-435);

  polygon1 = new Polygon(100 , 300);

  slingshot1 = new SlingShot(polygon1.body,{x:200, y:300});
  
}

function draw(){
    background("black");

    Engine.update(engine);

    console.log(mouseX , mouseY);

    ground1.display();
    ground2.display();
    ground3.display();

    block1.display();
    block2.display();
    block3.display();
    block4.display();
    block5.display();
    block6.display();
    block7.display();
    block8.display();
    block9.display();

    block10.display();
    block11.display();
    block12.display();
    block13.display();
    block14.display();
    block15.display();
    block16.display();
    block17.display();
    block18.display();

    polygon1.display();

    slingshot1.display();
}

function mouseDragged(){
  Matter.Body.setPosition(polygon1.body, {x: mouseX , y: mouseY});
}


function mouseReleased(){
  slingshot1.fly();
}

function keyPressed(){
  if(keyPressed("space")){
      slingshot1.attach(polygon1.body);
  }
}

