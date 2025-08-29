// Part 1: Mastering JavaScript Basics

// Variable declarations
let total = 0;

// Function to calculate total of two numbers
function calculateTotal(num1, num2) {
    return num1 + num2;
}

// Event listener for Calculate Total button
document.getElementById('calculateBtn').addEventListener('click', function() {
    // Get user input
    const num1 = parseFloat(document.getElementById('num1').value);
    const num2 = parseFloat(document.getElementById('num2').value);

    // Validate input
    if (isNaN(num1) || isNaN(num2)) {
        alert("Please enter valid numbers.");
        return;
    }

    // Calculate total and display it
    total = calculateTotal(num1, num2);
    document.getElementById('totalDisplay').innerText = "Total: " + total;
});

// Part 2: JavaScript Functions — The Heart of Reusability

// Function to display numbers in a list
function displayNumbers() {
    const numberList = document.getElementById('numberList');
    numberList.innerHTML = ''; // Clear previous numbers

    // Use a loop to generate numbers from 1 to 10
    for (let i = 1; i <= 10; i++) {
        const li = document.createElement('li');
        li.innerText = i;
        numberList.appendChild(li);
    }
}

// Event listener for Show Numbers button
document.getElementById('loopBtn').addEventListener('click', displayNumbers);

// Part 3: JavaScript Loops — Embrace the Power of Repetition!

// Event listener for Change Text button
document.getElementById('changeTextBtn').addEventListener('click', function() {
    const header = document.querySelector('h1');
    
    // Toggle text using a loop
    const texts = ["JavaScript Fundamentals", "Mastering JS"];
    
    for (let i = 0; i < texts.length; i++) {
        setTimeout(() => {
            header.innerText = texts[i];
        }, i * 1000); // Change text every second
    }
});
