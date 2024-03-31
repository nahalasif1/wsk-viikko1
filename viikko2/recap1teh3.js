function checkTriangle() {
    var side1 = parseFloat(document.getElementById("side1Input").value);
    var side2 = parseFloat(document.getElementById("side2Input").value);
    var side3 = parseFloat(document.getElementById("side3Input").value);

    if (!side1 || !side2 || !side3) {
        document.getElementById("result").textContent = "Please enter valid side lengths.";
        return;
    }

    if (side1 === side2 && side2 === side3) {
        document.getElementById("result").textContent = "The triangle is equilateral.";
    } else if (side1 === side2 || side2 === side3 || side1 === side3) {
        document.getElementById("result").textContent = "The triangle is isosceles.";
    } else {
        document.getElementById("result").textContent = "The triangle is scalene.";
    }
}
