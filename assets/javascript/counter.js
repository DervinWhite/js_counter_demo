let incrementButtonElement = document.querySelector("#increment");
let decrementButtonElement = document.querySelector("#decrement");
let counterElement = document.querySelector("#counter");


incrementButtonElement.addEventListener("click", function () {
    console.log("+ button clicked");
    let newCounterValue = Number(counterElement.innerHTML) + 1;
    if (newCounterValue >= 10) {
        counter.style.color = "red";
    }
    counterElement.innerHTML = newCounterValue;
})


decrementButtonElement.addEventListener("click", function () {
    console.log("- button clicked");
    let newCounterValue = Number(counterElement.innerHTML) - 1;
    if (newCounterValue < 10) {
        counter.style.color = "black";
    }
    if (counterElement.innerHTML > 0) {
        counterElement.innerHTML = newCounterValue;
    }
})