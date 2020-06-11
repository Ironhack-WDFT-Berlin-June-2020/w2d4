class Player {
  constructor() {
    this.x = 500;
    this.y = 500;
  }

  moveUp() {
    this.y -= 10;
  }
  moveDown() {
    this.y += 10;
  }
  moveLeft() {
    this.x -= 10;
  }
  moveRight() {
    this.x += 10;
  }
}

class Game {
  constructor() {
    this.x = 0;
    this.y = 0;
    this.radius = 20;
    this.radius2 = 30;
  }
  pleaseLoadGameImages() {
    // we load gustavo before using its variables in the doSomething function
    this.gustavo = new Player();

    // we use loadImage to load the images BEFORE actually using it

    this.gustavoImg = loadImage("gustavo.png");
  }
  changeCircle() {
    this.radius += 10;
  }
  reset() {
    this.radius = 20;
  }
  doSomething() {
    clear();
    // we use frameRate to lower the speed of each loop in the draw function
    frameRate(30);
    /*  this.x += 10;
    this.y += 5; */
    /*  console.log("omg i am actualy drawing");
    console.log("this is i:", this.x); */
    //rect(xcoordinate,ycoordinate,with,height) this function comes from P5!
    rect(this.x, this.y, 50, 50);
    image(this.gustavoImg, this.gustavo.x, this.gustavo.y, 100, 100);

    //keyIsDown(number) returns a boolean saying if we are actually pressing that key
    if (keyIsDown(87)) {
      console.log("we are pressing w");
      this.gustavo.moveUp();
    }
    if (keyIsDown(83)) {
      console.log("we are pressing s");
      this.gustavo.moveDown();
    }
    if (keyIsDown(65)) {
      console.log("we are pressing a");
      this.gustavo.moveLeft();
    }
    if (keyIsDown(68)) {
      console.log("we are pressing d");
      this.gustavo.moveRight();
    }
    //mouseIsPressed is a variable that is either tru or false based on if you are clicking something
    console.log(mouseIsPressed);
    if (mouseIsPressed) {
      this.radius2 += 1;
    }

    //the color() function gives us a color variable we can use in the fill() function
    let beautifulColour = color(200, 200, 200);

    // the fill function will fill the color of the next elements in the draw function until a new fill is called
    fill(beautifulColour);

    // circle(x coordinate, y coordinate, radius)
    //mouseX and mouseY are p5 variables that gives the coordinates of the mouse in the canvas
    circle(mouseX, mouseY, this.radius);
    fill("blue");
    //line(startingX coordinate, starting y Coordinate, finishg X coordinate, finishings y coordinate)
    stroke("orange");
    line(100, 100, 600, 600);
    //push() and pop( )  create a context between the elements that are between this 2 functions
    push();
    fill("purple");
    rect(200, 200, 200, 200);
    rect(500, 100, 200, 200);

    pop();
    circle(30, 30, this.radius2);
  }
  moveUp() {
    this.y -= 10;
  }
  moveDown() {
    this.y += 10;
  }
  moveLeft() {
    this.x -= 10;
  }
  moveRight() {
    this.x += 10;
  }
}

let game = new Game();
//Preload for loading assets and it run before setup and draw
//preload will be use to upload music and sounds
function preload() {
  game.pleaseLoadGameImages();
  console.log("This is preloading before the setup");
}
// which it will for setting up the environment
//setuo this is one is basically to set up the canvas
function setup() {
  console.log("This is setting up before the drawing");
  // create canvas creates a canvas with the asked width and height
  createCanvas(600, 600);
}
// which here all of our game logic will be. Draw is a loop
function draw() {
  //this function is being called all the time in a loop
  game.doSomething();
}

function keyPressed() {
  // console.log("I am being pressed!!!!!!!!!!!");
  //This is a p5 variable that gives you a number!

  console.log(keyCode);
  if (keyCode == 38) {
    //38 is the up arrow
    console.log("Up arrow");
    game.moveUp();
  }
  if (keyCode == 40) {
    //40 for down arrow
    console.log("down arrow");
    game.moveDown();
  }
  if (keyCode == 37) {
    //37 for left arrow
    console.log("left arrow");
    game.moveLeft();
  }
  if (keyCode == 39) {
    //39 for right arrow
    console.log("right arrow");
    game.moveRight();
  }
  if (keyCode == 67) {
    console.log("clickcing the c letter");
    game.reset();
  }
}
//this is a p5 function that does whatever you want everytime you click with your mouse
function mousePressed() {
  console.log("Yay the mouse is being pressed");
  game.changeCircle();
}
