var fireImg , fire , rocketImg , rocket , spaceImg , space , starImg , star , stoneImg , stone 

function preload(){
    fireImg = loadImage("fireImg.jpg");
    rocketImg = loadImage("rocketImg.jpg");
    spaceImg = loadImage("spaceImg.jpg");
    starImg = loadImage("starImg.jpg");
    stoneImg = loadImage("stoneImg.jpg");
  }
  

function setup() {
    createCanvas(600,600);

    space = createSprite(10,300,10,10);
    space.addImage(spaceImg)
space.scale=0.5
    star = createSprite(190,68,10,10);
    star.addImage(starImg)
star.scale=0.2
    stone = createSprite(380,92,10,10);
    stone.addImage(stoneImg)
stone.scale=0.1
rocket = createSprite(250,450,10,10);
rocket.addImage(rocketImg)
rocket.scale=0.3
fire = createSprite(120,250,10,10);
    fire.addImage(fireImg)
fire.scale=0.2
leftBoundary=createSprite(0,0,100,800);
 leftBoundary.visible = false;

rightBoundary=createSprite(410,0,100,800);
rightBoundary.visible = false;

}

function draw() {
    background(0);
rocket.x=mouseX
space.velocityY=1
star.y=mouseY
fire.y=mouseY


edges= createEdgeSprites();
  rocket.collide(edges[3])
  rocket.collide(leftBoundary);
  rocket.collide(rightBoundary);

space.setLifetime=100;



drawSprites();
}