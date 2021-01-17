class Ground {
    constructor(x,y){
      var options = {
      isStatic : true,
      restitution : 0,
      friction : 1
        }
        this.body = Bodies.circle(x,y,50,options);
        this.radius = 50;
        this.image =loadImage("images/Walking Frame/walking_2.png");
        World.add(world,this.body);
    }

    display(){
        var ang = this.body.angle;
        push();
        translate(this.body.position.x,this.body.position.y);
        rotate(ang);
        imageMode(CENTER);
        image(this.image,0,0,300,300);
        pop();
    }
}