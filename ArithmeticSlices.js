var numberOfArithmeticSlices = function(A) {
    var result = 0;
    var currentResult = 0
    var l = A.length;
    if (l < 3) {
        return 0;
    }
    var startIndex = 0;
    var endIndex;
    while (startIndex < l - 2) {
        var first = A[startIndex + 1] - A[startIndex];
        var second = A[startIndex + 2] - A[startIndex + 1];
        if (first === second) {
            startIndex++;
            currentResult++;
        } else {
            if (currentResult) {
                result += sumOfInteger(currentResult);
                currentResult = 0;
            }
            startIndex++;
        }
    }
    
    
    return result + sumOfInteger(currentResult)
};

function sumOfInteger(n) {
    return (n + 1) * (n / 2);
}