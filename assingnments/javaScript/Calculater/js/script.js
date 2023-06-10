let operand1 = null;
let operand2 = null;
let currentOperation = null;

function appendNumber(num) {
    document.getElementById('result').value += num;
}

function clearAll() {
    document.getElementById('result').value = '';
    operand1 = null;
    operand2 = null;
    currentOperation = null;
}

function operation(op) {
    operand1 = parseFloat(document.getElementById('result').value);
    currentOperation = op;
    document.getElementById('result').value = '';
}


function appendToResult(value) {
    document.getElementById('result').value += value;
}

function deleteLastCharacter() {
    var result = document.getElementById('result').value;
    document.getElementById('result').value = result.slice(0, -1);
}

function calculate() {
    operand2 = parseFloat(document.getElementById('result').value);
    let result = null;

    switch (currentOperation) {
        case '+':
            result = operand1 + operand2;
            break;
        case '-':
            result = operand1 - operand2;
            break;
        case '*':
            result = operand1 * operand2;
            break;
        case '/':
            result = operand1 / operand2;
            break;
        default:
            break;
    }

    document.getElementById('result').value = result;
}