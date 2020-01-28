var startButton = document.getElementById('start-btn')
var nextButton = document.getElementById('next-btn')
var questionContainerElement = document.getElementById('question-container')
var questionElement = document.getElementById('question')
var answerButtonsElement = document.getElementById('answer-buttons')
var scoreDiv = document.getElementById('scoreContainer');
var timer = document.getElementById('iTimeShow');

let shuffledQuestions, currentQuestionIndex

let score = 0;
let count = 60;

//Timer
var mins = 2;

var secs = mins * 60;

function countdown() {
  setTimeout(Decrement(), 60);
}

function Decrement() {
  if (timer) {
    minutes = mins
    seconds = secs

    if (seconds < 59) {
      seconds.value = secs;
    } else {
      minutes.value = getminutes();
      seconds.value = getseconds();
    }
    if (mins < 1) {
      minutes.style.color = "red";
      seconds.style.color = "red";
    }
    if (mins < 0) {
      alert("Times up!!");
      minutes.value = 0;
      seconds.value = 0;
    } else {
      secs--;
      setTimeout(Decrement(), 1000);
    }
  }
  function getminutes() {
    mins = Math.floor(secs / 60);
    return mins;
  }
  function getseconds() {
    return secs - Math.round(mins * 60);
  }
};

startButton.addEventListener('click', startGame)
nextButton.addEventListener('click', () => {
  currentQuestionIndex++
  setNextQuestion()
})

//Button to start game
function startGame() {
  startButton.classList.add('hide')
  shuffledQuestions = questions.sort(() => Math.random() - .5)
  currentQuestionIndex = 0
  questionContainerElement.classList.remove('hide')
  setNextQuestion()
}

//After answering the question, it goes to the next question
function setNextQuestion() {
  resetState()
  showQuestion(shuffledQuestions[currentQuestionIndex])
}

//function to show the question
function showQuestion(question) {
  questionElement.innerText = question.question
  question.answers.forEach(answer => {
    const button = document.createElement('button')
    button.innerText = answer.text
    button.classList.add('btn')
    if (answer.correct) {
      button.dataset.correct = answer.correct
      score++;
    }
    button.addEventListener('click', selectAnswer)
    answerButtonsElement.appendChild(button)
  })
}

//returns question to default state
function resetState() {
  clearStatusClass(document.body)
  nextButton.classList.add('hide')
  while (answerButtonsElement.firstChild) {
    answerButtonsElement.removeChild(answerButtonsElement.firstChild)
  }
}

//user picks an answer - it shows whether it's right or wrong
function selectAnswer(e) {
  const selectedButton = e.target
  const correct = selectedButton.dataset.correct
  setStatusClass(document.body, correct)
  Array.from(answerButtonsElement.children).forEach(button => {
    setStatusClass(button, button.dataset.correct)
  })
  if (shuffledQuestions.length > currentQuestionIndex + 1) {
    nextButton.classList.remove('hide')
  } else {
    startButton.innerText = 'Restart'
    startButton.classList.remove('hide')
    scoreRender();
  }
};


function setStatusClass(element, correct) {
  clearStatusClass(element)
  if (correct) {
    element.classList.add('correct')
  } else {
    element.classList.add('wrong')
  }
}

function clearStatusClass(element) {
  element.classList.remove('correct')
  element.classList.remove('wrong')
}

function scoreRender(){
  scoreDiv.style.display = "block";
  
  // calculate the amount of question percent answered by the user
  const scorePerCent = Math.round(score - 5);
  scoreDiv.innerHTML += "<p>"+ scorePerCent +" out of five</p>";
}


const questions = [
  {
    question: "What is a parseInt function?",
    answers: [
      { text: 'Definitely not this one', correct: false },
      { text: 'Not this one', correct: false },
      { text: 'Parses a string and returns an integer', correct: true },
      { text: 'Especially not this one', correct: false }
    ]
  },
  {
    question: "What does a toString method do?",
    answers: [
      { text: 'Returns a boolean value as a string', correct: true },
      { text: 'Definitely the first one', correct: false },
      { text: 'This one is false', correct: false },
      { text: 'This one is also false', correct: false }
    ]
  },
  {
    question: "How are you today?",
    answers: [
      { text: 'Great! Thank you for asking', correct: true },
      { text: 'I am alright', correct: false },
      { text: 'I could be better', correct: false },
      { text: 'Do not ask me about my financial situation', correct: false }
    ]
  },
  {
    question: "What do you use to create a variable?",
    answers: [
      { text: 'const', correct: true },
      { text: 'var', correct: true },
      { text: 'let', correct: true },
      { text: 'All of these answers are true', correct: true },
    ]
  },
];