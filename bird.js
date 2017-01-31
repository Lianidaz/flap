function Bird() {
  this.y = height/2;
  this.x = 30;

  this.fat = 25;

  this.acc = 0.3;
  this.vel = 0;

  this.wing = false;

  this.show = function(){
    fill(232);
    triangle(this.x+this.fat*3/4, this.y-this.fat/6 , this.x+this.fat*1.5,this.y,this.x+this.fat*3/4, this.y+this.fat/6);
    ellipse(this.x,this.y,this.fat*2,this.fat);
    strokeWeight(3);
    point(this.x+this.fat*3/4,this.y-this.fat/5)
    strokeWeight(1);
    if (!this.wing){
      triangle(this.x-this.fat/2,this.y,this.x+this.fat/2,this.y,this.x,this.y-this.fat);
    } else {
      triangle(this.x-this.fat/2,this.y,this.x+this.fat/2,this.y,this.x,this.y+this.fat);
    }
  }

  this.update = function(){
    this.vel += this.acc;
    this.y += this.vel;
    if (this.y>=height-8) {
      this.y = height-8;
      this.vel = 0;
    }
    if (this.y<=8) {
      this.y = 8;
      this.acc = 0.3;
    }
  }

  this.score = function(){
    fill(223,23,20);
    textSize(25);
    text(score,width/2,25,width/2+100,50);
  }

}
