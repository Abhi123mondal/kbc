const quizData=[
    {
        question:"How many states undergo the cancer line in india?",
        a:"7",
        b:"9",
        c:"8",
        d:"6",
        correct:"c",
    },
    {
    question:"Which of these baby of Monkey?",
    a:"foal",
    b:"colt",
    c:"infant",
    d:"calf",
    correct:"c",
    },
    {
    question:"what does fire needs to continiue?",
    a:"carbon di oxide",
    b:"mithene",
    c:"oxygen",
    d:"hydrogen",
    correct:"c",
    },
    {
    question:"which of these lives in Hive?",
    a:"bee",
    b:"bird",
    c:"spider",
    d:"snake",
    correct:"a",
    },
    {
    question:"Tower of pisa is located in which country?",
    a:"italy",
    b:"france",
    c:"germany",
    d:"spain",
    correct:"a",
    },
    {
        question:"which is the smallest state of india in terms of populations?",
        a:"goa",
        b:"sikkim",
        c:"tripura",
        d:"arunachal pradesh",
        correct:"b",
    },
    {
        question:"which of this planet nearest to the sun?",
        a:"venus",
        b:"mercury",
        c:"jupiter",
        d:"mars",
        correct:"b",
    },
];

const quiz= document.getElementById('quiz')
const answerEls = document.querySelectorAll('.answer')
const questionEl = document.getElementById('question')
const a_text = document.getElementById('a_text')
const b_text = document.getElementById('b_text')
const c_text = document.getElementById('c_text')
const d_text = document.getElementById('d_text')
const submitBtn = document.getElementById('submit')


let currentQuiz = 0
let score = 0

loadQuiz()

function loadQuiz() {

    deselectAnswers()

    const currentQuizData = quizData[currentQuiz]

    questionEl.innerText = currentQuizData.question
    a_text.innerText = currentQuizData.a
    b_text.innerText = currentQuizData.b
    c_text.innerText = currentQuizData.c
    d_text.innerText = currentQuizData.d
}

function deselectAnswers() {
    answerEls.forEach(answerEl => answerEl.checked = false)
}

function getSelected() {
    let answer
    answerEls.forEach(answerEl => {
        if(answerEl.checked) {
            answer = answerEl.id
        }
    })
    return answer
}


submitBtn.addEventListener('click', () => {
    const answer = getSelected()
    if(answer) {
       if(answer === quizData[currentQuiz].correct) {
           score++
       }

       currentQuiz++

       if(currentQuiz < quizData.length) {
           loadQuiz()
       } else {
           quiz.innerHTML = `
           <h2>You answered ${score}/${quizData.length} questions correctly</h2>

           <button onclick="location.reload()">Reload</button>
           `
       }
    }
})