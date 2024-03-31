function calculateDistance() {
    var point1Input = document.getElementById("point1Input").value.trim();
    var point2Input = document.getElementById("point2Input").value.trim();

    // Extracting coordinates
    var point1 = point1Input.split(',').map(Number);
    var point2 = point2Input.split(',').map(Number);

    if (point1.length !== 2 || point2.length !== 2 || isNaN(point1[0]) || isNaN(point1[1]) || isNaN(point2[0]) || isNaN(point2[1])) {
        document.getElementById("result").textContent = "Invalid input. Please enter coordinates in the format (x, y).";
        return;
    }

    var distance = Math.sqrt(Math.pow(point2[0] - point1[0], 2) + Math.pow(point2[1] - point1[1], 2));
    document.getElementById("result").textContent = "Distance between the points: " + distance.toFixed(2);
}
