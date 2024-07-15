const start = document.querySelector('.start');
const prompt = document.querySelector('.prompt');
const timer = document.querySelector('.timer');
const score = document.querySelector('.score');
const initials = document.querySelector('.initials');
const right = document.getElementById('right')
const wrong = document.getElementById('wrong');
const results = document.getElementById('results');
const scoreboard = document.getElementById('scoreTitle');

let time = 75;
let timerId;

start.addEventListener('click', (event) => {
    event.preventDefault();
    timerId = setInterval(
        clockTick,
        1000
    );
    question1();
});

// https://www.geeksforgeeks.org/create-a-quiz-app-with-timer-using-html-css-and-javascript/
async function clockTick() {
    time--;
    timer.textContent = 'Time: ' + time;
    if (time <= 0) {
        endQuiz();
    }
}

async function endQuiz() {
    // It takes a second to adjust the timer, so stop the timer after the update
    // and set the score
    setTimeout(function () {
        clearInterval(timerId);
        score.textContent = 'Your final score is ' + time;
    }, 1000);
    prompt.style.display = 'none';
    results.style.display = 'block';

    document.querySelector('.submit').addEventListener('click', (event) => {
        event.preventDefault();
        if (initials.value == '') {
            document.getElementById('error').style.display = 'block';
        } else {
            clearResponse();
        }
    })
}

async function clearResponse() {
    right.style.display = 'none';
    wrong.style.display = 'none';
}

// Separate functions for each question
async function question1() {
    document.getElementById('title').style.display = 'none';
    document.getElementById('question1').style.display = 'block';

    // Create an array with all of the answer buttons 
    let question = document.getElementById('question1');
    let buttons = question.querySelectorAll('.selection');

    // Add listeners to each of these buttons 
    for (let i = 0; i < buttons.length; i++) {
        buttons[i].addEventListener('click', (event) => {
            if (event.target.textContent === '3. alerts') {
                document.getElementById('right').style.display = 'block';
                question2();
            } else {
                document.getElementById('wrong').style.display = 'block';
                time -= 10;
                question2();
            }
        })
    }
}

async function question2() {
    document.getElementById('question1').style.display = 'none';
    document.getElementById('question2').style.display = 'block';

    let question = document.getElementById('question2');
    let buttons = question.querySelectorAll('.selection');

    for (let i = 0; i < buttons.length; i++) {
        buttons[i].addEventListener('click', (event) => {
            if (event.target.textContent === '3. parenthesis') {
                clearResponse();
                document.getElementById('right').style.display = 'block';
                question3();
            } else {
                clearResponse();
                document.getElementById('wrong').style.display = 'block';
                time -= 10;
                question3();
            }
        })
    }
}

async function question3() {
    document.getElementById('question2').style.display = 'none';
    document.getElementById('question3').style.display = 'block';

    let question = document.getElementById('question3');
    let buttons = question.querySelectorAll('.selection');

    for (let i = 0; i < buttons.length; i++) {
        buttons[i].addEventListener('click', (event) => {
            if (event.target.textContent === '4. all of the above') {
                clearResponse();
                document.getElementById('right').style.display = 'block';
                question4();
            } else {
                clearResponse();
                document.getElementById('wrong').style.display = 'block';
                time -= 10;
                question4();
            }
        })
    }
}

async function question4() {
    document.getElementById('question3').style.display = 'none';
    document.getElementById('question4').style.display = 'block';

    let question = document.getElementById('question4');
    let buttons = question.querySelectorAll('.selection');

    for (let i = 0; i < buttons.length; i++) {
        buttons[i].addEventListener('click', (event) => {
            if (event.target.textContent === '3. quotes') {
                clearResponse();
                document.getElementById('right').style.display = 'block';
                question5();
            } else {
                clearResponse();
                document.getElementById('wrong').style.display = 'block';
                time -= 10;
                question5();
            }
        })
    }
}

async function question5() {
    document.getElementById('question4').style.display = 'none';
    document.getElementById('question5').style.display = 'block';

    let question = document.getElementById('question5');
    let buttons = question.querySelectorAll('.selection');

    for (let i = 0; i < buttons.length; i++) {
        buttons[i].addEventListener('click', (event) => {
            if (event.target.textContent === '4. console.log') {
                clearResponse();
                document.getElementById('right').style.display = 'block';
                endQuiz();
            } else {
                clearResponse();
                time -= 10;
                document.getElementById('wrong').style.display = 'block';
                endQuiz();
            }
        })
    }
}
