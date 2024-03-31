function generateMultiplicationTable() {
    var number = parseInt(document.getElementById("numberInput").value);

    if (isNaN(number) || number < 1) {
        alert("Please enter a positive integer.");
        return;
    }

    var tableHTML = "<table border='1'><tr><th>&times;</th>";

    // Generate table header
    for (var i = 1; i <= number; i++) {
        tableHTML += "<th>" + i + "</th>";
    }
    tableHTML += "</tr>";

    // Generate table body
    for (var i = 1; i <= number; i++) {
        tableHTML += "<tr><th>" + i + "</th>";
        for (var j = 1; j <= number; j++) {
            tableHTML += "<td>" + (i * j) + "</td>";
        }
        tableHTML += "</tr>";
    }
    tableHTML += "</table>";

    document.getElementById("table").innerHTML = tableHTML;
}
