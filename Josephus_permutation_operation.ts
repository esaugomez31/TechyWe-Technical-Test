function getJosephusPermutation(numberValues: number[], k: number): number {
    // Validación de escenaios que no aplican a la solución
    if (numberValues.length <= 1 || k <= 1) return 0;

    // Generando copia para conservar el array original
    let currentValues: number[] = [...numberValues];
    let delIndex = 0;

    while (currentValues.length > 1) {
        // Calculando indice a eliminar y simulando el recorrido en circulo mediante el operador MOD
        delIndex = (delIndex + k - 1) % currentValues.length;
        currentValues.splice(delIndex, 1);
    }

    return currentValues[0] as number;
}
