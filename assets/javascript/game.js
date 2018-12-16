
//create array of words
const category = ['Colombia', 'Serbia', 'Germany', 'Argentina'];
//choose word randomly
var ranWord = Math.floor(Math.random() * category.length);
var choosenWord = category[ranWord];
//identify all letters in lowercase
choosenWord = choosenWord.toLowerCase();

if($.inArray("Colombia", ranWord)> -1){
    $(".category").text("Contries!");
//creating counter..
var counter = 15;
}


//create score based length of words
var generateUnderscore = function() {
    for (let i=0; i < choosenWord.length; i++) {
        underScore.push('_');
    }
    //console.log(underScore); 
        return underScore;
          
}

	// Draw squares for secret word & hide letters
	for(var i = 0; i < choosenWord.length; i++) {
        $('#container').append('<div class="letter ' + i + '"></div>');
        $('#container').find(":nth-child(" + (i + 1) + ")").text(choosenWord[i]);
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
    for (var i = 0; i < choosenWord.length; i++) {
        if (userGuess === choosenWord.charAt(i)) {
            $('#container').find(":nth-child(" + (i + 1) + ")").css("color", "#EFEFEF").addClass("winner");
            matchFound = true;
        }
    }

    //Check for winner
    var goodGuesses = [];
    $(".letter").each(function( index ) {
        if ( $(this).hasClass("winner") ) {
            goodGuesses.push(index);
            if (goodGuesses.length === choosenWord.length) {
                $("#container").hide();
                $("button").prop("disabled", "true");
                $(".category").text("Yeah!");
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
        $(".category").text("=( you lost! " + category);
        $(".category").append("<br><button enabled class='play-again'>Play again?</button>");
    }

    // Play again button
    $(".play-again").on("click", function(){
        location.reload();
    });

}); // End button click



var underScore=[];





 



