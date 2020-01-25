const quizContainer = document.getElementById('quiz');
const resultsContainer = document.getElementById('results');
const submitButton = document.getElementById('submit');

const codingQuestions = [
    {
        question: "Who is the fairest of them all?",
        answers: {
            a: "Snow White",
            b: "Sleeping Beauty",
            c: "Waluigi, obviously",
            d: "Wario, but it's probably not"
        },
        correctAnswer: "c"
    },
    {
        question: "Who is Luke's Father?",
        answers: {
            a: "Papa Palpatine",
            b: "Darth Vader",
            c: "Ben Kenobi",
            d: "Rey Skywalker"
        },
        correctAnswer: "a"
    },
    {
        question: "Why is my Dad such a dick?",
        answers: {
            a: "Because he's fat",
            b: "Because he's right",
            c: "Because when you look in the mirror, you see his face and not yours so you start questioning your reality and wondering if this is your future",
            d: "It's definitely C but we'll throw this one in for good measure"
        },
        correctAnswer: "c"
    },
    {
        question: "Placeholder question",
        answers: {
            a: "Answer",
            b: "Answer",
            c: "Answer",
            d: "The Right Answers"
        },
        correctAnswer: "d"
    },
];

function buildQuiz(){
    const output = [];

    // for each question
    myQuestions.forEach((currentQuestion, questionNumber) => {

        const answers = [];

        for(letter in currentQuestion.answers){

            answers.push(
                <label>
                    <input type="radio" name="question${questionNumber}" value="${letter}"></input>
                    ${letter} :
                    ${currentQuestion.answers[letter]}
                </label>
            );
        }

        // add this question and its answer to the output
        output.push(
            `<div class="question"> ${currentQuestion.question} </div>
            <div class="answers"> ${answers.join('')} </div>`
        );
    })
    quizContainer.innerHTML = output.join('');
}

// display quiz right away
buildQuiz();

// on submit, show results
submitButton.addEventListener('click', showResults);

// Store the list of answer choices
const answers = [];

// and for each available answer...add an html radio button
for(letter in currentQuestion.answers){  
  answers.push(
    `<label>
      <input type="radio" name="question${questionNumber}" value="${letter}">
      ${letter} :
      ${currentQuestion.answers[letter]}
    </label>`
  );
}

// add this question and its answers to the output
output.push(
  `<div class="question"> ${currentQuestion.question} </div>
  <div class="answers"> ${answers.join('')} </div>`
);

function showResults(){
    // gather answer containers from our quiz
  const answerContainers = quizContainer.querySelectorAll('.answers');

  // keep track of user's answers
  let numCorrect = 0;

  // for each question...
  myQuestions.forEach( (currentQuestion, questionNumber) => {

    // find selected answer
    const answerContainer = answerContainers[questionNumber];
    const selector = 'input[name=question'+questionNumber+']:checked';
    const userAnswer = (answerContainer.querySelector(selector) || {}).value;

    // if answer is correct
    if(userAnswer===currentQuestion.correctAnswer){
      // add to the number of correct answers
      numCorrect++;

      // color the answers green
      answerContainers[questionNumber].style.color = 'lightgreen';
    }
    // if answer is wrong or blank
    else{
      // color the answers red
      answerContainers[questionNumber].style.color = 'red';
    }
  });

  // show number of correct answers out of total
  resultsContainer.innerHTML = numCorrect + ' out of ' + myQuestions.length;
}

// for each question...
myQuestions.forEach( (currentQuestion, questionNumber) => {

    // find selected answer
    const answerContainer = answerContainers[questionNumber];
    const selector = `input[name=question${questionNumber}]:checked`;
    const userAnswer = (answerContainer.querySelector(selector) || {}).value;
  
    // if answer is correct
    if(userAnswer===currentQuestion.correctAnswer){
      // add to the number of correct answers
      numCorrect++;
  
      // color the answers green
      answerContainers[questionNumber].style.color = 'lightgreen';
    }
    // if answer is wrong or blank
    else{
      // color the answers red
      answerContainers[questionNumber].style.color = 'red';
    }
  });

  
          // Here we link the button to the correct answer
          // $(".btn-primary").on("click", function () {
          //   var compChoice = parseInt(Math.floor((Math.random() * 4) + 1));
          //   var userChoice = parseInt($(this).val());

          //   $("#computer-pick").text(compChoice);

          //   if (userChoice === compChoice) {
          //     $("#result").text("Correct!")
          //   } else {
          //     $("#result").text("Wrong!")
          //   };
          // });