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
}

function showResults(){}

// display quiz right away
buildQuiz();

// on submit, show results
submitButton.addEventListener('click', showResults);

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