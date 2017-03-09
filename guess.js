var word=["FOX"];
var guessedLetter=[];
window.onload=function(){
               var button= document.getElementById("guess");
               button.onclick= processGuess;
              };
function processGuess()
{
 var guessInput= document.getElementById("guessInput");
 var guess= guessInput.value.toUpperCase();
 guessLetter(guess);
}
function guessLetter(guess)
{  
   var id;
   var count;
   for(var i=0; i<word.length; i++)
    {
      if(guess == word[i])
       {
         guessedLetter[i]=guess;
          id= "" + i;
          count++;
          display(id);
       }
     }
   if(count==word.length) 
   {
     alert("Congratulations. You Won!");
   }
}
function display(id)
{
var cell= document.getElementById(id);
cell.innerHTML= guess;
alert("You found a letter!");
}
