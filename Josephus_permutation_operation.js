var __spreadArray = (this && this.__spreadArray) || function (to, from, pack) {
    if (pack || arguments.length === 2) for (var i = 0, l = from.length, ar; i < l; i++) {
        if (ar || !(i in from)) {
            if (!ar) ar = Array.prototype.slice.call(from, 0, i);
            ar[i] = from[i];
        }
    }
    return to.concat(ar || Array.prototype.slice.call(from));
};
function getJosephusPermutation(numberValues, k) {
    // Validación de escenarios que no aplican a la solución
    if (numberValues.length < 1 || k <= 1)
        return 0;
    // Generando copia para conservar el array original
    var currentValues = __spreadArray([], numberValues, true);
    var delIndex = 0;
    while (currentValues.length > 1) {
        // Calculando indice a eliminar y simulando el recorrido en circulo mediante el operador MOD
        delIndex = (delIndex + k - 1) % currentValues.length;
        currentValues.splice(delIndex, 1);
    }
    return currentValues[0];
}
var result = getJosephusPermutation([1, 2, 3, 4, 5, 6, 7], 2);
console.log(result);
