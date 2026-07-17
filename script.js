// ===========================
// EEE202 CBT SYSTEM
// Version 2.0
// ===========================

console.log("EEE202 CBT Loaded");

// ===========================
// QUIZ DATA
// ===========================

let questions = [];
let quizQuestions = [];
let currentQuestion = 0;
let userAnswers = [];
let questionTimers = [];
let flaggedQuestions = [];
let lockedQuestions = [];
let timer = null;
let timeLeft = 60;

let selectedQuiz = "data/magnetism.json";


// ===========================
// DOM ELEMENTS
// ===========================

const quizSelector = document.getElementById("quiz-selector");

const homeScreen = document.getElementById("home-screen");
const quizScreen = document.getElementById("quiz-screen");
const resultScreen = document.getElementById("result-screen");
const reviewScreen = document.getElementById("review-screen");

const startBtn = document.getElementById("start-btn");
const nextBtn = document.getElementById("next-btn");
const previousBtn = document.getElementById("previous-btn");

const reviewBtn = document.getElementById("review-btn");
const restartBtn = document.getElementById("restart-btn");
const homeBtn = document.getElementById("home-btn");

const questionCounter = document.getElementById("question-counter");
const questionText = document.getElementById("question-text");

const optionsContainer = document.getElementById("options");

const timerDisplay = document.getElementById("timer");

const progressBar = document.getElementById("progress-bar");

const scoreDisplay = document.getElementById("score-display");
const percentageDisplay = document.getElementById("percentage-display");
const gradeDisplay = document.getElementById("grade-display");

const reviewContainer = document.getElementById("review-container");

const themeToggle = document.getElementById("theme-toggle");
const flagBtn = document.getElementById("flag-btn");

// ===========================
// LOAD QUIZ LIST
// ===========================

quizBanks.forEach(function(quiz){

    const option = document.createElement("option");

    option.textContent = quiz.name;

    option.value = quiz.file;

    option.dataset.description = quiz.description;

    quizSelector.appendChild(option);

});


quizSelector.addEventListener("change",function(){

    selectedQuiz = this.value;

});

const quizInfo = document.getElementById("quiz-info");


quizSelector.addEventListener("change", function(){

    selectedQuiz = this.value;

    const selectedOption = this.options[this.selectedIndex];

    quizInfo.textContent = selectedOption.dataset.description;

});


// ===========================
// LOAD QUESTIONS FROM JSON
// ===========================

async function loadQuestions(file){

    try{

        const response = await fetch(file + "?v=" + Date.now());

        questions = await response.json();

        console.log("Loaded:", file);
        console.log(questions);

    }

    catch(error){

        console.error("Question loading failed:", error);

        alert("Could not load quiz file");

    }

}


// ===========================
// THEME
// ===========================

loadTheme();

themeToggle.addEventListener("click", toggleTheme);

function loadTheme(){

    const savedTheme = localStorage.getItem("theme");

    if(savedTheme === "dark"){

        document.body.classList.add("dark");

        themeToggle.textContent = "☀️";

    }

    else{

        themeToggle.textContent = "🌙";

    }

}

function toggleTheme(){

    document.body.classList.toggle("dark");

    if(document.body.classList.contains("dark")){

        localStorage.setItem("theme","dark");

        themeToggle.textContent = "☀️";

    }

    else{

        localStorage.setItem("theme","light");

        themeToggle.textContent = "🌙";

    }

}


// ===========================
// START QUIZ
// ===========================

startBtn.addEventListener("click", async function(){

    await loadQuestions(quizSelector.value);

    startQuiz();

});


function startQuiz(){

    quizQuestions = shuffleQuestions();

    currentQuestion = 0;

    userAnswers = new Array(quizQuestions.length).fill(null);

    questionTimers = new Array(quizQuestions.length).fill(60);

    flaggedQuestions = new Array(quizQuestions.length).fill(false);

    lockedQuestions = new Array(quizQuestions.length).fill(false);

    homeScreen.classList.add("hidden");

    quizScreen.classList.remove("hidden");

    createQuestionPalette();

    loadQuestion();

}



