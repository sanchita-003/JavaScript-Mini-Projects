let minutes = 0;
let seconds = 0;
let milliseconds = 0;

let timer = null;

function updateDisplay() {

    let min = String(minutes).padStart(2, "0");
    let sec = String(seconds).padStart(2, "0");
    let milli = String(milliseconds).padStart(3, "0");

    document.getElementById("display").innerHTML =
        min + " : " + sec + " : " + milli;
}

function startWatch() {

    if (timer !== null) {
        return;
    }

    timer = setInterval(function () {

        milliseconds += 10;

        if (milliseconds >= 1000) {
            milliseconds = 0;
            seconds++;
        }

        if (seconds >= 60) {
            seconds = 0;
            minutes++;
        }

        updateDisplay();

    }, 10);
}

function stopWatch() {

    clearInterval(timer);
    timer = null;

}

function resetWatch() {

    clearInterval(timer);
    timer = null;

    minutes = 0;
    seconds = 0;
    milliseconds = 0;

    updateDisplay();

}

updateDisplay();