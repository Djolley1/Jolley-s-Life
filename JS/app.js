/*
  Function name: hiMyNameIs
  Parameters: None
  Output: None
  Return: Tell my name
*/

function hiMyNameIs() {
    let meetNewPerson = prompt("What is your name?");
    if( meetNewPerson ) {
        document.write("Nice to meet you! I'm Dee.")
      return "Nice to meet you! I'm Dee.";
    } else {
        document.write("Well, nice too meet you anyways.")
      return "Well, nice too meet you anyways.";
    }
  }

hiMyNameIs()





function favoriteMeal() {

  let numberOfGuesses = 0;

  while ( numberOfGuesses < 3 ) {
    let answer = prompt("What is your favorite meal?");
    if( answer != "pizza" ) {
      alert("Terrible taste!");
      numberOfGuesses++;
    }
    else {
      alert("Great choice!");
      break;
    }
  }
  document.write("Pizza is awexome!")
}
favoriteMeal()