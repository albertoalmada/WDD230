const temp = parseFloat(document.getElementById("temperature").textContent);
const windspeed = parseFloat(document.getElementById("windspeed").textContent);

function wind(temperature, windspeed) {
  document.getElementById("windchill").innerHTML = (
    35.74 +
    0.6215 * temperature -
    35.75 * windspeed ** 0.16 +
    0.4275 * temperature * windspeed ** 0.16
  ).toFixed(1);
}

if (temp <= 50 && windspeed > 3.0) {
  wind(temp, windspeed);
} else {
  document.getElementById("windchill").innerHTML = "N/A";
}
