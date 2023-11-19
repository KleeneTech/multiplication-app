// Random numbers
const randomNumber1 = Math.ceil(Math.random() * 20);
const randomNumber2 = Math.ceil(Math.random() * 20);

// Question
const questionEl = document.getElementById("question");

questionEl.innerText = `What is ${randomNumber1} multiplied by ${randomNumber2}?`;
