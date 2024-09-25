// A function to add two numbers together.

function sum(a, b) {
    return a + b;
}

//console.log(sum(1, 2) === 3); // Tests the function

//const sumVal = sum(2, 3);

//console.log(`Sum of numbers: ${sum(1, 2)}`);

//console.log(`Sum of the numbers 2 and 3 = ${sumVal}`);

console.log(sum(5, -8));

function sum(a, b) {
    return a + b;
}

function divide(a, b) {
    if (b === 0) {
        alert("The second number must not be '0'");
        return NaN;
    }
    return a / b;
}

const multiply = (a, b) => {
    return a * b;
}

const subtract = function(a, b){
    return a - b
}
