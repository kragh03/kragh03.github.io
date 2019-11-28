
let C = 3e8;
let R = 1.09e7;
let h = 6.63e-34;
let n;



function setup() {
  createCanvas(400, 400);
  console.log("START");
  n = 1;

}

function draw() {
  background(220);
  
  

  let E = -h * C * R * 1 / (n * n);
  let Ev = E/1.602e-19;
  
  
  console.log("n" + n + " = " + E);
    n++;
  if (n >= 11) {
    
    
    console.log("FRI");
    noLoop();
  }

}


