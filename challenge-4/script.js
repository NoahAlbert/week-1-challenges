const form = document.querySelector("form");
// form.addEventListener("submit", (event) => {
//     event.preventDefault()
//     const base = event.target.base.value;
//     const power = event.target.power.value;

//     const res = Math.pow(base, power);
//     document.getElementById("result").innerHTML = `${base}<sup>${power}</sup> = ${res}`;
// })

form.addEventListener("submit", calculateExponent)

function calculateExponent(event)
{
    event.preventDefault()
    const base = event.target.base.value;
    const power = event.target.power.value;

    const res = Math.pow(base, power);
    document.getElementById("result").innerHTML = `${base}<sup>${power}</sup> = ${res}`;
}