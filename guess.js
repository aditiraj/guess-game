var word=["Z","O","O"];
var guessedLetter=["","",""];
var count=0;
var score=100;
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
   var found=0;
   for(var i=0; i<word.length; i++)
    {
      if(guess == word[i])
       {
         guessedLetter[i]=guess;
          id= "" + i;
          console.log(id);
          count++;     
          display(id,guess);
          found++;
          
       }
  }
 displayReward(found);

  if(count==word.length) 
   {
     alert("Congratulations. You Won!");
   }
}

function display(id,guess)
{
var cell= document.getElementById(id);
cell.innerHTML= guess;
}

function displayReward(found)
{
 if(found)
   { 
    score=score+(10*found);
    alert("You found a letter!");
    alert("Your score: "+score);
   }
  else
   {
    score=score-10;
    alert("Your score: "+score);
   }  
}
