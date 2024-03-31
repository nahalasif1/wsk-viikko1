function sortArray(numbers) {
    

    var sortedArray = numbers.slice().sort(function(a, b) {
        return a - b;
    });
    return sortedArray;
}

var numbers = [5, 3, 9, 2, 7];

// Print the original array
console.log("Original Array:", numbers);

var sortedNumbers = sortArray(numbers);

console.log("Sorted Array:", sortedNumbers);
