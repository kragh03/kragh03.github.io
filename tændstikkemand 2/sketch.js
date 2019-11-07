let x = 0;
let b= 50
let c= 0
function setup() {
  createCanvas(windowWidth,windowHeight,);
  noLoop();
}

function draw() {
  background(204);
  x = x + 1;
  if (x > width) {
    x = 0;
  }
  
  
b = b + 1;  
if(b>width){ 
  b=50 
}
  
  
  line(x, 100, x, height - 500);
  circle(x, 100, b);
  line(x - 1, 180, x - 60, 60)
  line(x + 1, 180, x + 60, 60)
  line(x + 1, 300, x + 60, 360)
  line(x - 1, 300, x - 60, 360)
  
  

}

function mousePressed() {
  loop();
}

function mouseReleased() {
  noLoop();
}