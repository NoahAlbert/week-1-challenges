const form = document.querySelector("form");
form.addEventListener("submit", greetByName);


function greetByName(event)
{
    event.preventDefault();
    const fName = event.target.fName.value;
    const lName = event.target.lName.value;

    document.getElementById("result").innerText = "Whats poppin " + fName + "! I havent seen your dad in a while, how's Mr. " + lName +"?";
}