// ===========================
// SHUFFLE QUESTIONS
// ===========================

function shuffleQuestions(){

    return [...questions]

    .sort(() => Math.random() - 0.5)

    .map(question => ({

        question:question.question,

        options:[...question.options]

        .sort(() => Math.random() - 0.5),

        answer:question.answer,

        explanation:question.explanation

    }));

}



// ===========================
// LOAD QUESTION
// ===========================

function loadQuestion(){

    clearInterval(timer);

    timeLeft = questionTimers[currentQuestion];

    startTimer();

    const current = quizQuestions[currentQuestion];

    questionCounter.textContent =
    `Question ${currentQuestion + 1} of ${quizQuestions.length}`;

    questionText.textContent =
    current.question;

    optionsContainer.innerHTML = "";

    current.options.forEach(option=>{

        const button = document.createElement("button");

        button.className = "option";

        button.textContent = option;

        if(userAnswers[currentQuestion]===option){

            button.classList.add("selected");

        }

        button.addEventListener("click",function(){

            selectAnswer(option);

        });

        optionsContainer.appendChild(button);

    });

    updateProgress();

    updatePalette();

    flagBtn.textContent =

    flaggedQuestions[currentQuestion]

    ? "🚩 Flagged"

    : "🚩 Flag Question";

    previousBtn.disabled =
    currentQuestion===0;

    if(currentQuestion===quizQuestions.length-1){

        nextBtn.textContent="Finish";

    }

    else{

        nextBtn.textContent="Next";

    }

}



// ===========================
// SELECT ANSWER
// ===========================

function selectAnswer(answer){

    if(lockedQuestions[currentQuestion]){

        return;

    }

    userAnswers[currentQuestion] = answer;

    document

    .querySelectorAll(".option")

    .forEach(button=>{

        button.classList.remove("selected");

        if(button.textContent === answer){

            button.classList.add("selected");

        }

    });

    updatePalette();

}


// ===========================
// PROGRESS BAR
// ===========================

function updateProgress(){

    const percent =

    ((currentQuestion+1)/quizQuestions.length)*100;

    progressBar.style.width=

    percent+"%";

    document

    .querySelector(".progress")

    .setAttribute(

        "aria-valuenow",

        Math.round(percent)

    );

}



/// ===========================
// QUESTION PALETTE
// ===========================

function createQuestionPalette(){

    const palette = document.getElementById("question-palette");

    palette.innerHTML = "";

    for(let i = 0; i < quizQuestions.length; i++){

        const button = document.createElement("button");

        button.className = "palette-btn";

        button.textContent = i + 1;

        button.onclick = function(){

            jumpToQuestion(i);

        };

        palette.appendChild(button);

    }

    updatePalette();

}

function updatePalette(){

    const buttons = document.querySelectorAll(".palette-btn");

    buttons.forEach((button,index)=>{

        button.classList.remove(

            "current",

            "answered",

            "flagged",

            "locked"

        );


        if(index === currentQuestion){

            button.classList.add("current");

        }


        if(userAnswers[index] !== null){

            button.classList.add("answered");

        }


        if(flaggedQuestions[index]){

            button.classList.add("flagged");

        }


        if(lockedQuestions[index]){

            button.classList.add("locked");

        }


    });

}

// ===========================
// TIMER
// ===========================

function startTimer(){

    timerDisplay.textContent = formatTime(timeLeft);

    updateTimerStyle();

    timer = setInterval(function(){

        timeLeft--;

        questionTimers[currentQuestion] = timeLeft;

        timerDisplay.textContent = formatTime(timeLeft);

        updateTimerStyle();

        if(timeLeft <= 0){

            timeLeft = 0;

            questionTimers[currentQuestion] = 0;

            lockedQuestions[currentQuestion] = true;

            timerDisplay.textContent = formatTime(0);

            clearInterval(timer);

            nextQuestion();

        }

    },1000);

}



