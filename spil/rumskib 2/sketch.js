let song;
let skyd
let ship;
let asteroids = [];
let lasers = [];

function setup() {
  createCanvas(windowWidth, windowHeight);
  song = loadSound("sound/skrig.mp3", loaded);
  skyd = loadSound("sound/bang1.mp3");
  ship = new Ship();
  for (let i = 0; i < 5; i++) {
    asteroids.push(new Asteroid());
  }
}
function loaded() {
  song.play();
}

function draw() {
  background(0);


  for (let i = 0; i < asteroids.length; i++) {
    if (ship.hits(asteroids[i])) {
      let rød = background(255, 0, 0);
      rød
      let words = ['MIN YNGLINGS FARVE ER RØD'];
      let word = random(words); // select random word
      textSize(32)
      text(word, 500, 500); // draw the word

      if (!song.isPlaying()) {
      song.play();
      }
      //console.log('ups');
    }
    asteroids[i].render();
    asteroids[i].update();
    asteroids[i].edges();
  }

  for (let i = lasers.length - 1; i >= 0; i--) {
    lasers[i].render();
    lasers[i].update();
    for (let j = asteroids.length - 1; j >= 0; j--) {
      if (lasers[i].hits(asteroids[j])) {
        if (asteroids[j].r > 20) {
          let newAsteroids = asteroids[j].breakup();
          asteroids = asteroids.concat(newAsteroids);
        }
        asteroids.splice(j, 1);
        lasers.splice(i, 1);
        break;
      }
    }


  }



  ship.render();
  ship.turn();
  ship.update();
  ship.edges();
}
function keyReleased() {
  ship.setRotation(0);
  ship.boosting(false);
}



// drejning af skip
function keyPressed() {
 
  if (key == ' ') {
    skyd.play();

    lasers.push(new Laser(ship.pos, ship.heading));
  } else if (keyCode == RIGHT_ARROW) {
    ship.setRotation(0.1);
  } else if (keyCode == LEFT_ARROW) {
    ship.setRotation(-0.1);
  } else if (keyCode == UP_ARROW) {
    ship.boosting(true);
  }

}

