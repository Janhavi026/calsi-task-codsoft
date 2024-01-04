let displayValue = '0';

function updateDisplay() {
    document.getElementById('display').textContent = displayValue;
}

function appendNumber(number) {
    if (displayValue === '0') {
        displayValue = number;
    } else {
        displayValue += number;
    }
    updateDisplay();
}

function appendSymbol(symbol) {
    displayValue += symbol;
    updateDisplay();
}

function calculateResult() {
    try {
        displayValue = eval(displayValue).toString();
        updateDisplay();
    } catch (error) {
        displayValue = 'Error';
        updateDisplay();
    }
}

function clearDisplay() {
    displayValue = '0';
    updateDisplay();
}
