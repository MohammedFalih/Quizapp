const questions = [
    {
        question: "Which of the following is used to create web pages??" ,
        answers: [
            {text:"C", correct: false},
            {text:"HTML", correct: true},
            {text:"Python", correct: false},
            {text:"C++", correct: false},
        ]
    },
    {
        question: "Opening tag of HTML is called?" ,
        answers: [
            {text:"Pair tag", correct: false},
            {text:"Closed tag", correct: false},
            {text:"Ending tag", correct: false},
            {text:"Starting tag", correct: true},
        ]
    },
    {
        question: "Which is the largest heading tag??" ,
        answers: [
            {text:"H3", correct: false},
            {text:"H1", correct: true},
            {text:"H6", correct: false},
            {text:"H4", correct: false},
        ]
    },
    {
        question: " What is the extension of javascript file?",
        answers: [
            {text:".js", correct:true},
            {text:".java", correct:false},
            {text:".jp", correct:false},
            {text:".json", correct:false}
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
        score++;
    }
    else {
        selectedBtn.classList.add("incorrect");
    }

    Array.from(answerButtons.children).forEach( button => {
        if(button.dataset.correct === "true"){
            button.classList.add("correct")
        }
        button.disabled = true;
    })
    next.style.display = "block";
}

function showScore() {
    reset();
    questionElement.innerHTML = "You have Scored " + score;
    next.innerHTML = "Restart";
    next.style.display = "block";
}

function handleNext() {
    currentQuestionIndex++;
    if(currentQuestionIndex < questions.length) {
        showQuestion();
    }
    else {
        showScore();
    }
}

next.addEventListener("click",() => {
    if(currentQuestionIndex < questions.length){
        handleNext();
    }
    else {
        quizStart();
    }
})

quizStart();