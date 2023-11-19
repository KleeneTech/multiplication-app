// Random numbers
const randomNumber1 = Math.ceil(Math.random() * 10);
const randomNumber2 = Math.ceil(Math.random() * 10);

// Global Elements
const questionEl = document.getElementById("question");
const formEl = document.getElementById("form");
const input = document.getElementById("input");
const scoreEl = document.getElementById("score");

let score = JSON.parse(localStorage.getItem("score"));

if (!score) {
  score = 0;
}

scoreEl.innerText = `score: ${score}`;

questionEl.innerText = `What is ${randomNumber1} multiplied by ${randomNumber2}?`;

// Correct Answer
const correctAnswer = randomNumber1 * randomNumber2;

formEl.addEventListener("submit", () => {
  const userAnswer = +input.value;
  if (userAnswer === correctAnswer) {
    score++;
    updateLocalStorage();
  } else {
    score--;
    updateLocalStorage();
  }
});

function updateLocalStorage() {
  localStorage.setItem("score", JSON.stringify(score));
}
