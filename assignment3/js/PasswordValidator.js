//PasswordValidator.js
//17 September 2024
//Author: Ndeye Anta Mbaye
//This code prompts user to enter a password and confirm it.

function validatePassword() {
    let password = prompt("Create a password:");
    let confirmation = ""
    do{
        if (password == null || confirmation == null){
            return;
        }
        confirmation = prompt("Confirm the password:");
    } while( confirmation !== password);
}