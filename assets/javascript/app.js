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




// background image animation
$("body").bgswitcher({
  images: ["assets/images/bg1.jpg", "assets/images/bg2.jpg", "assets/images/bg4.jpg", "assets/images/bg5.jpg"],
  interval: 10000,
});

// game function
$("#start").on("click", function() {
	$("#answers").empty();
var correctAnswer;
var activeQuestion = {};
var answeredCorrect = [];
var answeredWrong = [];
var correctCounter = 0;
var correct = [];
var displayCorrect;
var wrong = [];
var displayWrong;
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

function pause(milliseconds) {
    var dt = new Date();
    while ((new Date()) - dt <= milliseconds) { /* Do nothing */ }
};

var start = new Date;

setInterval(function() {
    $('.Timer').text(Math.round((new Date - start) / 1000, 0) + " Seconds");
}, 1000);

//selects a random question from the question bank array and assigns the object to the activeQuestion variable
// loop through the array indices
//  for (i = 0; i > questionBank.length; i--) {
var selectQuestion = function() {
    var randomIndex = Math.floor(Math.random() * questionBank.length);
    activeQuestion = questionBank[randomIndex];
    // display the question and its possible answers in the DOM

    	if (activeQuestion === undefined) {
    		// allow correct answers to be displayed at end of game
    		var showCorrect= function() {
    	for (x = 0; x < answeredCorrect.length; x++) {
    		
    		correct.push(answeredCorrect[x].question);
    		

    		    	};
    		    	displayCorrect = correct.join("<br>");
    };
    // allow wrong answers to be displayed at end of game
    	var showWrong= function() {
    	for (x = 0; x < answeredWrong.length; x++) {
    		wrong.push(answeredWrong[x].question);
    		
    		    	};
    		    	displayWrong = wrong.join("<br>");
    };
    	showCorrect();
    	showWrong();
    	$("#question").empty();
        $("#answers").html("<h2>You got " + correctCounter + "/5 correct<br>Correct Answers: </h2><p>" + displayCorrect + 
        	"</p><br><h2>Incorrect Answers: </h2><p>" + displayWrong + "</p>");
        $("#start").text("Play Again");
        $("#start").show();

    } else {
        $("#question").html("<h2>" + activeQuestion.question + "</h2>");
        for (j = 0; j < activeQuestion["answers"].length; j++) {
            $("#answers").append("<div><p>" + activeQuestion.answers[j] + "</p></div>");
        };
        activeQuestion.giveAnswer();
        questionBank.splice(randomIndex, 1);
        var count = 15;

        var counter = setInterval(timer, 1000); //1000 will  run it every 1 second

        function timer() {
            count = count - 1;
            if (count <= 0) {
                clearInterval(counter);
                answeredWrong.push(activeQuestion);
                $("#answers").empty();
                // displays "incorrect answer" inside the question div
                $("#question").html("<h2>Wrong Answer!<br>Correct answer was " + correctAnswer + "!</h2>");
                setTimeout(selectQuestion, 4000);
                return;
            }

            $("#timer").html("<p>Time Remaining: " + count + "</p>");
        };
        // allows the user to click an answer
        $("#answers").contents().on("click", function() {
            var selected = $(this).text();
            console.log(selected);
            // what happens if user selects correct answer
            if (selected === correctAnswer) {
            	//clear timer
            	clearInterval(counter);
                // pushes question to correctly answered questions array
                answeredCorrect.push(activeQuestion);
                correctCounter++;
                // removes current question and answers
                $("#answers").empty();
                // displays "correct answer" inside the question div
                $("#question").html("<h2>Correct Answer!</h2>");
                setTimeout(selectQuestion, 4000);
            } else if (selected !== correctAnswer) {
            	// clear timer
            	clearInterval(counter);
                //pushes question to incorrectly answered questions array
                answeredWrong.push(activeQuestion);
                $("#answers").empty();
                // displays "incorrect answer" inside the question div
                $("#question").html("<h2>Wrong Answer!<br>Correct answer was " + correctAnswer + "!</h2>");
                setTimeout(selectQuestion, 4000);
            };


        });
    };




};
	$("#start").hide();
	$("#timer").removeClass("hidden");
    selectQuestion();

});
