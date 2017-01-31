function Wall(){
  this.top = random(25,height*2/3);
  this.gap = random(100,height-50);
  this.bot = this.top + this.gap;
  this.col = color(232)
  if (this.bot>height-25){
    this.bot=height-25;
  }
  this.x = width+20;

  this.show = function(){
    fill(this.col);
    rect(this.x,0,20,this.top);
    rect(this.x,this.bot,20,height);
  }

  this.update = function(){
    this.x -= speed*0.2;
  }

  this.hit = function(){
    if (this.x <= bird.x+bird.fat && this.x >= bird.x-bird.fat/2) {
      if (this.top >= bird.y-bird.fat/3 || this.bot <= bird.y+bird.fat/3) {
        return true;
      }
    }
  }
}
