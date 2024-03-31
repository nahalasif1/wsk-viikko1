var numbers = [];

var input;
do {
    input = prompt("Enter a number (or 'done' to finish):");
    if (input !== 'done') {
        numbers.push(parseInt(input));
    }
} while (input !== 'done');

var evenNumbers = [];

for (var number of numbers) {
    if (number % 2 === 0) {
        evenNumbers.push(number);
    }
}

if (evenNumbers.length > 0) {
    console.log("Even Numbers:", evenNumbers.join(", "));
} else {
    console.log("Even Numbers: None");
}

console.log("End of Program");
