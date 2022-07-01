var start = confirm("Would you like to take the quiz?");
var count = 60;
var questionEl = document.getElementById("question");
var answer1El = document.getElementById("answer1");
var answer2El = document.getElementById("answer2");
var answer3El = document.getElementById("answer3");
var answer4El = document.getElementById("answer4");
var timer = document.getElementById("timer");
var solution = ["1", "1", "1", "1", "1"];

var data = [
  (q1 = {
    question: "Question 1",
    answer1: "1",
    answer2: "2",
    answer3: "3",
    answer4: "4",
    correct: "1"
  }),
  (q2 = {
    question: "Question 2",
    answer1: "asdf",
    answer2: "fds",
    answer3: "xcs",
    answer4: "gdsf",
    correct: "1"
  }),
  (q3 = {
    question: "Question 3",
    answer1: "",
    answer2: "",
    answer3: "",
    answer4: "",
    correct: "1"
  }),
  (q4 = {
    question: "Question 4",
    answer1: "",
    answer2: "",
    answer3: "",
    answer4: "",
    correct: "1"
  }),
  (q5 = {
    question: "Question 5",
    answer1: "",
    answer2: "",
    answer3: "",
    answer4: "",
    correct: "1"
  })
];
function scoreUpdate() {
  if (data[position].correct === solution[position]) {
    score += 1;
    position += 1;
  } else {
    score += 0;
    position += 1;
  }
  console.log(score);
  return score;
}
function quizQuestions() {
  questionEl.innerText = data[position].question;
  answer1El.innerText = data[position].answer1;
  answer2El.innerText = data[position].answer2;
  answer3El.innerText = data[position].answer3;
  answer4El.innerText = data[position].answer4;
}

if (start === true) {
  var position = 0;
  var score = 0;
  var timer = setInterval(function() {
    timer.innerText = count--;
    console.log(count);
    if (count === 0 || position === 5) {
      clearInterval(timer);
      position = 5;
    }
    return count, position;
  }, 1000);
  console.log("start quiz");
  quizQuestions();

  console.log(position);
}
document.querySelector("#next").addEventListener("click", quizQuestions);
document.querySelector("#answer1").addEventListener("click", scoreUpdate);
document.querySelector("#answer2").addEventListener("click", scoreUpdate);
document.querySelector("#answer3").addEventListener("click", scoreUpdate);
document.querySelector("#answer4").addEventListener("click", scoreUpdate);

//select [0] out of questions array
//switch to next child
//tally score
