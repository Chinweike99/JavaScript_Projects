const questions = [
    {
        question: "Which is the world largest animal?",
        answers: [
            { text: "Shark", correct: false},
            { text: "Blue Whale", correct: true},
            { text: "Giraff", correct: false},
            { text: "Elephant", correct: false},
        ]
    },
    {
        question: "Which is the smallest country in the world?",
        answers: [
            { text: "India", correct: false},
            { text: "China", correct: false},
            { text: "Namibia", correct: false},
            { text: "Vatican City", correct: true},
        ]
    },
    {
        question: "Which is the largest desert in the world?",
        answers: [
            { text: "Kalahari", correct: false},
            { text: "Sahara", correct: false},
            { text: "Gobi", correct: false},
            { text: "Antarctica", correct: true},
        ]
    },
    {
        question: "Which is the smallest continent in the world?",
        answers: [
            { text: "Asia", correct: false},
            { text: "Europe", correct: false},
            { text: "Africa", correct: false},
            { text: "Australia", correct: true},
        ]
    }
];

const quizQuestion = document.getElementById("question");
const quizAnswer = document.getElementById("answer-buttons");
const nextBtn = document.getElementById("next-btn");

// Functions to store scores and answers passed
let questionIndex = 0;
let score = 0;

function startQuiz(){
    questionIndex = 0;
    score = 0;
    nextBtn.innerHTML = "Next";
    showQuestion();
}
function showQuestion(){
    resetState();
    let currentQuestion = questions[questionIndex];
    let questionNo = questionIndex + 1;
    quizQuestion.innerHTML = questionNo + ". " + currentQuestion.question;

    currentQuestion.answers.forEach(answer => {
        const button = document.createElement("button");
        button.innerHTML = answer.text;
        button.classList.add("btn");
        quizAnswer.appendChild(button);
        if (answer.correct){
            button.dataset.correct = answer.correct;
        }
        button.addEventListener("click", selectAnswer);
    })
}

// Function to remove all Previous answers
function resetState(){
    nextBtn.style.display = "none";
    while(quizAnswer.firstChild){
        quizAnswer.removeChild(quizAnswer.firstChild);
    }
}


// Function to select answer
function selectAnswer(e){
    const selectedBtn = e.target;
    const isCorrect = selectedBtn.dataset.correct === "true";
    if(isCorrect){
        selectedBtn.classList.add("correct");
        score++; // increment the score if correct
    }
    else{
        selectedBtn.classList.add("incorrect");
    }
    // disabling other selection if an option is already chonsen
    Array.from(quizAnswer.children).forEach(button => {
        if(button.dataset.correct === "true"){
            button.classList.add("correct");
        }
        button.disabled = true;
    });
    nextBtn.style.display = "block";
}


// Function to show score
function showScore(){
    resetState();
    quizQuestion.innerHTML = `Your score is ${score} / ${questions.length}`;
    nextBtn.innerHTML = "Play again";
    nextBtn.style.display = "block";
}

// Next question function
function handleNextButton(){
    questionIndex++;
    if (questionIndex < questions.length){
        showQuestion();
    }else{
        showScore();
    }
}
nextBtn.addEventListener("click", ()=> {
    if (questionIndex < questions.length){
        handleNextButton();
    }else{
        startQuiz();
    }
});

startQuiz();
