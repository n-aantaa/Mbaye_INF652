//DayFinder.js
//17 September 2024
//Author: Ndeye Anta Mbaye
//This code prompts the user to enter a number and display the corresponding day through an alert.

function findDay() {
    let chosenDay = prompt("Enter a number between 1 and 7:");
    if (chosenDay ==null) {
        return;
    }
    switch (parseInt(chosenDay)) {
        case 1:
            alert("Sunday");
            break;
        case 2:
            alert("Monday");
            break;
        case 3:
            alert("Tuesday");
            break;
        case 4:
            alert("Wednesday");
            break;
        case 5:
            alert("Thursday");
            break;
        case 6:
            alert("Friday");
            break;
        case 7:
            alert("Saturday");
            break;
        default:
            alert("Invalid Input!");
    }
}