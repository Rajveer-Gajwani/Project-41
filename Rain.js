class Rain {
    constructor(x,y){
        var  options = {
            friction : 0.1
        }
        this.body = Bodies.circle(x,y,10,options);
        World.add(world,this.body);
    }
    display(){
        if(this.body.position.y>height){
            Matter.Body.setPosition(this.body,{x:random(0,1200),y : random(0,400)})
        }
        var pos = this.body.position;
        push();
        fill("blue");
        ellipse(pos.x,pos.y,10);
        pop();
    }


}