// ===========================
// TIMER STYLE
// ===========================

function updateTimerStyle(){

    timerDisplay.classList.remove("warning");

    timerDisplay.classList.remove("danger");

    if(timeLeft <= 15 && timeLeft > 5){

        timerDisplay.classList.add("warning");

    }

    if(timeLeft <= 5){

        timerDisplay.classList.add("danger");

    }

}



// ===========================
// FORMAT TIME
// ===========================

function formatTime(seconds){

    const mins = Math.floor(seconds / 60);

    const secs = seconds % 60;

    return `${String(mins).padStart(2,"0")}:${String(secs).padStart(2,"0")}`;

}



// ===========================
// NEXT BUTTON
// ===========================

nextBtn.addEventListener("click", nextQuestion);

function nextQuestion(){

    questionTimers[currentQuestion] = timeLeft;

    if(currentQuestion < quizQuestions.length - 1){

        currentQuestion++;

        loadQuestion();

    }

    else{

        finishQuiz();

    }

}



// ===========================
// PREVIOUS BUTTON
// ===========================

previousBtn.addEventListener("click", previousQuestion);

function previousQuestion(){

    if(currentQuestion === 0){

        return;

    }


    let targetQuestion = currentQuestion - 1;


    if(lockedQuestions[targetQuestion]){

        alert("This question has expired and cannot be accessed.");

        return;

    }


    questionTimers[currentQuestion] = timeLeft;

    currentQuestion--;

    loadQuestion();

}


// ===========================
// KEYBOARD SHORTCUTS
// ===========================

document.addEventListener("keydown",function(event){

    const key = event.key.toLowerCase();

    if(quizScreen.classList.contains("hidden")){

        return;

    }

    if(key==="arrowright"){

        nextQuestion();

    }

    if(key==="arrowleft"){

        previousQuestion();

    }

    if(key==="a"){

        clickOption(0);

    }

    if(key==="b"){

        clickOption(1);

    }

    if(key==="c"){

        clickOption(2);

    }

    if(key==="d"){

        clickOption(3);

    }

});



// ===========================
// CLICK OPTION
// ===========================

function clickOption(index){

    const buttons = document.querySelectorAll(".option");

    if(buttons[index]){

        buttons[index].click();

    }

}

// ===========================
// JUMP TO QUESTION
// ===========================

function jumpToQuestion(index){

    if(lockedQuestions[index]){

        const button = document.querySelectorAll(".palette-btn")[index];

        button.classList.add("locked");

        setTimeout(function(){

            button.classList.remove("locked");

        },500);


        alert("This question has expired and cannot be accessed.");

        return;

    }


    questionTimers[currentQuestion] = timeLeft;

    currentQuestion = index;

    loadQuestion();

}

// ===========================
// FLAG QUESTION
// ===========================

function toggleFlag(){

    flaggedQuestions[currentQuestion] =

    !flaggedQuestions[currentQuestion];


    flagBtn.textContent =

    flaggedQuestions[currentQuestion]

    ? "🚩 Flagged"

    : "🚩 Flag Question";


    updatePalette();

}

flagBtn.addEventListener("click", toggleFlag);

// ===========================
// FINISH QUIZ
// ===========================

function finishQuiz(){

    clearInterval(timer);

    quizScreen.classList.add("hidden");

    resultScreen.classList.remove("hidden");

    let score = 0;

    quizQuestions.forEach(function(question,index){

        if(userAnswers[index]===question.answer){

            score++;

        }

    });

    const percentage = Math.round(

        (score/quizQuestions.length)*100

    );

    scoreDisplay.textContent =

    `${score} / ${quizQuestions.length}`;

    percentageDisplay.textContent =

    `${percentage}%`;

    if(percentage>=90){

        gradeDisplay.textContent="🏆 Outstanding";

    }

    else if(percentage>=75){

        gradeDisplay.textContent="🌟 Excellent";

    }

    else if(percentage>=60){

        gradeDisplay.textContent="👍 Good";

    }

    else if(percentage>=40){

        gradeDisplay.textContent="🙂 Fair";

    }

    else{

        gradeDisplay.textContent="📚 Needs Improvement";

    }

}



