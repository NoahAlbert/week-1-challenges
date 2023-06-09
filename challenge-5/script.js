const form = document.querySelector("form");
// form.addEventListener("submit", (event) => {
//     event.preventDefault();
//     const fName = event.target.fName.value;
//     const lName = event.target.lName.value;
//     const count = fName.length + lName.length;

//     document.getElementById("result").innerText = "Your name (" + fName + " " + lName + ") is " + count + " letters long."
// })

form.addEventListener("submit", countLetters)

function countLetters(event)
{
    event.preventDefault();
    const fName = event.target.fName.value;
    const lName = event.target.lName.value;
    const count = fName.length + lName.length;

    document.getElementById("result").innerText = "Your name (" + fName + " " + lName + ") is " + count + " letters long."
}