function setup(){
    canvas = createCanvas(600,600);
    canvas.center();
    img = createCapture(VIDEO);
    img.hide();
}

function draw() {
    fill("red");
    circle(100, 100, 100);
    circle(500, 100, 100);
    circle(100, 500, 100);
    circle(500, 500, 100);

    fill("black")
    rect(100, 90, 400, 20);
    rect(100, 490, 400, 20);
    rect(100, 90, 20, 400);
    rect(490, 90, 20, 420);
}