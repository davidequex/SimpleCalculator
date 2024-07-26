const display = document.getElementById("display");
const historyList = document.getElementById("history-list");
let isDarkTheme = false;

function appendToDisplay(input) {
    display.value += input;
}

function clearDisplay() {
    display.value = "";
}

function calculate() {
    try {
        const result = eval(display.value);
        addToHistory(display.value + " = " + result);
        display.value = result;
    } catch (error) {
        display.value = "Error";
    }
}

function addToHistory(entry) {
    const li = document.createElement("li");
    li.textContent = entry;
    historyList.appendChild(li);
}

function toggleTheme() {
    document.body.classList.toggle('dark-theme');
    isDarkTheme = !isDarkTheme;
}

document.addEventListener('keydown', function(event) {
    const key = event.key;
    if ((key >= '0' && key <= '9') || key === '.' || key === '+' || key === '-' || key === '*' || key === '/') {
        appendToDisplay(key);
    } else if (key === 'Enter') {
        event.preventDefault(); 
        calculate();
    } else if (key === 'Backspace') {
        display.value = display.value.slice(0, -1);
    } else if (key === 'Escape') {
        clearDisplay();
    }
});
