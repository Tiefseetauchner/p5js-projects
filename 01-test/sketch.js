function setup() {
    createCanvas(800, 600);
    background(0);
    ellipseMode(CORNER);
}

function draw() {
    let rx = random(10, 100);
    let ry = random(10, 100);
    let x = random(0, width - rx);
    let y = random(0, height - ry);

    ellipse(x, y, rx, ry);
}