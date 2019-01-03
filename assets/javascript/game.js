
$(document).ready(function() {

	// variables

    var category = ['Colombia', 'Serbia', 'Germany', 'Argentina'];
    var selectedWord = " ";
    var lettersInWord = [];
    var numberOfBlank = 0;
    var blankAndSuccess = []; // will show the word and the  empty blanks ex: C _ _
    var WinnCounter = 0;
    var looseCounter = 0;
    var guessAmount = 15;

    // three functions .. 
    function startGame (){
        selectedWord = category[Math.floor(Math.random() * category.length)];
        console.log(selectedWord);
        

    
    }
    // Select a random element



    


	// Draw squares for secret word & hide letters
	for(var i = 0; i < randomWord.length; i++) {3
        $('#container').append('<div class="letter ' + i + '"></div>');
        $('#container').find(":nth-child(" + (i + 1) + ")").text(randomWordArray[i]);
        $(".letter").css("color", "#4ABDAC");
    }

	// Button click function
    var wrongGuesses = 0;
    $("button").on("click", function(){
        $(this).addClass("used");
        $(this).prop("disabled", "true");
        var matchFound = false;

        // Check if clicked letter is in secret word
        var userGuess = $(this).text();
        for (var i = 0; i < randomWord.length; i++) {
            if (userGuess === randomWord.charAt(i)) {
                $('#container').find(":nth-child(" + (i + 1) + ")").css("color", "#EFEFEF").addClass("winner");
                matchFound = true;
            }
        }

        //Check for winner
        var goodGuesses = [];
        $(".letter").each(function( index ) {
            if ( $(this).hasClass("winner") ) {
                goodGuesses.push(index);
                if (goodGuesses.length === randomWordArray.length) {
                    $("#container").hide();
                    $("button").prop("disabled", "true");
                    $(".category").text("Great job you guessed the secret word!");
                    $(".category").append("<br><button enabled class='play-again'>Play again?</button>");
                }
            }
        });

        // If no match, increase count and add appropriate image
        if (matchFound === false) {
            wrongGuesses += 1;
            $("#hangman").attr("src", "img/" + wrongGuesses + ".png");
        }

        // If wrong guesses gets to 7 exit the game
        if (wrongGuesses === 7) {
            $("#container").hide();
            $("button").prop("disabled", "true");
            $(".category").text("Sorry you lost! The secret word was " + randomWord);
            $(".category").append("<br><button enabled class='play-again'>Play again?</button>");
        }

        // Play again button
        $(".play-again").on("click", function(){
            location.reload();
        });

    }); // End button click

}); // End document.ready