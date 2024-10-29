let button = document.querySelector('#submitButton');


//CLick Event
button.addEventListener('click', (e) => {
    let input = document.querySelector('#nameInput').value;
    let message = document.querySelector('#outputDiv');
    if(input.length<1){
        message.textContent = "Error! Please enter your name.";
        message.style.fontWeight = "normal";
        message.style.color = "red";
    } else {
        message.textContent = "Welcome, "+ input.value + "!";
        message.style.fontWeight = "bold";
        message.style.color = "black";
    }

})

//Mouse event
let box = document.querySelector('#mouseTracker');
box.addEventListener('mousemove', (e) => {
    let coordinates = document.querySelector('#coordinates');
    coordinates.textContent = `Mouse Coordinates: X: ${e.offsetX}, Y: ${e.offsetY}`;
})

//Keyboard event
let input = document.querySelector('#nameInput');

input.addEventListener('keydown', (e) => {
    if (e.key === 'Enter') {
        let message = document.querySelector('#outputDiv');
        if(input.value.length<1){
            message.textContent = "Error! Please enter your name.";
            message.style.fontWeight = "normal";
            message.style.color = "red";
        } else {
            message.textContent = "Welcome, "+ input.value + "!";
            message.style.fontWeight = "bold";
            message.style.color = "black";
        }
    }

})
