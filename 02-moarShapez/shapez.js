function star(x, y, outerRadius, innerRadius = null, points = 5) {
    innerRadius = innerRadius ?? outerRadius / 2;
    
    push();
    translate(x, y);
    beginShape();

    for (let i = 0; i < points; i++) {
        const step = TWO_PI / points;
        let angle = -PI / 2 + step * i;
        vertex(cos(angle) * outerRadius, sin(angle) * outerRadius);
        vertex(cos(angle + step / 2) * innerRadius, sin(angle + step / 2) * innerRadius);
    }
    
    endShape(CLOSE);

    pop();
}