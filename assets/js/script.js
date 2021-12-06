//Quiz Questions
const dataQuiz = [
    {
        question: 'On what date was the pilot episode "pilot" aired?',
        a: '4 September 2012',
        b: '24 September 2009',
        c: '17 September 2011',
        d: '24 September 2007',
        correct: 'd'
    }, {
        question: 'In which season did Raj get over his anxiety of speaking to girls?',
        a: 'Season 3',
        b: 'Season 6',
        c: 'Season 7',
        d: 'Season 5',
        correct: 'c'
    }, {
        question: 'In which season did Penny and Leonard first engage in "coitus"?',
        a: 'Season One, The Middle Earth Paradigm',
        b: 'Season Five, The Recombination Hypothesis',
        c: 'Season Six, The 43 Peculiarity',
        d: 'Season Four, The 21-Second Excitation',
        correct: 'b'
    }, {
        question: "Which apartment number was Leonard and Sheldon's apartment?",
        a: '4B',
        b: '3B',
        c: '4A',
        d: '5B',
        correct: 'a'
    }, {
        question: 'How many languages did Howard Wolowitz speak?',
        a: 'Three',
        b: 'One',
        c: 'Six',
        d: 'Two',
        correct: 'c'
    }, {
        question: 'From which state was Leonard Hofstadter originally from?',
        a:'Texas',
        b:'Nebraska',
        c:'California',
        d:'New Jersey',
        correct: 'd'
    }, {
        question: "What was Raj's father's profession?",
        a: "Orthodontist",
        b: "Dentist",
        c: "Pediatrist",
        d: "Gynecologist",
        correct: "d"
    }, {
        question: 'In which season Sheldon propose to Amy after being kissed by former olympic swimmer, Dr. Ramona Nowitzki?',
        a: 'Season 10',
        b: 'Season 8',
        c: 'Season 7',
        d: 'Season 11',
        correct: 'a'
    }, {
        question: 'How many doctorates does Sheldon Cooper have?',
        a: 'Five',
        b: 'Three',
        c: 'One',
        d: 'Two',
        correct: 'd'
    }, {
        question: 'At what age did Sheldon Coopper receive a doctorate?',
        a: 'Eleven years old',
        b: 'Sixteen years old',
        c: 'Twenty one years old',
        d: 'Eighteen years old',
        correct: 'b'
    }, {
        question: 'How many biological siblings does Sheldon have?',
        a: '1 sibling',
        b: '3 siblings',
        c: '4 siblings',
        d: '2 siblings',
        correct: 'd'
    }
]

const quiz = document.getElementById('quiz');
const quizAns = document.querySelectorAll('.answer');
const questionElement = document.getElementById('quizQuestion');
const a_answer = document.getElementById('a_answer');
const b_answer = document.getElementById('b_answer');
const c_answer = document.getElementById('c_answer');
const d_answer = document.getElementById('d_answer');
const submitButton = document.getElementById('submit-button');

let currentQuiz = 0;
// scoretracker
let score = 0;

loadQuiz();

function loadQuiz(){
    const currentQuizData = dataQuiz[currentQuiz];
    resetAns();
    questionElement.innerText = currentQuizData.question;
    
    a_answer.innerText = currentQuizData.a;
    b_answer.innerText = currentQuizData.b;
    c_answer.innerText = currentQuizData.c;
    d_answer.innerText = currentQuizData.d;

    // currentQuestion++;
}

// tells quiz that answer is required
function answerRequired(){
    let answer = undefined;
    quizAns.forEach((quizAnsEl) => {
        if (quizAnsEl.checked){
            answer = quizAnsEl.id;
        } else {
            // continue from here TO DO make it that it IS checked
            submitButton.addEventListener(alert("You need to select an answer before moving on"));
        }
    });
    return answer;
}

// resets the quiz answers
function resetAns(){
    quizAns.forEach((quizAnsEl) =>{
        quizAnsEl.checked = false;
    });
}

//submits the chosen answer/s
submitButton.addEventListener('click', () => {
    const answer = answerRequired();

    if (answer) {
        if (answer === dataQuiz[currentQuiz].correct){
            score++
        }
    currentQuiz++ 
    if (currentQuiz < dataQuiz.length){
        loadQuiz();
    } else {
        // restart button & score
        quiz.innerHTML = `
        <h2>Wow, you answered an astonishing ${score} out of ${dataQuiz.length} correctly.</h2>
        <button onclick="location.reload()">Click here to start again</button>
        `
      } 
    }
});

// if score => certain number then innerHTML = BLah Blah. if not then blah blah