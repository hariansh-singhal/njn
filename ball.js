class Ball{
    constructor(x,y,radius){
        var options={
            restitution:0.5,
            friction:0.8,
            density:5
        }
        this.image=loadImage("paper2.png");
        this.body=Matter.Bodies.circle(x,y,radius-20,options);
        this.radius=radius;
        World.add(world,this.body);

    }
    display(){
        var pos=this.body.position;
        var angle=this.body.angle;        
        push()
        translate(pos.x,pos.y);
        rotate(angle);
        imageMode(CENTER);
        image(this.image,0,0,this.radius,this.radius);
        pop();
    }

}