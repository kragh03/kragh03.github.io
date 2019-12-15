var ship;


function setup() {
  createCanvas(windowWidth, windowHeight);
  ship = new Ship();
}

function draw() {
  background(0);
  ship.render();
  ship.turn();
  ship.update();
  ship.edges();
}
function keyReleased(){ 
ship.setRotation(0);
ship.boosting(false);
}


// drejning af skip
function keyPressed(){
if(keyCode == RIGHT_ARROW) {
ship.setRotation(0.1);
} else if(keyCode == LEFT_ARROW){
ship.setRotation(-0.1);
} else if (keyCode == UP_ARROW){
ship.boosting(true);
}
  
}



function Ship(){
 this.pos = createVector(width/2, height/2);
  //r er størrelse på skibet 
  this.r = 20;
  this.heading= 0;
  this.rotation = 0;
  this.vel =createVector(0,0);
  this.isBoosting = false;
  
  
  this.boosting = function(b) {
  this.isBoosting = b;
  }
  
  this.update = function() {
    if(this.isBoosting){
    this.boost();
    }
    this.pos.add(this.vel);
    //stopper skibet igen så den ikke forsætter
  this.vel.mult(0.99);  
  }
  // kald den måske fartstribe
  this.boost = function(){
  var force = p5.Vector.fromAngle(this.heading); 
force.mult(0.1);
this.vel.add(force);
  }
  
  
  this.render = function(){ 
      translate(this.pos.x, this.pos.y);
    rotate(this.heading + PI / 2);
   //tømme skibet og gøre stregen hvid
    noFill();
    stroke(255);
      triangle(-this.r, this.r, this.r, this.r, 0, -this.r);
  }
  
  this.edges =function(){
  if (this.pos.x > width + this.r){
  this.pos.x = -this.r;
  } else if (this.pos.x< -this.r){
  this.pos.x =width + this.r;
  }
      if (this.pos.y > height + this.r){
  this.pos.y = -this.r;
  } else if (this.pos.y< -this.r){
  this.pos.y =height + this.r;
  }
  }
    
    
  this.setRotation = function(a) {
  this.rotation = a;
  }
  
  this.turn = function(angle){
  this.heading += this.rotation;
  }
  
}



