function getLongestString (stringsValues: string[], k: number): string | null {
    if(stringsValues.length <= 0 || k < 1) return null;
  
    let longestString: string = "";
    for(let i: number = 0; i <= stringsValues.length - k; i++) {
        let currentResult: string = stringsValues[i];
      
        for(let j: number = i + 1; j <= (i + k - 1); j++) {
            currentResult += stringsValues[j];
        }
      
        if(longestString.length < currentResult.length) longestString = currentResult;
    }

    return longestString;
}
