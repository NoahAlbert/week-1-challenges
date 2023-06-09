const form = document.querySelector("form");
form.addEventListener("submit", convertFtoC);

function convertFtoC(event)
{
    event.preventDefault();
    const degF = event.target.degF.value;
    const degC = (degF - 32) * (5 / 9);

    document.querySelector("p").innerText = degF + "°F is " + degC.toFixed(3) + "°C";
}