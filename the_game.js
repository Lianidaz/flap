var bird;
var walls = [];
var score = 0;
var speed = 10;
var acc = 0;
var gameover = false;
function setup() {
  createCanvas(600,400);
  bird = new Bird();
  walls.push(new Wall());
}

function draw() {
  background(21,52,12);
  bird.update();
  bird.show();
  if ((frameCount % (120-acc*5)) == 0){
    walls.push(new Wall());
  }
  for (var i = 0 ; i < walls.length; i++) {
    if (walls[i].hit()){
      if (gameover) {
        noLoop();
      }
      walls[i].col = color(232,20,12);
      gameover = true;
    }
    walls[i].show();
    walls[i].update();
    if (walls[i].hit()){
      walls[i].col = color(232,20,12);
    }
    if ( walls[i].x < -20 ){
      walls.splice(i,1);
      score++;
      if (score % 10 == 0){
        if ( acc <= 14) {
          acc += 2;
          speed = 10 + acc;
        }
      }
    }
  }
  bird.score();
}

function mousePressed(){
  bird.acc=-(0.3+acc*0.02);
}

function mouseReleased(){
  bird.acc = (0.3+acc*0.02);
}
