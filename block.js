class Block{
    constructor(x, y) {
        var options = {
            'restitution':0.8,
            'friction':1.0,
            'density':1.0
        }
        this.body = Bodies.rectangle(x, y, 40, 50, options);
        this.width = 40;
        this.height = 50;
        this.visibility = 255;
        this.image = loadImage("block.jpg");
        World.add(world, this.body);
      }

      display(){
        if(this.body.speed <= 3){
        var angle = this.body.angle;
        push();
        translate(this.body.position.x, this.body.position.y);
        fill("cyan");
        rotate(angle);
        imageMode(CENTER);
        image(this.image, 0, 0, this.width, this.height);
        pop();
        }
        else{
          push();
          this.visibility = this.visibility - 15;
         World.remove(world,this.body);
         tint(255,this.visibility);
         image(this.image , this.body.position.x , this.body.position.y , 50 , 50);
         pop();
        }
      }
}
