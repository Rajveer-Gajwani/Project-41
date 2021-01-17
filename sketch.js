const World = Matter.World;
const Engine = Matter.Engine;
const Bodies = Matter.Bodies;

var maxDrops = 100;
var Drops = [];

var ert;
var foot,foot1,foot2,foot3;

var frameer,r;

function preload(){
     ert = loadImage("images/Walking Frame/walking_2.png");
     foot = loadImage("images/thunderbolt/1.png");
}

function setup(){
    createCanvas(1200,550);
    engine = Engine.create();
    world = engine.world;
    
for(var i=0; i<maxDrops;i++){
    Drops.push(new Rain(random(0,1200),random(0,400)));
}
  
ground = new Ground(600,425);

 var erte = createSprite(600,425);
erte.addImage(ert,"images/Walking Frame/walking_2.png");
erte.scale = 0.37;
}

function draw(){
    Engine.update(engine);

    background("black");

    for(var i=0; i<maxDrops;i++){
        Drops[i].display();
    }

    if(frameCount%100===0){
        thunderr = new thunder(random(0,1200),100);
        thunderr.display();
    }   

    
 ground.display();
   drawSprites();
}   
