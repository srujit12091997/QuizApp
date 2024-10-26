// script.js
const quizData = [
    {
        question: "What does HTML stand for?",
        options: [
            "Hyper Text Markup Language",
            "High Tech Modern Language",
            "Hyper Transfer Markup Language",
            "Home Tool Markup Language"
        ],
        correct: 0
    },
    {
        question: "Which property is used to change the background color?",
        options: [
            "color",
            "bgcolor",
            "background-color",
            "background"
        ],
        correct: 2
    },
    {
        question: "Inside which HTML element do we put the JavaScript?",
        options: [
            "<javascript>",
            "<js>",
            "<scripting>",
            "<script>"
        ],
        correct: 3
    }
];

let currentQuestion = 0;
let score = 0;
let answeredQuestions = new Array(quizData.length).fill(-1);

// DOM Elements
const questionEl = document.getElementById('question');
const optionsEl = document.getElementById('options');
const scoreEl = document.getElementById('score');
const prevBtn = document.getElementById('prev-btn');
const nextBtn = document.getElementById('next-btn');
const quizContent = document.getElementById('quiz-content');
const resultEl = document.getElementById('result');
const finalScoreEl = document.getElementById('final-score');
const restartBtn = document.getElementById('restart-btn');

function loadQuestion() {
    const question = quizData[currentQuestion];
    questionEl.textContent = question.question;
    
    optionsEl.innerHTML = '';
    question.options.forEach((option, index) => {
        const button = document.createElement('button');
        button.className = 'option-btn';
        button.textContent = option;
        
        if (answeredQuestions[currentQuestion] !== -1) {
            if (index === question.correct) {
                button.classList.add('correct');
            } else if (index === answeredQuestions[currentQuestion]) {
                button.classList.add('wrong');
            }
            button.disabled = true;
        } else {
            button.onclick = () => selectOption(index);
        }
        
        optionsEl.appendChild(button);
    });

    updateNavButtons();
}

function selectOption(index) {
    const question = quizData[currentQuestion];
    if (index === question.correct) {
        if (answeredQuestions[currentQuestion] === -1) {
            score++;
            scoreEl.textContent = score;
        }
    }
    
    answeredQuestions[currentQuestion] = index;
    loadQuestion();

    if (currentQuestion === quizData.length - 1) {
        checkQuizCompletion();
    } else {
        setTimeout(() => {
            nextQuestion();
        }, 1000);
    }
}

function nextQuestion() {
    if (currentQuestion < quizData.length - 1) {
        currentQuestion++;
        loadQuestion();
    }
}

function prevQuestion() {
    if (currentQuestion > 0) {
        currentQuestion--;
        loadQuestion();
    }
}

function updateNavButtons() {
    prevBtn.disabled = currentQuestion === 0;
    nextBtn.disabled = currentQuestion === quizData.length - 1;
}

function checkQuizCompletion() {
    if (answeredQuestions.every(answer => answer !== -1)) {
        quizContent.style.display = 'none';
        resultEl.style.display = 'block';
        finalScoreEl.textContent = score;
    }
}

function restartQuiz() {
    currentQuestion = 0;
    score = 0;
    answeredQuestions = new Array(quizData.length).fill(-1);
    scoreEl.textContent = score;
    quizContent.style.display = 'block';
    resultEl.style.display = 'none';
    loadQuestion();
}

// Event Listeners
prevBtn.addEventListener('click', prevQuestion);
nextBtn.addEventListener('click', nextQuestion);
restartBtn.addEventListener('click', restartQuiz);

// Initialize the quiz
loadQuestion();