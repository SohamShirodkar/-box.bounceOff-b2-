var canvas;
var music;
var b1, b2, b3, b4
var box
function preload(){
    music = loadSound("music.mp3");
}


function setup(){
    canvas = createCanvas(800,800);
b1 = createSprite(10,580, 200, 20); 
b1.shapeColor = "green"
b2 =  createSprite(260, 580, 200, 20);
b2.shapeColor = "red"
b3 =  createSprite(500, 580, 200, 20);
b3.shapeColor = rgb(0, 0, 139)
b4 =  createSprite(760, 580, 200, 20);
b4.shapeColor = "orange"
box = createSprite(400, 300, 30, 30);
box.velocityX = 4
box.velocityY = 5
}



    //create box sprite and give velocity



function draw() {
    background(rgb(169,169,169));
    edges = createEdgeSprites();
    box.bounceOff(edges)
    if(b1.isTouching(box)&& box.bounceOff(b1)){
        box.shapeColor = 'green'}
    if(b2.isTouching(box)&& box.bounceOff(b2)){
        box.shapeColor= 'red'}
    if(b3.isTouching(box)&& box.bounceOff(b3)){
        box.shapeColor= 'blue'}
    if(b4.isTouching(box)&& box.bounceOff(b4)){
        box.shapeColor= 'orange'}
    drawSprites();

    }




    //add condition to check if box touching surface and make it box

