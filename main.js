let shuffledQuestions
let currentQuestionIndex

const startButton = document.getElementById('start-btn');
const nextButton = document.getElementById('next-btn');
const questionContainerEl = document.getElementById('question-container');
const questionEl = document.getElementById('question');
const answerButtonsEl = document.getElementById('answer-buttons');
const welcomeEl = document.getElementById('welcome');
const factsEl = document.getElementById('answer-facts');

startButton.addEventListener('click', startGame);
welcomeEl.classList.remove('hide');
nextButton.addEventListener('click', () => {
    currentQuestionIndex++
    setNextQuestion();
});

function startGame() {
    console.log(`game started`);
    startButton.classList.add('hide');
    shuffledQuestions = questions.sort(() => Math.random() - .5 )
    currentQuestionIndex = 0;
    questionContainerEl.classList.remove('hide');
    welcomeEl.classList.add('hide');
    setNextQuestion();
};

function setNextQuestion() {
    resetState()
    showQuestion(shuffledQuestions[currentQuestionIndex])
};

function showQuestion(question) {
    questionEl.innerText = question.question
    question.answers.forEach(answer => {
        const button = document.createElement('button');
        button.innerText = answer.text
        button.classList.add('btn');
        if (answer.correct) {
            button.dataset.correct = answer.correct
        }
        button.addEventListener('click', selectAnswer)
        answerButtonsEl.appendChild(button)
    });
};

function resetState() {
    nextButton.classList.add('hide')
    while (answerButtonsEl.firstChild) {
        answerButtonsEl.removeChild(answerButtonsEl.firstChild)
    };
};

function selectAnswer(e) {
    const selectedButton = e.target
    const correct = selectedButton.dataset.correct
    setStatusClass(document.body, correct)
    Array.from(answerButtonsEl.children).forEach(button => {
        setStatusClass(button, button.dataset.correct)
    });
    if (shuffledQuestions.length > currentQuestionIndex + 1) {
        nextButton.classList.remove('hide')
    } else {
        startButton.innerText = 'Restart';
        startButton.classList.remove('hide');
    }
    nextButton.classList.remove('hide');
};

function setStatusClass(element, correct) {
    clearStatusClass(element);
    if (correct) {
        element.classList.add('correct')
    } else {
        element.classList.add('wrong')
    }
};

function clearStatusClass(element) {
    element.classList.remove('correct')
    element.classList.remove('wrong')
};

const questions = [
    {
        question: `What country has the most natural lakes?`,
        answers: [
            { text: 'Canada', correct: true },
            { text: 'USA', correct: false},
            { text: 'Brasil', correct: false},
            { text: 'Finlandia', correct: false}
        ] 
    },
    {
        question: `Which Central American country has a name which translates to English as “The Saviour”?`,
        answers: [
            { text: 'Panama', correct: false },
            { text: 'Guatemala', correct: false },
            { text: 'Costa Rica', correct: false },
            { text: 'El Salvador', correct: true },
        ] 
    },
    {
        question: `What's the city with the most diversity in terms of language?`,
        answers: [ 
            { text: 'Chicago', correct: false },
            { text: 'Los Angeles', correct: false },
            { text: 'London', correct: false },
            { text: 'New York', correct: true },
        ]
    },
    {
        question: `Which US state is Westernmost but at the same time - Easternmost?`,
        answers: [ 
            { text: 'California', correct: false },
            { text: 'Washington', correct: false },
            { text: 'Alaska', correct: true },
            { text: 'Nebraska', correct: false },
        ]
    },
    {
        question: `How many time zones Russia has?`,
        answers: [ 
            { text: '12', correct: false },
            { text: '7', correct: false },
            { text: '9', correct: false },
            { text: '11', correct: true },
        ]
    },
    {
        question: `How many islands the Phillipines has?`,
        answers: [ 
            { text: '7100', correct: true },
            { text: '6350', correct: false },
            { text: '85', correct: false },
            { text: '12003', correct: false },
        ]
    },
    {
        question: ``,
        answers: [ 
            { text: 'Chicago', correct: false },
            { text: 'Los Angeles', correct: false },
            { text: 'London', correct: false },
            { text: 'New York', correct: false },
        ]
    },
    {
        question: `The oldest continuously inhabited city in the world is?`,
        answers: [ 
            { text: 'Damascus', correct: false },
            { text: 'Kairo', correct: false },
            { text: 'Baghdad', correct: false },
            { text: 'Paris', correct: false },
        ]
    }
];