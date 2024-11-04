let picture;
let scale = 10;
let pictureWidth;
let pictureHeight;
let tilesX;
let tilesY;


function preload(){
  picture = loadImage("meow.png");

}

function setup() {
  pictureHeight = picture.height/1.5;
  pictureWidth = picture.width/1.5;

  createCanvas (pictureWidth, pictureHeight);

  tilesX = pictureWidth/scale;
  tilesY = pictureHeight/scale;
  tileWidth = width/tilesX;
  tileHeight = height/tilesY;
  picture.resize(tilesX, tilesY);

  textAlign (CENTER);
  textSize (10);
}

function draw () {
  background (250);

  //image(picture, 0, 0, width, height)

  for (let x = 0; x < tilesX; x++){
    for (let y = 0; y < tilesY; y++) {
      let pixel = picture.get(x,y);
      let color = brightness(pixel);

      let char = "meow";

      if (color < 80){
        char = "."
      }

      if (color < 60){
        char = "░"
      }

      if (color < 40){
        char = "▓"
      }
      if (color < 20){
        char = "-"
      }
      text(char, x * tileWidth, y * tileHeight);

      fill(color * mouseY);
      // rect(x * tileWidth, y * tileHeight, tileWidth, tileHeight);
    }
  }
}