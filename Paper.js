class Paper {
    constructor(x, y) {
      var options = {
          'restitution':0.3,
          'friction':0.5,
          'density':1.5
      }
      this.body = Bodies.circle(x, y, 15, options);
      this.radius = 30;
      
      World.add(world, this.body);
    }
    display(){
      var pos =this.body.position;
      fill(255);
      ellipseMode(CENTER);
      ellipse(pos.x , pos.y , this.radius , this.radius);
      pop();
    }
  }