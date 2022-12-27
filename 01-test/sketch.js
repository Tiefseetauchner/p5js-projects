function setup() {
    createCanvas(800, 600);
    background(0);
    ellipseMode(CORNER);
}

function draw() {
    noStroke();
    fill(
        random(0, 255), 
        random(0, 255), 
        random(0, 255),
        random(0, 255))
    
    let rx = random(10, 100);
    let ry = random(10, 100);
    let x = random(0, width - rx);
    let y = random(0, height - ry);
    switch (floor(random(0, 2))) {
        case 0:
            ellipse(x, y, rx, ry);
            break;
        case 1:
            rect(x, y, rx, ry);
            break;
    }
}