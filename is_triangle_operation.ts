function isTriangle(a: number, b: number, c: number): boolean {
    const TRIANGLE_VALIDATOR: boolean = (a + b) > c && (a + c) > b && (b + c) > a;
    return TRIANGLE_VALIDATOR;
}
