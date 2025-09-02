let display = document.getElementById('result');

function appendToDisplay(value) {
    if (display.innerText === '0' && value !== '.') {
        display.innerText = value;
    } else {
        display.innerText += value;
    }
}

function clearDisplay() {
    display.innerText = '0';
}

function calculate() {
    try {
        let result = eval(display.innerText);
        display.innerText = result;
    } catch (error) {
        display.innerText = 'Error';
        setTimeout(clearDisplay, 1000);
    }
}
