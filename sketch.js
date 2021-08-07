var btn_red;
var btn_green;

function red_bg() {
  var r = 255;
  var g = 0;
  var b = 0;

}

function green_bg() {
  var r = 0;
  var g = 255;
  var b = 0;

}


function setup() {
  createCanvas(400, 400);  
  btn_red = createButton("RED");
  btn_red.position(100,50);
  
  
  btn_green = createButton("GREEN");
  btn_green.position(250,50);
  
}

function draw() {
  if(mouseDown(btn_red)) {
    background(red_bg);
  }
  else if(mouseDown(btn_green)) {
    background(green_bg);
  }
}


