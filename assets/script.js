var questionEl = document.getElementById("question");
var answer1El = document.getElementById("answer1");
var answer2El = document.getElementById("answer2");
var answer3El = document.getElementById("answer3");
var answer4El = document.getElementById("answer4");
var timer = document.getElementById("timer");
var begin = 0;
var solution = ["4", "3", "2", "1", "4"];
var position = 0;
var score = 0;
var count = 60;
var selection = "";

document.getElementById("start").addEventListener("click", startQuiz);
var data = [
  (q1 = {
    question: "What color is the sky?",
    answer1: "Orange",
    answer2: "Magenta",
    answer3: "Pink",
    answer4: "Blue"
  }),
  (q2 = {
    question: "How many leaves does poison ivy have? ",
    answer1: "1",
    answer2: "2",
    answer3: "3",
    answer4: "4"
  }),
  (q3 = {
    question: "What is your name?",
    answer1: "Lord Chance of France",
    answer2: "Sir Lancelot of Camelot",
    answer3: "Duke Luke of Puke",
    answer4: "Lady Mary of Cantebury"
  }),
  (q4 = {
    question: "What is your quest?",
    answer1: "To seek the Holy Grail",
    answer2: "To find the Last Cookie",
    answer3: "To eat a moldy snail",
    answer4: "To seek a tutor when this project is too difficult"
  }),
  (q5 = {
    question: "What is your favorite color",
    answer1: "Red",
    answer2: "Yellow",
    answer3: "Green",
    answer4: "Blue"
  })
];
function scoreUpdate() {
  if (selection === solution[position]) {
    score += 1;
    position += 1;
    console.log(score);
  } else {
    score += 0;
    position += 1;
    count -= 10;
    console.log(score);

    // count -= 10;
  }
  selection = "";
  return score, position;
}
function selectAnswer1() {
  selection = "1";
  console.log(selection);
  scoreUpdate();
  // return selection;
}
function selectAnswer2() {
  selection = "2";
  console.log(selection);
  scoreUpdate();
  // return selection;
}
function selectAnswer3() {
  selection = "3";
  console.log(selection);
  scoreUpdate();
  // return selection;
}
function selectAnswer4() {
  selection = "4";
  console.log(selection);
  scoreUpdate();
  // return selection;
}

function quizQuestions() {
  questionEl.innerText = data[position].question;
  answer1El.innerText = data[position].answer1;
  answer2El.innerText = data[position].answer2;
  answer3El.innerText = data[position].answer3;
  answer4El.innerText = data[position].answer4;
}

function quizTimer() {
  var timeInterval = setInterval(function() {
    timer.innerText = count--;
    if (count >= 0 && position < 5) {
      quizQuestions();
      begin = 1;
      console.log(position);
    } else {
      clearInterval(timeInterval);

      var points = score * count + " points";
      timer.innerText = score + "/5 correct in " + count + " seconds";
      console.log("done");
      questionEl.innerText = points;
      userName = prompt("Enter your name");
      localStorage.setItem("points", points);
      localStorage.setItem("name", userName);
    }
  }, 1000);
}
// return count, position;
function startQuiz() {
  console.log("start quiz");
  quizTimer();
}
var btn1 = answer1El.addEventListener("click", selectAnswer1);
var btn2 = answer2El.addEventListener("click", selectAnswer2);
var btn3 = answer3El.addEventListener("click", selectAnswer3);
var btn4 = answer4El.addEventListener("click", selectAnswer4);

//select [0] out of questions array
//switch to next child
//tally score
