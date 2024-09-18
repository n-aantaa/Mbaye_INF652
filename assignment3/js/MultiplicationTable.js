//MultiplicationTable.js
//17 September 2024
// Author: Ndeye Anta Mbaye
// This code prompts the user to enter a number and displays the multiplication table for that number through an alert

function findMultiplicationTable() {
    let result = "";
    let numberEntered = prompt('Enter a number');
    if (numberEntered ==null) {
        return;
    }

    for (let i = 1; i <= 10; i++) {
        result+= `${parseInt(numberEntered)} x ${i} = ${parseInt(numberEntered)*i}\n`;
    }
    alert(result);
}