
$(document).ready(function(){
	
	/*--- Display information modal box ---*/
  	$(".what").click(function(){
    	$(".overlay").fadeIn(1000);

  	});

  	/*--- Hide information modal box ---*/
  	$("a.close").click(function(){
  		$(".overlay").fadeOut(1000);
  	});







  // Variables
  var inputStr="";
  var secretNumber = Math.floor((Math.random() * 100) + 1);
    console.log("The secret number is: " + secretNumber);
  var userValue=0;
  var numberOfGuess = 0;
  var guesses = [];
  document.getElementById('userGuess').focus();

  //Execute Game
  function guess () {
    $('#guessButton').click(game);
    $(document).keydown(function (e) {
            if (e.keyCode == 13) {
                game();
            }
        });
    }
    guess();
  
  function game() {
    var userValue = parseInt($('#userGuess').val());
    validate(userValue);

    $('#userGuess').val('');
    guesses.push(userValue);
    console.log(guesses);
    numberOfGuess += 1;
    $('#count').text(numberOfGuess);
    // $('#guessList').html('<li>' + guesses + '</li><br>');
    guessList();
    feedback(userValue);
           document.getElementById('userGuess').focus();
  };

// Validate number entry
  function validate(e) {
    if (e >= 1 && e <= 100){
      return;
    } else
    alert('Please enter a number between 1 and 100.');
  }

// Text userInput vs secret number and return feedback
  function feedback(num) {
    var distance = Math.abs(secretNumber - num);
   
    if (distance > 50) {
      $('#feedback').text('Ice Cold!');
    } else if (30 <= distance && distance <= 50) {
      $('#feedback').text('Cold');
    } else if (20 <= distance && distance <= 30) {
      $('#feedback').text('Warm');
    } else if (10 <= distance && distance <= 20) {
       $('#feedback').text('Hot');
    }else if (1 <= distance && distance <= 10) {
       $('#feedback').text('Very Hot!');
    } else
       $('#feedback').text('You got it!');
  };

// Pulls guessed numbers from string and adds them to the guess list
  function guessList() {
    var numGuess = ""
    for (i = 0; i < guesses.length; i += 1){
      numGuess += ("<li>" + guesses[i] + "</li>");
      $('#guessList').html(numGuess);
    }
    return;
  }
  

  //Reset Game
    $('.new').click(function(e) {
      e.preventDefault();
      secretNumber = Math.floor((Math.random() * 100) + 1);
      console.log("The secret number is: " + secretNumber);
      numberOfGuess = 0;
      guesses = [];
      $('.guessBox').text('');
      $('#feedback').text("Make your Guess!");
      $('#userGuess').text("Enter your Guess");
      $('#count').text("0");
      document.getElementById('userGuess').focus();
    });

});


