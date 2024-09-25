// A function to add two numbers

function sumNumbers(a: number, b: number): number {
    return a + b;
}

function subtractNumbers(a: number, b: number): number{
    return a - b
}

function divideNumbers(a: number, b: number): number {
    if (b === 0){
        alert('The second number must not be "0"')
        return NaN
    }
    return a / b;
}

function multiplyNumbers(a: number, b: number): number{
    return a * b
}

console.log(sumNumbers(5, 6));

console.log(sumNumbers(Number("2"), Number("4")));
