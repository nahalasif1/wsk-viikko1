function sortArray(numbers, order) {
    var comparisonFunction;
    if (order === "asc") {
        comparisonFunction = function(a, b) {
            return a - b;
        };
    } else if (order === "desc") {
        comparisonFunction = function(a, b) {
            return b - a;
        };
    } else {
        return null;
    }

    return numbers.slice().sort(comparisonFunction);
}

const numbers = [5, 2, 8, 1, 9];
console.log(sortArray(numbers, "asc")); // Output: [1, 2, 5, 8, 9]
console.log(sortArray(numbers, "desc")); // Output: [9, 8, 5, 2, 1]
