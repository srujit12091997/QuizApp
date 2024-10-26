// Quiz Data
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
        question: "Which CSS property is used to change the text color?",
        options: [
            "text-color",
            "color",
            "font-color",
            "text-style"
        ],
        correct: 1
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

// State
let currentQuestion = 0;
let score = 0;
let answers = [];

// DOM Elements
const screens = {
    start: document.getElementById('start-screen'),
    quiz: document.getElementById('quiz-screen'),
    result: document.getElementById('result-screen'),
    highScores: document.getElementById('high-scores-screen')
};

// Initialize
document.getElementById('total-questions').textContent = quizData.length;
loadHighScores();

// Event Listeners
document.getElementById('start-btn').addEventListener('click', startQuiz);
document.getElementById('show-scores-btn').addEventListener('click', showHighScores);
document.getElementById('prev-btn').addEventListener('click', showPreviousQuestion);
document.getElementById('next-btn').addEventListener('click', showNextQuestion);
document.getElementById('restart-btn').addEventListener('click', startQuiz);
document.getElementById('home-btn').addEventListener('click', showStartScreen);
document.getElementById('clear-scores-btn').addEventListener('click', clearHighScores);
document.getElementById('back-btn').addEventListener('click', showStartScreen);

// Functions
function showScreen(screenId) {
    Object.values(screens).forEach(screen => screen.classList.remove('active'));
    screens[screenId].classList.add('active');
}

function startQuiz() {
    currentQuestion = 0;
    score = 0;
    answers = new Array(quizData.length).fill(null);
    showScreen('quiz');
    loadQuestion();
    updateScore();
}

function loadQuestion() {
    const question = quizData[currentQuestion];
    document.getElementById('question').textContent = question.question;
    document.getElementById('question-number').textContent = currentQuestion + 1;
    
    // Update progress
    const progress = ((currentQuestion + 1) / quizData.length) * 100;
    document.getElementById('progress').style.width = `${progress}%`;
    
    // Create options
    const optionsContainer = document.getElementById('options');
    optionsContainer.innerHTML = '';
    
    question.options.forEach((option, index) => {
        const button = document.createElement('button');
        button.className = 'option';
        if (answers[currentQuestion] === index) {
            button.classList.add('selected');
        }
        button.textContent = option;
        button.addEventListener('click', () => selectAnswer(index));
        optionsContainer.appendChild(button);
    });

    // Update navigation buttons
    document.getElementById('prev-btn').disabled = currentQuestion === 0;
    document.getElementById('next-btn').disabled = currentQuestion === quizData.length - 1;
}

function selectAnswer(selectedIndex) {
    const options = document.querySelectorAll('.option');
    options.forEach(option => option.classList.remove('selected'));
    options[selectedIndex].classList.add('selected');
    
    answers[currentQuestion] = selectedIndex;
    
    if (selectedIndex === quizData[currentQuestion].correct) {
        if (answers[currentQuestion] === null) {
            score++;
            updateScore();
        }
    }

    // Show correct/wrong indication
    options.forEach((option, index) => {
        if (index === quizData[currentQuestion].correct) {
            option.classList.add('correct');
        } else if (index === selectedIndex) {
            option.classList.add('wrong');
        }
    });

    // Auto-advance to next question after a delay
    if (currentQuestion < quizData.length - 1) {
        setTimeout(showNextQuestion, 1000);
    } else {
        setTimeout(showResult, 1000);
    }
}

function showPreviousQuestion() {
    if (currentQuestion > 0) {
        currentQuestion--;
        loadQuestion();
    }
}

function showNextQuestion() {
    if (currentQuestion < quizData.length - 1) {
        currentQuestion++;
        loadQuestion();
    }
}

function updateScore() {
    document.getElementById('score').textContent = score;
}

function showResult() {
    document.getElementById('final-score').textContent = score;
    document.getElementById('correct-answers').textContent = 
        answers.filter((answer, index) => answer === quizData[index].correct).length;
    showScreen('result');
    saveScore(score);
}

function showStartScreen() {
    showScreen('start');
}

function showHighScores() {
    loadHighScores();
    showScreen('highScores');
}

function saveScore(score) {
    const scores = JSON.parse(localStorage.getItem('highScores') || '[]');
    scores.push(score);
    scores.sort((a, b) => b - a);
    localStorage.setItem('highScores', JSON.stringify(scores.slice(0, 5)));
}

function loadHighScores() {
    const highScoresElement = document.getElementById('high-scores');
    const scores = JSON.parse(localStorage.getItem('highScores') || '[]');
    
    highScoresElement.innerHTML = scores.length ? 
        scores.map((score, index) => `
            <div class="score-item">
                <span>#${index + 1}</span>
                <span>${score} points</span>
            </div>
        `).join('') : 
        '<p>No high scores yet!</p>';
}

function clearHighScores() {
    localStorage.removeItem('highScores');
    loadHighScores();
}