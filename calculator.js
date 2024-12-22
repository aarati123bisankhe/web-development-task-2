// script.js
let currentDisplay = "0";

function addToDisplay(value) {
    const display = document.getElementById("display");
    if (currentDisplay === "0" && value !== ".") {
        currentDisplay = value;
    } else {
        currentDisplay += value;
    }
    display.textContent = currentDisplay;
}

function clearDisplay() {
    currentDisplay = "0";
    document.getElementById("display").textContent = currentDisplay;
}

function toggleSign() {
    if (currentDisplay !== "0") {
        if (currentDisplay.startsWith("-")) {
            currentDisplay = currentDisplay.substring(1);
        } else {
            currentDisplay = "-" + currentDisplay;
        }
        document.getElementById("display").textContent = currentDisplay;
    }
}

function calculateResult() {
    try {
        currentDisplay = eval(currentDisplay.replace("x", "*").replace("÷", "/"));
        document.getElementById("display").textContent = currentDisplay;
    } catch {
        document.getElementById("display").textContent = "Error";
        currentDisplay = "0";
    }
}