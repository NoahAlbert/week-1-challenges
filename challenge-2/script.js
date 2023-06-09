const form = document.querySelector("form");
form.addEventListener("submit", convertYentoUSD);

function convertYentoUSD(event) 
{
    event.preventDefault();
    const yen = event.target.yen.value;
    const usd = yen * 0.0072;

    document.getElementById("result").innerText = "¥" + yen + " is equal to $" + usd.toFixed(2);
}