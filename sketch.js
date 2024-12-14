let scale = 10;
let pictureWidth;
let pictureHeight;
let tilesX;
let tilesY;

function preload() {
  picture = loadImage("meow.png");
}

function setup() {
  pictureHeight = picture.height;
  pictureWidth = picture.width;

  createCanvas(pictureWidth, pictureHeight);

  tilesX = pictureWidth / scale;
  tilesY = pictureHeight / scale;
  tileWidth = width / tilesX;
  tileHeight = height / tilesY;
  picture.resize(tilesX, tilesY);

  textAlign(CENTER);
  textSize(10);
}

function draw() {
  background(250);

  for (let x = 0; x < tilesX; x++) {
    for (let y = 0; y < tilesY; y++) {
      let pixel = picture.get(x, y);
      let color = brightness(pixel);

      let tileCenterX = x * tileWidth + tileWidth / 2;
      let tileCenterY = y * tileHeight + tileHeight / 2;

      let distance = dist(mouseX, mouseY, tileCenterX, tileCenterY);

      let maxDistance = dist(0, 0, width / 2, height / 2);
      let alpha = map(distance, 0, maxDistance, 255, 0);
      alpha = constrain(alpha, 0, 255);

      let char = "･ﾟ";

      if (color < 80) {
        char = "✧✧";
      }
      if (color < 60) {
        char = "*";
      }
      if (color < 40) {
        char = "░";
      }
      if (color < 20) {
        char = "▓";
      }

      fill(0, alpha); // Adjust transparency based on distance
      noStroke();
      text(char, tileCenterX, tileCenterY);
    }
  }
}

