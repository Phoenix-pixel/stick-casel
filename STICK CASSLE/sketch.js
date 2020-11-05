function setup() {
  createCanvas(900,400);
  createSprite(795,321,280,160)
  createSprite(428,322,150,160)
  
  createSprite(600,600,200,700)

  createSprite(302,302,50,600)


}

function draw() {
 background(255,235,255);  
 triangle (501,251,700,251,595,100);
 triangle (691,243,800,244,735,162);
 triangle (354,244,503,250,431,162);
 triangle (799,243,899,242,840,159);



 console.log(mouseX,mouseY)
  drawSprites();
}