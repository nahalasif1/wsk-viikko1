function convertTemperature() {
    var celsius = parseFloat(document.getElementById("celsiusInput").value);
    var fahrenheit = (celsius * 9/5) + 32;
    var kelvin = celsius + 273.15;

    document.getElementById("results").innerHTML = `
        <p>Celsius: ${celsius}°C</p>
        <p>Fahrenheit: ${fahrenheit}°F</p>
        <p>Kelvin: ${kelvin}K</p>
    `;
}

