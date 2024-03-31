// Create an empty array called numbers
var numbers = [];

// Prompt the user to enter five numbers and add each entered number to the numbers array
for (var i = 1; i <= 5; i++) {
    var number = parseInt(prompt("Enter Number " + i + ":"));
    numbers.push(number);
}

// Display the contents of the numbers array
console.log("Numbers:", numbers);

// Prompt the user to enter a number and check if it is included in the numbers array
var searchNumber = parseInt(prompt("Enter a Number to Search:"));
if (numbers.includes(searchNumber)) {
    console.log("Number", searchNumber, "is found in the array.");
} else {
    console.log("Number", searchNumber, "is not found in the array.");
}

// Remove the last number from the numbers array using the pop() method
var removedNumber = numbers.pop();

// Display the updated numbers array
console.log("Updated Numbers:", numbers);

// Sort the numbers array in ascending numerical order using the sort() method with a custom comparison function
numbers.sort(function(a, b) {
    return a - b;
});

// Display the sorted numbers array
console.log("Sorted Numbers:", numbers);
