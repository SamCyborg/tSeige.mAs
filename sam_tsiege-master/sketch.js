const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var engine, world;
var ground1,ground2,ground3;
var slingshot,star;


//fourth line of ground2
var box_a1,box_a2,box_a3,box_a4,box_a5,box_a6;
//third line of ground2
var box_a7,box_a8,box_a9,box_a10;
//second line of ground2
var box_a11,box_a12;
//first line of ground2
var box_a13; 

//fourth line of ground3
var box_b1,box_b2,box_b3,box_b4,box_b5,box_b6;
//third line of ground3
var box_b7,box_b8,box_b9,box_b10;
//second line of ground3
var box_b11,box_b12;
 //first line of ground3
var box_b13;
 var score1 = [];
 var score2 = [];
 var score3 = 0;

 function preload() {
    backgroundImg = loadImage("sprites/bckg.png");
}


function setup() {
   var canvas = createCanvas(1200,600);
   engine = Engine.create();
   world = engine.world;
    
    box_a1 = new Box1(450,350,40,50); 
    box_a2 = new Box1(490,350,40,50);
    box_a3 = new Box1(530,350,40,50);
    box_a4 = new Box1(570,350,40,50);
    box_a5 = new Box1(610,350,40,50);
    box_a6 = new Box1(650,350,40,50);

    box_a7 = new Box2(490,300,40,50); 
    box_a8 = new Box2(530,300,40,50);
    box_a9 = new Box2(570,300,40,50);
    box_a10 = new Box2(610,300,40,50);

    box_a11 = new Box1(530,250,40,50);
    box_a12 = new Box1(570,250,40,50);

    box_a13 = new Box2(550,200,40,50);

    box_b1 = new Box1(900,225,40,50);
    box_b2 = new Box1(940,225,40,50);
    box_b3 = new Box1(980,225,40,50);
    box_b4 = new Box1(1020,225,40,50);
    box_b5 = new Box1(1060,225,40,50);
    box_b6 = new Box1(1100,225,40,50);

    box_b7 = new Box2(940,175,40,50);
    box_b8 = new Box2(980,175,40,50);
    box_b9 = new Box2(1020,175,40,50);
    box_b10 = new Box2(1060,175,40,50);

    box_b11 = new Box1(980,125,40,50);
    box_b12 = new Box1(1020,125,40,50);

    box_b13 = new Box2(1000,75,40,50);

    ground1 = new Ground(600,550,1250,15);
    ground2 = new Ground(575,410,300,10);
    ground3 = new Ground(1025,285,300,10);

    star =new Star(100,100);
    slingshot = new SlingShot(star.body,{x:200,y:200});
}

function draw() {
  background(255,192,203);  
  //background(backgroundImg);
  score3 = score1[0] + score1[1] + score1[2] + score1[3] + score1[4] + score1[5] + score1[6] + score1[7] + score1[8] + score1[9] + score1[10] + score1[11] + score1[12] + score2[0] + score2[1] + score2[2] + score2[3] + score2[4] + score2[5] + score2[6] + score2[7] + score2[8] + score2[9] + score2[10] + score2[11] + score2[12] + score2[13];

        noStroke();
        textSize(35);
        fill("black");
        text("Score  " + score3, width-300, 50);

   //strokeWeight(3);
   Engine.update(engine);

   box_a1.display();
   box_a2.display();
   score1[0] = box_a1.score1();
   score1[1] = box_a2.score1();

   box_a3.display();
   box_a4.display();
   score1[2] = box_a3.score1();
   score1[3] = box_a4.score1();

   box_a5.display();
   box_a6.display();
   score1[4]=box_a5.score1();
   score1[5]=box_a6.score1();

   box_a7.display();
   box_a8.display();
   score1[6] = box_a7.score1();
   score1[7] = box_a8.score1();

   box_a9.display();
   box_a10.display();
   score1[8]=box_a9.score1();
   score1[9]=box_a10.score1();

   box_a11.display();
   box_a12.display();
   score1[10]=box_a11.score1();
   score1[11]=box_a12.score1();
   box_a13.display();
   score1[12]=box_a13.score1();
    
   box_b1.display();
   box_b2.display();
   score2[0]=box_b1.score2();
   score2[1]=box_b2.score2();

   box_b3.display();
   box_b4.display();
   score2[3]=box_b3.score2();
   score2[4]=box_b4.score2();

   box_b5.display();
   box_b6.display();
   score2[5]=box_b5.score2();
   score2[6]=box_b6.score2();

   box_b7.display();
   box_b8.display();
   score2[7]=box_b7.score2();
   score2[8]=box_b8.score2();

   box_b9.display();
   box_b10.display();
   score2[9]=box_b9.score2();
   score2[10]=box_b10.score2();

   box_b11.display();
   box_b12.display();
   score2[11]=box_b11.score2();
   score2[12]=box_b12.score2();
   box_b13.display();
   score2[13]=box_b13.score2();

   star.display();
   slingshot.display();

   ground1.display();
   ground2.display();
   ground3.display();

    
    
  drawSprites();
}

function mouseDragged(){
Matter.Body.setPosition(star.body, {x:mouseX, y:mouseY})
}

function mouseReleased(){
    slingshot.fly()
}

function keyPressed(){
    if(keyCode===32){
        slingshot.attach(star.body);
    }
}
