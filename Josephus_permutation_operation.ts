function getJosephusPermutation(numberValues: number[], k: number): number {
    if (numberValues.length <= 1 || k <= 1) return 0;

    let currentValues: number[] = [...numberValues];
    let delIndex = 0;

    while (currentValues.length > 1) {
        delIndex = (delIndex + k - 1) % currentValues.length;
        currentValues.splice(delIndex, 1);
    }

    return currentValues[0] as number;
}