// ===========================
// REVIEW ANSWERS
// ===========================

reviewBtn.addEventListener("click",showReview);

function showReview(){

    resultScreen.classList.add("hidden");

    reviewScreen.classList.remove("hidden");

    reviewContainer.innerHTML="";


    quizQuestions.forEach(function(question,index){


        const card = document.createElement("div");


        const correct =

        userAnswers[index] === question.answer;


        card.className = "review-card";


        if(correct){

            card.classList.add("correct");

        }

        else{

            card.classList.add("wrong");

        }



        card.innerHTML =

        `

        <h3>

        ${index+1}.

        ${flaggedQuestions[index] ? "🚩 " : ""}

        ${question.question}

        </h3>


        <p>

        Your Answer:

        <strong>

        ${userAnswers[index] || "No Answer"}

        </strong>

        ${correct ? "✅":"❌"}

        </p>


        <p>

        Correct Answer:

        <strong>

        ${question.answer}

        </strong>

        </p>


        <p>

        ${question.explanation}

        </p>


        `;


        reviewContainer.appendChild(card);


    });

}

// ===========================
// RESTART
// ===========================

restartBtn.addEventListener("click",restartQuiz);

function restartQuiz(){

    clearInterval(timer);

    currentQuestion=0;

    userAnswers=[];

    questionTimers=[];

    flaggedQuestions=[];

    resultScreen.classList.add("hidden");

    reviewScreen.classList.add("hidden");

    quizScreen.classList.add("hidden");

    homeScreen.classList.remove("hidden");

    lockedQuestions = [];

}



// ===========================
// HOME
// ===========================

homeBtn.addEventListener("click",goHome);

function goHome(){

    clearInterval(timer);

    reviewScreen.classList.add("hidden");

    quizScreen.classList.add("hidden");

    resultScreen.classList.add("hidden");

    homeScreen.classList.remove("hidden");

}



// ===========================
// SAVE PROGRESS
// ===========================

function saveProgress(){

    const data={

        currentQuestion,

        userAnswers,

        questionTimers,

        flaggedQuestions,

        lockedQuestions,

        quizQuestions

    };

    localStorage.setItem(

        "cbt-progress",

        JSON.stringify(data)

    );

}



// ===========================
// LOAD PROGRESS
// ===========================

function loadProgress(){

    const saved=

    localStorage.getItem(

        "cbt-progress"

    );

    if(!saved){

        return;

    }

    const data=

    JSON.parse(saved);

    currentQuestion=data.currentQuestion;

    userAnswers=data.userAnswers;

    questionTimers=data.questionTimers;

    flaggedQuestions=data.flaggedQuestions;

    lockedQuestions = data.lockedQuestions || [];

    quizQuestions=data.quizQuestions;

}



// ===========================
// AUTO SAVE
// ===========================

setInterval(function(){

    if(!quizScreen.classList.contains("hidden")){

        saveProgress();

    }

},3000);



// ===========================
// BEFORE PAGE CLOSE
// ===========================

window.addEventListener(

    "beforeunload",

    saveProgress

);



// ===========================
// CLEAR SAVE
// ===========================

function clearProgress(){

    localStorage.removeItem(

        "cbt-progress"

    );

}



// ===========================
// AFTER FINISH
// ===========================

const originalFinish=finishQuiz;

finishQuiz=function(){

    clearProgress();

    originalFinish();

};



// ===========================
// STARTUP
// ===========================

console.log(

    "EEE202 CBT Version 2 Ready."

);