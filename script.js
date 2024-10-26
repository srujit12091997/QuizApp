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
        correct: 0,
        explanation: "HTML stands for HyperText Markup Language, which is the standard markup language for creating web pages."
    },
    {
        question: "Which CSS property is used to change the text color?",
        options: [
            "text-color",
            "color",
            "font-color",
            "text-style"
        ],
        correct: 1,
        explanation: "The 'color' property is used to specify the color of text in CSS."
    },
    {
        question: "Inside which HTML element do we put the JavaScript?",
        options: [
            "<javascript>",
            "<js>",
            "<scripting>",
            "<script>"
        ],
        correct: 3,
        explanation: "The <script> tag is used to embed JavaScript code in an HTML document."
    }
    // Add more questions here
];

// State Management
let currentQuestion = 0;
let score = 0;
let timeLeft = 30;
let timer = null;
let answeredQuestions = new Array(quizData.length).fill(-1);
let startTime = 0;

// DOM Elements
const screens = {
    start: document.getElementById('start-screen'),
    quiz: document.getElementById('quiz-screen'),
    result: document.getElementById('result-screen'),
    highscores: document.getElementById('highscores-screen')
};

const elements = {
    question: document.getElementById('question'),
    options: document.getElementById('options'),
    score: document.getElementById('score'),
    timeLeft: document.getElementById('time'),
    progressBar: document.getElementById('progress-bar'),
    currentQuestion: document.getElementById('current-question'),
    totalQuestions: document.getElementById('total-questions'),
    finalScore: document.getElementById('final-score'),
    timeTaken: document.getElementById('time-taken'),
    correctAnswers: document.getElementById('correct-answers'),
    highscoresList: document.getElementById('highscores-list')
};

const buttons = {
    start: document.getElementById('start-btn'),
    prev: document.getElementById('prev-btn'),
    next: document.getElementById('next-btn'),
    restart: document.getElementById('restart-btn'),
    home: document.getElementById('home-btn'),
    highscores: document.getElementById('highscore-btn'),
    clearHighscores: document.getElementById('clear-highscores-btn'),
    back: document.getElementById('back-btn')
};

// Initialize Quiz
function initializeQuiz() {
    updateTotalQuestions();
    attachEventListeners();
    loadHighScores();
}

function updateTotalQuestions() {
    elements.totalQuestions.textContent = quizData.length;
}

function attachEventListeners() {
    buttons.start.addEventListener('click', startQuiz);
    buttons.prev.addEventListener('click', prevQuestion);
    buttons.next.addEventListener('click', nextQuestion);
    buttons.restart.addEventListener('click', restartQuiz);
    buttons.home.addEventListener('click', showStartScreen);
    buttons.highscores.addEventListener('click', showHighScores);
    buttons.clearHighscores.addEventListener('click', clearHighScores);
    buttons.back.addEventListener('click', showStartScreen);
}

// Screen Management
function showScreen(screenId) {
    Object.values(screens).forEach(screen => {
        screen.classList.add('hidden');
    });
    screens[screenId].classList.remove('hidden');
}

function startQuiz() {
    showScreen('quiz');
    startTime = new Date().getTime();
    resetQuiz();
    startTimer();
    loadQuestion();
}

function showStartScreen() {
    showScreen('start');
    stopTimer();
}

function showHighScores() {
    showScreen('highscores');
    displayHighScores();
}

// Timer Functions
function startTimer() {
    timeLeft = 30;
    timer = setInterval(() => {
        timeLeft--;
        elements.timeLeft.textContent = timeLeft;
        
        if (timeLeft <= 0) {
            clearInterval(timer);
            finishQuiz();
        }
    }, 1000);
}

function stopTimer() {
    clearInterval(timer);
}

function resetTimer() {
    stopTimer();
    timeLeft = 30;
    elements.timeLeft.textContent = timeLeft;
}

// Quiz Logic
function loadQuestion() {