function setup() {
    createCanvas(800, 600);
    background(0);
}

function draw() {
    background(0);
    let innerRadius = map(sin(millis() / 300), -1, 1, .1, 1) * 100;
    let outerRadius = map(sin((millis() + 300) / 300), -1, 1, .1, 1) * 100;
    stroke(255, 0, 100);
    star(width / 2, height / 2, outerRadius, innerRadius, 10);
    star(100, 100, 100, 50, map(cos(millis() / 600) * sin(millis() / 900), -1, 1, 4, 30));
}