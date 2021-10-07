class snow{
    constructor(x,y){
        var options = {
          'density': 0.5,
          'friction':0.3,
      }
     this.body = Bodies.rectangle(x,y,50,50,options);
     this.width = 50;
     this.height = 50;
     this.image = loadImage("snow4.png");
     World.add(world, this.body);

   }
   display(){
   var pos = this.body.position;

   push();
   translate(pos.x, pos.y);
   rectMode(CENTER);
   fill(255);
   image(this.image, 0, 0, this.width, this.height);
   pop();
   }
}