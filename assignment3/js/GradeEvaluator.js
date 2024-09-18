//GradeEvaluator.js
//17 September 2024
//Author: Ndeye Anta Mbaye
//This code prompts the user to enter a grade between 0 and 100 and displays the letter grade through an alert

function checkGrade(){
    let inputGrade = prompt("Enter your grade (0-100):");
    if(inputGrade==null){
        return;
    }
    let grade = parseInt(inputGrade)

    if(grade < 0 || grade>100){
        alert("Invalid Input!");
    } else if(grade < 60){
        alert("F");
    } else if(grade <70){
        alert("D");
    } else if(grade < 80){
        alert("C");
    } else if(grade < 90){
        alert("B");
    } else if(grade <= 100){
        alert("A");
    }
}