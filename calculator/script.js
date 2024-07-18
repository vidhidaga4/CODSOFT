function appendValue(value) {
    const output = document.getElementById('output');
    if (output.textContent === '0') {
        output.textContent = value;
    } else {
        output.textContent += value;
    }
}

function calculate() {
    const output = document.getElementById('output');
    try {
        output.textContent = eval(output.textContent.replace('%', '/100'));
    } catch (error) {
        output.textContent = 'Error';
    }
}

function clearOutput() {
    document.getElementById('output').textContent = '0';
}

function toggleSign() {
    const output = document.getElementById('output');
    if (output.textContent.charAt(0) === '-') {
        output.textContent = output.textContent.slice(1);
    } else {
        output.textContent = '-' + output.textContent;
    }
}
