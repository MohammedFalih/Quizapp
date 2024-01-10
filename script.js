const questions = [
    {
        question: "what is your name?" ,
        answers: [
            {text:"Thoufik", correct: false},
            {text:"Falih", correct: true},
            {text:"Sulthan", correct: false},
            {text:"Apsar", correct: false},
        ]
    },
    {
        question: "what is your name?" ,
        answers: [
            {text:"Thoufik", correct: false},
            {text:"Falih", correct: true},
            {text:"Sulthan", correct: false},
            {text:"Apsar", correct: false},
        ]
    },
    {
        question: "what is your name?" ,
        answers: [
            {text:"Thoufik", correct: false},
            {text:"Falih", correct: true},
            {text:"Sulthan", correct: false},
            {text:"Apsar", correct: false},
        ]
    }
];

const questionElement = document.getElementById("question");
const answerButtons = document.getElementById("ans-btn");
const next = document.getElementById("next");

let score = 0;
let currentQuestionIndex = 0;

function quizStart() {
    currentQuestionIndex = 0;
    score = 0;
    next.innerHTML = "Next";
    showQuestion();
}

function showQuestion() {
    reset();
    let currentQuestion = questions[currentQuestionIndex];
    let quesNo = currentQuestionIndex + 1;
    questionElement.innerHTML = quesNo + ". " + currentQuestion.question;

    currentQuestion.answers.forEach(answer => {
        const button = document.createElement("button");
        button.innerHTML = answer.text;
        button.classList.add("btn");
        answerButtons.appendChild(button);
        if(answer.correct) {
            button.dataset.correct = answer.correct;
        }
        button.addEventListener("click", selectAnswer);
    })
}

function reset() {
    next.style.display = "none";
    while(answerButtons.firstChild) {
        answerButtons.removeChild(answerButtons.firstChild);
    }
}

function selectAnswer(e) 
{
    const selectedBtn = e.target;
    const isCorrect = selectedBtn.dataset.correct === "true";
    if(isCorrect) {
        selectedBtn.classList.add("correct");
    }
    else {
        selectedBtn.classList.add("incorrect");
    }
}

quizStart();