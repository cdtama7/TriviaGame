// Trying to figure out how to add an element.
// Starting with the timer and what happens when it ends.

$(document).ready(function() {

    var correct = 0;
    var incorrect = 0;
    var unanswered = 0;
    var questionIndex = 0;
    var optionsIndex = 0;

    var questions = [
        { q: "1. Who proposed the four stages of cognitive development?", options: ["a. Skinner","b. Freud","c. Piaget","d. Watson"], correct: ["incorrect","incorrect","correct","incorrect"] },
        { q: "2. If the child clings to its mother and is distressed by separation, the observed type of attachment is:", options: ["a. Secure", "b. Anxious-resistant", "c. Anxious-avoidant", "d. Disorganized"] , correct: ["incorrect","correct","incorrect","incorrect"] },
        { q: "3. During the Milgram experiment, participants:", options: ["1","2","3","4","5"], correct: ["incorrect","correct","incorrect","incorrect","incorrect"] },
        { q: "4. Schizophrenia was previously called:", options: ["1","2","3","4","5"], correct: ["incorrect","correct","incorrect","incorrect","incorrect"] },
        { q: "5. The psychosexual stages proposed by Freud are (in order) :", options: ["1","2","3","4","5"], correct: ["incorrect","correct","incorrect","incorrect","incorrect"] },
        { q: "6. One of the essential criteria used to diagnose Antisocial Personality Disorder is:", options: ["1","2","3","4","5"], correct: ["incorrect","correct","incorrect","incorrect","incorrect"] },
        { q: "7. The syndrome in which the person believes he/she is already dead, is known as:", options: ["1","2","3","4","5"], correct: ["incorrect","correct","incorrect","incorrect","incorrect"] },
        { q: "8. Research has shown that it is harder for psychopaths to:", options: ["1","2","3","4","5"], correct: ["incorrect","correct","incorrect","incorrect","incorrect"] }
 ];

    unanswered = questions.length;

    // function checkanswers() {

    // }

    $("#start-button").on("click", function() {
        // Make button disappear after being clicked
        $("#start-button").remove();

        var textcenter = $(".text-center")

        $("<div id='time'></div><br>").appendTo(textcenter);

        for (questionIndex = 0; questionIndex < questions.length; questionIndex++ ) {
            textcenter.append("<div id='question" + questionIndex + "'><h2>" + questions[questionIndex].q + "</h2></div><br>")
            var currentQuestion = $("#question" + questionIndex)
            for (optionsIndex = 0; optionsIndex < (questions[questionIndex].options).length; optionsIndex++) {
                currentQuestion.append('<input type="radio" name="radiobutton' + questionIndex + '" value="' + questions[questionIndex].correct[optionsIndex] +'">' + questions[questionIndex].options[optionsIndex] + '<br>')
                // $(".radiobutton" + questionIndex).isSelected();
            }
        }

        $('<button id="done-button"><h2>Done!</h2></button>').appendTo(textcenter);

        
// **********************************************
        // Create a for loop that will create divs for each one of the elements in the array.
        // $("<div></div>").appendTo(textcenter);
        // Within the div created with a single question create a for loop to create radio buttons from another array with the possible options.
        // <input type="radio" name="radiobutton[0]" value="a"><br>
// *********************************************

        // ----------- Time Remaining ------------ \\
        //  Seconds to answer questions:
        var timeremaining = 45;

        //  Variable that will hold our interval ID when we execute
        //  the "run" function
        var intervalId;

        //  The run function sets an interval
        //  that runs the decrement function once a second.
        //  Clearing the intervalId prior to setting our new intervalId will not allow multiple instances.
        function run() {
            clearInterval(intervalId);
            intervalId = setInterval(decrement, 1000);
        }

        Array.from(document.querySelectorAll('input[type=radio]')).forEach(item => {
            item.addEventListener('click', e => {
            correct = document.querySelectorAll('input[type=radio][value=correct]:checked').length;
            console.log("correct:" + correct);
            incorrect = document.querySelectorAll('input[type=radio][value=incorrect]:checked').length;
            console.log("incorrect:" + incorrect);
            unanswered = questions.length - correct - incorrect;
            })
        })

        function endgame() {

                $(textcenter).html("<h3>All Done!</h3><br>");

                $(textcenter).append("<div id='correct'><h5>Correct Answers: " + correct + "</h5></div>");
                
                $(textcenter).append("<div id='incorrect'><h5>Incorrect Answers: " + incorrect + "</h5></div>");
                
                $(textcenter).append("<div id='unanswered'><h5>Unanswered: " + unanswered + "</h5></div>");

                stop();
        }
        //  The decrement function.
        function decrement() {

            //  Decrease number by one.
            timeremaining--;

            //  Show the number in the #show-number tag.
            $("#time").html("<h2> Time remaining: " + timeremaining + "</h2>");

        
        //  Once number hits zero...
            if (timeremaining === 0) {

                endgame(); 
                //  ...run the stop function.
                // 
                // ADD HERE WHAT HAPPENS WHEN TIME IS UP OR WHEN THE USER 
            }
        }

        $("#done-button").on("click", function() {

                endgame(); 
                //  ...run the stop function.

        });

        //  The stop function
        function stop() {

        //  Clears our intervalId

        clearInterval(intervalId);
        }

        //  Execute the run function.
        run();

    });
    // Start button click tag
}); 
// Document Ready tags
