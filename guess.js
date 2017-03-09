var word=["F","O","X"];
var guessedLetter=["","",""];
var count=0;
window.onload=function(){
               var button= document.getElementById("guess");
               button.onclick= processGuess;
              };
function processGuess()
{
 var guessInput= document.getElementById("guessInput");
 var guess= guessInput.value.toUpperCase();
 guessLetter(guess);
 guessInput.value="";
}

function guessLetter(guess)
{  
   var id;
   for(var i=0; i<word.length; i++)
    {
      if(guess == word[i])
       {
         guessedLetter[i]=guess;
          id= "" + i;
          console.log(id);
          count++;
          display(id,guess);
       }
     }
   console.log(count);
   if(count==word.length) 
   {
     alert("Congratulations. You Won!");
   }
}

function display(id,guess)
{
var cell= document.getElementById(id);
cell.innerHTML= guess;
alert("You found a letter!");
}
