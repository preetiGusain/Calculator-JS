//Stores the current value displayed on screen
let curr_value = 0;

//old value after the operation
let old_value = 0;

//Storing operations
let divide_clicked = false;
let add_clicked = false;
let subtract_clicked = false;
let multiply_clicked = false;
let modulus_clicked = false;

//Number buttons
const zero = document.querySelector('#zero');
const one = document.querySelector('#one');
const two = document.querySelector('#two');
const three = document.querySelector('#three');
const four = document.querySelector('#four');
const five = document.querySelector('#five');
const six = document.querySelector('#six');
const seven = document.querySelector('#seven');
const eight = document.querySelector('#eight');
const nine = document.querySelector('#nine');

//Arithmetic buttons
const divide = document.querySelector('#divide');
const multiply = document.querySelector('#multiply');
const subtract = document.querySelector('#subtract');
const add = document.querySelector('#add');
const equals = document.querySelector('#equals');

//Calculator buttons
const AC = document.querySelector('#AC');
const C = document.querySelector('#C');
const modulus = document.querySelector('#modulus');

//screen in calculator
const screen_text = document.querySelector('#screen_text');

//Taking number inputs
zero.onclick = function () { input_number(0) };
one.onclick = function () { input_number(1) };
two.onclick = function () { input_number(2) };
three.onclick = function () { input_number(3) };
four.onclick = function () { input_number(4) };
five.onclick = function () { input_number(5) };
six.onclick = function () { input_number(6) };
seven.onclick = function () { input_number(7) };
eight.onclick = function () { input_number(8) };
nine.onclick = function () { input_number(9) };

//Shows number taken as input on screen
function input_number(number) {
    console.log("input_number called with " + number);
    if (curr_value === 0) {
        update_screen(number);
    }
    else {
        let new_value = (curr_value * 10) + number;
        update_screen(new_value);
    }
}

//Takes string as input and sets it to screen
function update_screen(new_value) {
    console.log("update_screen called with " + new_value);
    curr_value = new_value;
    screen_text.value = new_value.toString();
}


//Taking airthmetic operations
divide.onclick = function () { onDivide() };
add.onclick = function () { onAdd() };
subtract.onclick = function () { onSubtract() };
multiply.onclick = function () { onMultiply() };
modulus.onclick = function () { onModulus() };
equals.onclick = function () { onEquals() };

function onDivide() {
    console.log("onDivide called");
    old_value = computeTillNow();
    update_screen(0);
    divide_clicked = true;
}

function onAdd() {
    console.log("onAdd called");
    old_value = computeTillNow();
    update_screen(0);
    add_clicked = true;
}

function onSubtract() {
    console.log("onSubtract called");
    old_value = computeTillNow();
    update_screen(0);
    subtract_clicked = true;
}

function onMultiply() {
    console.log("onMultiply called");
    old_value = computeTillNow();
    update_screen(0);
    multiply_clicked = true;
}

function onModulus() {
    console.log("onModulus called");
    old_value = computeTillNow();
    update_screen(0);
    modulus_clicked = true;
}

function onEquals() {
    console.log("onEquals called");
    let new_value = computeTillNow();
    update_screen(new_value);
    old_value = 0;
}

//Calculator operations
AC.onclick = function () { resetCalculator() };
C.onclick = function () { resetCurrent() };

//reset variables that stores operations
function resetClickedVariables() {
    console.log("resetClickedVariables called");
    divide_clicked = false;
    add_clicked = false;
    subtract_clicked = false;
    multiply_clicked = false;
    modulus_clicked = false;
}

//Resets every calculator variable
function resetCalculator() {
    console.log("resetCalculator called");
    resetClickedVariables();
    old_value = 0;
    update_screen(0);
}

//Resets current value to zero
function resetCurrent() {
    console.log("resetCurrent called");
    update_screen(0);
}

//Stores the value after current operations
function computeTillNow(){
    let calculated_value = curr_value;
    if (divide_clicked) {
        calculated_value = old_value / curr_value;
    }
    else if (add_clicked) {
        calculated_value = old_value + curr_value;
    }
    else if (subtract_clicked) {
        calculated_value = old_value - curr_value;
    }
    else if (multiply_clicked) {
        calculated_value = old_value * curr_value;
    }
    else if (modulus_clicked) {
        calculated_value = old_value % curr_value;
    }
    resetClickedVariables();
    return calculated_value;
}
