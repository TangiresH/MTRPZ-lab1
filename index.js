function solveQuadEquation (a, b, c) {
    const discr = b * b - 4.0 * a * c;
    const sqrtDiscr = Math.sqrt(Math.abs(discr));
    const x1 = (-b + sqrtDiscr) / (2.0 * a);
    const x2 = (-b - sqrtDiscr) / (2.0 * a);

    console.log(`Equation is: (${a}) x^2 + (${b}) x + (${c}) = 0`);

    if(discr < 0) {
        console.log('No real roots');
    } else if(discr > 0) {
        console.log(`x1: ${x1}`);
        console.log(`x2: ${x2}`);
    } else {
        console.log(`x1: ${x1}`);
    }
}