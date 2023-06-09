const form = document.querySelector("form");
form.addEventListener("submit", (event) => {
    event.preventDefault();
    const weeks = event.target.weeks.value;
    const seconds = weeks * 604800;

    document.getElementById("result").innerText = weeks + " weeks = " + seconds.toLocaleString() + " seconds"
})