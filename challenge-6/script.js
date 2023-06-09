const form = document.querySelector("form");
// form.addEventListener("submit", (event) => {
//     event.preventDefault();
//     const weeks = event.target.weeks.value;
//     const seconds = weeks * 604800;

//     if(weeks == 1)
//     {
//         document.getElementById("result").innerText = weeks + " week = " + seconds.toLocaleString() + " seconds";
//     }
//     else
//     {
//         document.getElementById("result").innerText = weeks + " weeks = " + seconds.toLocaleString() + " seconds";
//     }
// })

form.addEventListener("submit", convertWeeksToSeconds)

function convertWeeksToSeconds(event)
{
    event.preventDefault();
    const weeks = event.target.weeks.value;
    const seconds = weeks * 604800;

    if(weeks == 1)
    {
        document.getElementById("result").innerText = weeks + " week = " + seconds.toLocaleString() + " seconds";
    }
    else
    {
        document.getElementById("result").innerText = weeks + " weeks = " + seconds.toLocaleString() + " seconds";
    }
}