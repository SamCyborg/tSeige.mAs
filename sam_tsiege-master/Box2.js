class Box2 extends BaseClass {
  constructor(x, y, width, height){
    super(x,y,width,height);
    this.image = loadImage("sprites/cupcake2.png");
    this.Visibility=255;
  }

 display(){
  if(this.body.speed<2)
  super.display();
  else{
    World.remove(world,this.body)
    push();
    this.Visibility=this.Visibility-5;
    tint(255,this.Visibility);
    image(this.image,this.body.position.x,this.body.position.y,50,50);
    pop();

  }
}

score2()
{
  var x;
  if(this.Visibility<0 && this.Visibility>-1005)
  {
    x++;
  }
  return x;
}
};