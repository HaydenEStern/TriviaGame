// create a timer that counts down when a question is loaded
// select one question/answer set from a bank of questions and display it
// if correct answer is selected, display "correct answer", wait a few seconds, display new question, reset timer
// store correct answer
// if an incorrect answer is selected, display "incorrect answer", wait, display actual correct answer, display new question, reset timer
// store incorrect answer
// if timer runs out, display "time's up", display actual correct answer, display new question, reset timer
// store as incorrect answer
// when all questions are completed, display correct and incorrect answers

// create a bank of questions. these should be objects, so that the question and answer can be stored in the same object
// store correctAnswer as a variable inside the object (but declare globally)

var correctAnswer;
var activeQuestion = {};

var questionBank = [{

        question: "Which type of shorebird has a distinctive upwardly curved bill?",
        answers: ["albatross", "sandpiper", "avocet", "tern"],
        giveAnswer: function() {
            correctAnswer = this.answers[2];
            console.log(correctAnswer);
        }

    },

    {

        question: "Which urban bird is best classified as feral and not wild?",
        answers: ["crow", "wren", "parrot", "pigeon"],
        giveAnswer: function() {
            correctAnswer = this.answers[3];
            console.log(correctAnswer);
        }
    },

    {

        question: "Which bird has the same brain to body ratio as a primate?",
        answers: ["crow", "golden eagle", "snowy owl", "African grey parrot"],
        giveAnswer: function() {
            correctAnswer = this.answers[0];
            console.log(correctAnswer);
        }
    },

    {

        question: "Which bird eats bones and dyes itself the color of blood?",
        answers: ["Andean condor", "lammergeier", "crested carcara", "secretary bird"],
        giveAnswer: function() {
            correctAnswer = this.answers[1];
            console.log(correctAnswer);
        }
    },

    {

        question: "What kind of bird does the term 'passerine' refer to?",
        answers: ["songbird", "flightless bird", "open ocean bird", "migratory bird"],
        giveAnswer: function() {
            correctAnswer = this.answers[0];
            console.log(correctAnswer);
        }
    }
];

//selects a random question from the question bank array and assigns the object to the activeQuestion variable
    // loop through the array indices
  //  for (i = 0; i > questionBank.length; i--) {
    	var selectQuestion = function() {
        var randomIndex = Math.floor(Math.random() * questionBank.length);
        activeQuestion = questionBank[randomIndex];
        // display the question and its possible answers in the DOM
        $("#question").text(activeQuestion.question);
        for (j = 0; j < activeQuestion["answers"].length; j++) {
            $("#answers").append("<div>" + activeQuestion.answers[j] + "</div>");
        };


        // start a timer for length that the question can be displayed
        // if the user clicks correct answer, display "correct answer", wait a few seconds, display new question, reset timer
        // store correct answer
        // if an incorrect answer is selected, display "incorrect answer", wait, display actual correct answer, display new question, reset timer
        // store incorrect answer
        // if timer runs out, display "time's up", display actual correct answer, display new question, reset timer
        // store as incorrect answer
        // removes the question from the list of available questions	
        questionBank.splice(randomIndex, 1);
 //   };
        console.log(activeQuestion);
        console.log(questionBank);

    };
    // if the length of the questionBank array = 0, display correct and incorrect answers

//begin game upon clicking start button
$("#start").on("click", function() {
	selectQuestion();

});