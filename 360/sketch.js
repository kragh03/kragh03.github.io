let img;

function preload() {
	const imgurl ='bilar.PNG';
  img = loadImage(imgurl);
}

function setup() {
  imageMode(CENTER);
  createCanvas(300, 300);


}

function draw() {
  background(300);//260 vis du vil kunne se canvas
    translate(150, 150);
    frameRate(100);
    rotate(radians(frameCount));
  image(img, 0, 0, 200, 175);

}
