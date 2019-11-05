// Trying to figure out how to add an element.
// Starting with the timer and what happens when it ends.

$(document).ready(function() {

    var correct = 0;
    var incorrect = 0;
    var unanswered = 8;
    var questionIndex = 0;
    var optionsIndex = 0;

    var questions = [
        { q: "Is Franchesca always wrong?", options: ["Yes","Yes","Definitely","Totally","Completely"], correct: "2" },
        { q: "Is Franchesca NAAAAAASTY?", options: ["Yes","The option before","Uh-huh","mmhmm","Of course"], correct: "1" },
        // { q: "There are 42 ounces in a pound.", options: ["1","2","3","4","5"], correct: "4" },
        // { q: "The Declaration of Independence was created in 1745.", options: ["1","2","3","4","5"], correct: "3" },
        // { q: "Bananas are vegetables.", options: ["1","2","3","4","5"], correct: "5" }    
      ];

    $("#start-button").on("click", function() {
        // Make button disappear after being clicked
        $("#start-button").remove();

        var textcenter = $(".text-center")

        $("<div id='time'></div><br>").appendTo(textcenter);

        for (questionIndex = 0; questionIndex < questions.length; questionIndex++ ) {
            textcenter.append("<div id='question" + questionIndex + "'><h2>" + questions[questionIndex].q + "</h2></div><br>")
            var currentQuestion = $("#question" + questionIndex)
            for (optionsIndex = 0; optionsIndex < (questions[questionIndex].options).length; optionsIndex++) {
                currentQuestion.append('<input type="radio" name="radiobutton' + questionIndex + '" value="' + questions[questionIndex].options[optionsIndex] +'"><p>' + questions[questionIndex].options[optionsIndex] + '</p><br>')
            }
        }

// **********************************************
        // Create a for loop that will create divs for each one of the elements in the array.
        // $("<div></div>").appendTo(textcenter);
        // Within the div created with a single question create a for loop to create radio buttons from another array with the possible options.
        // <input type="radio" name="radiobutton[0]" value="a"><br>
// *********************************************

        // ----------- Time Remaining ------------ \\
        //  Seconds to answer questions:
        var timeremaining = 40;

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

        //  The decrement function.
        function decrement() {

            //  Decrease number by one.
            timeremaining--;

            //  Show the number in the #show-number tag.
            $("#time").html("<h2> Time remaining: " + timeremaining + "</h2>");

        
        //  Once number hits zero...
            if (timeremaining === 0) {

                $(textcenter).html("<h3>All Done!</h3><br>");

                $(textcenter).append("<div id='correct'><h5>Correct Answers: " + correct + "</h5></div>");
                
                $(textcenter).append("<div id='incorrect'><h5>Incorrect Answers: " + incorrect + "</h5></div>");
                
                $(textcenter).append("<div id='unanswered'><h5>Unanswered: " + unanswered + "</h5></div>");
                //  ...run the stop function.
                stop();
                // 
                // ADD HERE WHAT HAPPENS WHEN TIME IS UP OR WHEN THE USER 
            }
        }

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