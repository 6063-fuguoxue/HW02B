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
    strokeWeight(6);
    ellipse(240, 180, 40);

    // draw the bottom square
    strokeWeight(0);
    fill(0);
    quad(120, 320, 280, 320, 280, 480, 120, 480);
    
    // two quads on the right hand side
    fill(233,186,46);
    rect(290, 160, 85, 130);
    fill(127,70,51);
    quad(270,160,315,160,313,120,270,120);

    // blue quad
    fill(54,94,181);
    rotate(-PI/5);
    translate(20, 10);
    quad(-60,220,62,222,40,110,-40,110);
    fill(0);
    rect(-65,90,80,20);
}
