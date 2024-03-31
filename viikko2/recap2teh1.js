

// Array of fruits
var fruits = ["apple", "banana", "orange", "grape", "kiwi"];

// Display fruits array
console.log("Fruits:", fruits);

// Calculate and display length of fruits array
console.log("Length of Fruits:", fruits.length);

// Access and display element at index 2
console.log("Element at Index 2:", fruits[2]);

// Access and display the last element using length property
console.log("Last Element of Fruits:", fruits[fruits.length - 1]);

// Empty array for vegetables
var vegetables = [];

// Prompt user to enter three vegetables
for (var i = 0; i < 3; i++) {
    var vegetable = prompt("Enter a vegetable:");
    vegetables.push(vegetable);
}

// Display vegetables array
console.log("Vegetables:", vegetables);

// Calculate and display length of vegetables array
console.log("Length of Vegetables:", vegetables.length);
