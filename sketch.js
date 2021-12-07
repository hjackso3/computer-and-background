function setup() {
  createCanvas(400, 400);
}
var tire1 = 155;
var tire2 = 177;
var car = 146;
var patientbody = 244;
var patientappearance = 291;
var eye1 = 276;
var eye2 = 306;
var car2 = 200;
var tire3 = 211;
var tire4 = 250;



draw = function() {
    //hospital wall 
    background(197, 178, 212);
    fill(179, 172, 165);
    
    //desk
    fill(235, 147, 97);
    rect(-1, 339, 405, 232);
    //computer
    fill(232, 237, 255);
    rect(0, 82, 398, 223);
    //window
    fill(77, 219, 247);
    rect(0, -46, 399, 100);
    //grass in window
    fill(6, 179, 69);
    rect(0, 31, 399, 23); 
    //car in window 
    fill(196, 0, 255);
    rect(car, -75, 39, 93);
    //tire 1
    fill(74, 44, 0);
    ellipse(tire1, 24, 10, 10);
    //tire 2
    fill(74, 44, 0);
    ellipse(tire2, 24, 10, 10);
    //sun
    fill(234, 255, 0);
    ellipse(45, 0, 40, 29);
    //window divider thingy
    fill(0, 0, 0);
    line(200, 54, 200, -1);
    //bottom of computer (pc), otherwise its neck
    fill(79, 79, 79);
    rect(161, 305, 72, 76);
    //computer stand thingy
    fill(51, 40, 40);
    rect(144, 382, 106, 20);
    stroke(0, 0, 0);
    //patient body
    fill(155, 84, 232);
    rect(patientbody, 305, 95, -100);
    //patient appearance
    fill(163, 87, 5);
    ellipse(patientappearance, 164, 100, 100);
    //patient eye
    fill(255, 255, 255);
    ellipse(eye1, 157, 8, 12);
    //patient eye 2
    fill(255, 255, 255);
    ellipse(eye2, 157, 8, 12);
    //car2
    fill(255, 0, 0);
    rect(car2, -39, 60, 60);
    //tire3
    fill(0, 0, 0);
    ellipse(tire3, 26, 10, 10);
    //tire4
    fill(0, 0, 0);
    ellipse(tire4, 26, 10, 10);
    

    
    
    
    
    patientbody--;
    patientappearance--;
    eye1--;
    eye2--;
    
    
    tire1 ++;
    tire2 ++;
    car ++;
    tire3--;
    tire4--;
    car2--;


};