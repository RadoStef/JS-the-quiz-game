let shuffledQuestions
let currentQuestionIndex
let scorePoints = 0;

const startButton = document.getElementById('start-btn');
const nextButton = document.getElementById('next-btn');
const questionContainerEl = document.getElementById('question-container');
const questionEl = document.getElementById('question');
const answerButtonsEl = document.getElementById('answer-buttons');
const welcomeEl = document.getElementById('welcome');
const factsEl = document.getElementById('answer-facts');
const scoreEl = document.getElementById('score');

startButton.addEventListener('click', startGame);
welcomeEl.classList.remove('hide');
nextButton.addEventListener('click', () => {
    currentQuestionIndex++
    setNextQuestion();
});

function startGame() {
    startButton.classList.add('hide');
    shuffledQuestions = questions.sort(() => Math.random() - .5 )
    currentQuestionIndex = 0;
    questionContainerEl.classList.remove('hide');
    welcomeEl.classList.add('hide');
    factsEl.classList.add('hide');
    setNextQuestion();
};

function setNextQuestion() {
    factsEl.classList.add('hide');
    resetState();
    showQuestion(shuffledQuestions[currentQuestionIndex]);
    answerButtonsEl.classList.remove('hide')
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
        factsEl.classList.remove('hide');
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
        element.classList.add('correct');
        factsEl.innerText = shuffledQuestions[currentQuestionIndex].fact;
        scoreEl.textContent = `Your score is ${scorePoints += 1/2}`;
        answerButtonsEl.classList.add('hide')
    } else {
        element.classList.add('wrong');
        scoreEl.textContent = `Your score is ${scorePoints}`;
        answerButtonsEl.classList.add('hide')
    }
};

function clearStatusClass(element) {
    element.classList.remove('correct');
    element.classList.remove('wrong');
};

const questions = [
    {
        question: `What country has the most natural lakes?`,
        answers: [
            { text: 'Canada', correct: true },
            { text: 'USA', correct: false},
            { text: 'Brasil', correct: false},
            { text: 'Finlandia', correct: false},
        ],
        fact: `💚 Nice try!
        ☝ Canada is the country that has the most natural lakes, with some estimates going over 2 million.Most of Canada\'s lakes were formed by glaciers. Lake Superior, though shared with the U.S., is Canada\'s—and North America\'s—largest lake.`
    },
    {
        question: `Which Central American country has a name which translates to English as “The Saviour”?`,
        answers: [
            { text: 'Panama', correct: false },
            { text: 'Guatemala', correct: false },
            { text: 'Costa Rica', correct: false },
            { text: 'El Salvador', correct: true },
        ],
        fact: `💚 Nice try!
        ☝ El Salvador, officially the Republic of El Salvador (Spanish: República de El Salvador), is a country in Central America. It is bordered on the northeast by Honduras, on the northwest by Guatemala, and on the south by the Pacific Ocean. El Salvador's capital and largest city is San Salvador. The country's population in 2022 is estimated to be 6.5 million.`
    },
    {
        question: `What's the city with the most diversity in terms of language?`,
        answers: [ 
            { text: 'Chicago', correct: false },
            { text: 'Los Angeles', correct: false },
            { text: 'London', correct: false },
            { text: 'New York', correct: true },
        ],
        fact: ` 💚 Nice try!
        ☝ Mhm... It’s not London, nor any of the metropolises of Europe.  It’s actually New York City. This city of immigrants is also the most linguistically diverse city in the world. Want to learn more? Here are 7 interesting facts about New York City and its languages. There are over 800  languages spoken in New York City.
        For reference, the most linguistically diverse country in the world is Papua New Guinea, with 820 languages. New York crams almost that many into a single city. Nowhere else comes close. Even London “only” has around 300 different languages.`
    },
    {
        question: `Which US state is Westernmost but at the same time - Easternmost?`,
        answers: [ 
            { text: 'California', correct: false },
            { text: 'Washington', correct: false },
            { text: 'Alaska', correct: true },
            { text: 'Nebraska', correct: false },
        ],
        fact: ` 💚 Nice try!
        ☝ Well... Alaska can be considered both westernmost as well as easternmost state simultaneously because there as an island in the Pacific ocean by the name “Aleutian islands” which is part of Alaska and it sits on International date Line! i.e. IDL passes through this island.
        Therefore Alaska can be called as both easternmost as well as westernmost state because on crossing IDL date changes!!`
    },
    {
        question: `How many time zones Russia has?`,
        answers: [ 
            { text: '12', correct: false },
            { text: '7', correct: false },
            { text: '9', correct: false },
            { text: '11', correct: true },
        ],
        fact: ` 💚 Nice try!
        ☝ With its 11 local times, Russia is one of the countries with the most time zones worldwide. While France and its dependencies stretch across 12 time zones, Russia holds another world record: 10 of the country's 11 time zones cover a contiguous landmass—only the Russian exclave of Kaliningrad, wedged between Lithuania and Poland, breaks that pattern.
        Russia has not observed Daylight Saving Time (DST) since it was abolished in 2011.`
    },
    {
        question: `How many islands the Phillipines has?`,
        answers: [ 
            { text: '7100', correct: true },
            { text: '6350', correct: false },
            { text: '85', correct: false },
            { text: '12003', correct: false },
        ],
        fact: ` 💚 Nice try! 
        ☝ The Philippines is located east of Vietnam and north of Indonesia and is composed of 7,641 islands which can be divided into three main island groups: Luzon, Visayas and Mindanao. Some islands have become bustling cosmopolitan cities, such as the capital Manila, Cebu and Davao.
        The islands of the Philippines, also known as the Philippine Archipelago, comprises about 7,641 islands, of which only about 2,000 are inhabited.`
    },
    {
        question: `What is the coldest place on Earth?`,
        answers: [ 
            { text: 'Syberia', correct: false },
            { text: 'Alaska', correct: false },
            { text: 'Antarctica', correct: true },
            { text: 'Taymylyr', correct: false },
        ],
        fact: ` 💚 Nice try!
        ☝ Antarctica is, on average, the coldest, driest, and windiest of the continents, and it has the highest average elevation. It is mainly a polar desert, with annual precipitation of over 200mm (8in) along the coast and far less inland.
        About 70% of the world's freshwater reserves are frozen in Antarctica, which, if melted, would raise global sea levels by almost 60 metres (200ft).
        Antarctica holds the record for the lowest measured temperature on Earth, −89.2°C (−128.6°F). The coastal regions can reach temperatures over 10°C (50°F) in summer.
        Native species of animals include mites, nematodes, penguins, seals and tardigrades. Where vegetation occurs, it is mostly in the form of lichen or moss.`
    },
    {
        question: `The oldest continuously inhabited city in the world is?`,
        answers: [ 
            { text: 'Damascus', correct: true },
            { text: 'Kairo', correct: false },
            { text: 'Baghdad', correct: false },
            { text: 'Paris', correct: false },
        ],
        fact: ` 💚 Nice try!
        ☝ Also named as the capital of Arab culture, Damascus is the oldest city in the world that has seen many of the great civilizations rise and fall. According to research studies and historical evidence, Damascus was first inhabited in the second half of the seventh millennia B.C.
        It is the oldest continuously inhabited cities in the world, and is a prominent cultural centre of the Arab world. Today Damascus is a metropolitan area with more than two million population and was named the Arab Capital of Culture in 2008.`
    }
];