function calculateSum() {
    var number = parseInt(document.getElementById("numberInput").value);

    if (isNaN(number) || number < 1) {
        document.getElementById("result").textContent = "Please enter a positive integer.";
        return;
    }

    var sum = 0;
    for (var i = 1; i <= number; i++) {
        sum += i;
    }

    document.getElementById("result").textContent = "The sum of natural numbers up to " + number + " is: " + sum;
}
