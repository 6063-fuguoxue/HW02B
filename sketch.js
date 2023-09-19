let width = 400;
let height = 520;

function setup() {
    createCanvas(windowWidth, windowHeight); // w, h
}

function draw() {
    stroke(0);
    // draw a square
    line(0,0,width,0);
    line(0,0,0,height);
    line(width,0,width,height);
    line(0,height,width,height);

    // a circle
    fill(255);
    stroke(127,70,51);
    strokeWeight(8);
    ellipse(265, 185, 40);

    // draw the bottom square
    strokeWeight(0);
    fill(0);
    rect(105, 305, 190);
    
    // two quads on the right hand side
    fill(233,186,46);
    rect(310, 160, 70, 110);
    fill(127,70,51);
    quad(290,160,335,160,333,120,290,120);

    // blue quad
    strokeWeight(0);
    fill(54,94,181);
    rotate(-PI/5);
    translate(35, 25);
    quad(-80,220,87,222,55,80,-50,80);
    fill(0);
    rect(-75,55,100,25);
}
