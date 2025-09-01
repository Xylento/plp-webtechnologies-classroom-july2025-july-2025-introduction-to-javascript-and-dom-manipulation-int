// Ask user for their name and display greeting
const userName = prompt("Enter your name:");
const greetingElement = document.getElementById('greeting');
if (userName) {
  greetingElement.textContent = `Hello, ${userName}! Welcome to JavaScript fundamentals.`;
  console.log(`Hello, ${userName}!`);
} else {
  greetingElement.textContent = "Hello, guest! Welcome to JavaScript fundamentals.";
  console.log("Hello, guest!");
}

// Function to add two numbers
function addNumbers(a, b) {
  return a + b;
}

// Function to visibility of an element by ID
function toggleVisibility(id) {
  const el = document.getElementById(id);
  if (el.style.display === 'none') {
    el.style.display = 'block';
  } else {
    el.style.display = 'none';
  }
}

// Display sum result using the function
const sumResultElement = document.getElementById('sumResult');
sumResultElement.textContent = addNumbers(5, 10);

// Add event listener to toggle header visibility button
const toggleButton = document.getElementById('toggleButton');
toggleButton.addEventListener('click', () => toggleVisibility('header'));

// For loop to print numbers 1 to 5
const numberList = document.getElementById('numberList');
for (let i = 1; i <= 5; i++) {
  const listItem = document.createElement('li');
  listItem.textContent = i;
  numberList.appendChild(listItem);
}

// While loop for countdown from 5
const countdownList = document.getElementById('countdownList');
let count = 5;
while (count > 0) {
  const listItem = document.createElement('li');
  listItem.textContent = count;
  countdownList.appendChild(listItem);
  count--;
}

// Change header text on button click
const changeTextBtn = document.getElementById('changeTextBtn');
changeTextBtn.addEventListener('click', () => {
  const header = document.getElementById('header');
  header.textContent = 'Header Text Updated!';
});

// Add a new paragraph dynamically on button click
const addParaBtn = document.getElementById('addParaBtn');
addParaBtn.addEventListener('click', () => {
  const newPara = document.createElement('p');
  newPara.textContent = 'This paragraph was added dynamically with JavaScript!';
  document.body.appendChild(newPara);
});
