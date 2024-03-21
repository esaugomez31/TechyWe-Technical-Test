/* 
Para esta solución apliqué el Teorema de la desigualdad del triángulo, 
el cual ya tiene en cuenta lo planteado por el problema de que todas las superficies deben ser mayores a cero.

Referencia: https://www.varsitytutors.com/hotmath/hotmath_help/spanish/topics/triangle-inequality-theorem
*/

function isTriangle (a: number, b: number, c: number): boolean {
    const TRIANGLE_VALIDATOR: boolean = (a + b) > c && (a + c) > b && (b + c) > a;
    return TRIANGLE_VALIDATOR;
}
