class ComputerBase {
    constructor(x,y,width,height){
        var options = {
            isStatic:true
        };
        this.body = bodies.rectangle(x,y,width,height,options);
        this.width = width;
        this.height = height;
        this.image = loadImage("./assests/base2.png");
        World.add(world,this.body);
    }
}
display() {
    var pos=this.body.position;
    var anle=this.body.angle;
    push();
    translate(pos.x,pos.y);
    rotate(angle);
    imageMode(CENTER);
    image(this.image,0,0,this.width,this.height);

    pop();
}