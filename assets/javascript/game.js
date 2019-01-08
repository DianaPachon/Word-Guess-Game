
$(document).ready(function(){
    // Global Variables
                      var category=['colombia','serbia', 'germany', 'argentina'];

    
                      var selectedWord =" ";
                      var lettersInWord= [];
                      var numberOfBlank = 0; 
                      var blankAndSuccess =[];
                      var wrongLetter =[];
    // Game Count
                      var winCount =0;
                      var looseCount =0;
                      var guessAmount= 15;
    // Functions
                      function startGame(){
     selectedWord = category[Math.floor(Math.random()*category.length)];
     lettersInWord = selectedWord.split("");
     numberOfBlank = lettersInWord.length;


    //Reset 
                          guessAmount =15; 
                          wrongLetter =[];
                          blankAndSuccess =[];
                           
    //populate blank and success with the rignt number of blanks
                          for (var i=0; i<numberOfBlank; i++){
                              blankAndSuccess.push("_");
                       
                          }


      // Change HTML to reflect round conditions
    
        document.getElementById("blankSpaces").innerHTML = blankAndSuccess.join(" ");
        document.getElementById("numberGuesses").innerHTML = guessAmount;
        document.getElementById ("winCounter").innerHTML = winCount;



 

 
      //Testing /Debugging
     console.log(selectedWord);
     console.log(lettersInWord);
     console.log(numberOfBlank);
     console.log(blankAndSuccess);
} 
 
function checkLetters(letter){

 
    //check if the letter exist anywhere in the word
      var isLetterInWord = false;
      for (var i=0; i<numberOfBlank; i++) {
          if(selectedWord)[i] == (letter)  
             isLetterInWord = true;    
    
      }

      //check where in the word the letter exists and populate out blankAndSuccess
      if(isLetterInWord){
      for (var i=0; i<numberOfBlank; i++) {
          if(selectedWord[i] == letter)
          blankAndSuccess[i] = letter;
      } 
    }

    else{
        wrongLetter.push(letter);
        guessAmount --
    } 
 
    console.log(blankAndSuccess);
  }


function roundToComplete(){
    console.log("Win Count: " + winCount + " | Loss Count: " +  looseCount + "| Guesses Left " + guessAmount);
     
    //If user won
if(lettersInWord.toString()== blankAndSuccess.toString){
    winCount ++;
    alert("You Won!");
}

//Update the win couner in the HTML
document.getElementById ("winCounter").innerHTML = winCount;

    //If user lost 

    else if(guessAmount == 0) {
        lossCount ++;
        alert("you Lost..");
    
    }
}

startGame();


      // Initatiates the code the disrt time.
    
    document.onkeyup = function(event){
        var letterGuessed = String.fromCharCode(event.keyCode).toLowerCase();
        checkLetters(letterGuessed);
        roundToComplete();

    //Testing /Debugging

        console.log(letterGuessed);

     
    }



                      }); 