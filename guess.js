var allWords=["ZEBRA","FIX","DIAMOND","QUEEN","BUNGALOW","DEMONSTRATE"];
var guessedLetter=[];
var word;
var count=0;
var score=100;
var allGuesses=[];
var lives=6;

window.onload=function(){
              // var button= document.getElementById("guess");
              // button.onclick= processGuess;
              var button= document.getElementsByClassName("key");
              for(var i=0; i<button.length; i++)
               {
                 button[i].onclick= processGuess;
               }
              generateWord();
            };

function generateWord()
{
 var index= Math.floor(Math.random()*allWords.length);
 word= allWords[index];
 var row= document.getElementById("row");
 for(var i=0; i< word.length; i++)
  {
   guessedLetter[i]="";
   var td= document.createElement("td");
   td.id= "" + i;
   row.appendChild(td);
  }
}

function processGuess(e)
{
// var guessInput= document.getElementById("guessInput");
// var guess= guessInput.value.toUpperCase();
 var letter= e.target;
 var guess= letter.id; 
 letter.setAttribute("class","clicked");
 var enter= track(guess);
 if(enter)
 {
 guessLetter(guess);
 }
// guessInput.value="";
}

function guessLetter(guess)
{  
   var id;
   var found=0;  
  
   for(var i=0; i<word.length; i++)
    {
      if(guess == word.charAt(i))
       {
         guessedLetter[i]=guess;
          id= "" + i;
          count++;     
          display(id,guess);
          found++;  
       }
     }

var numOfLives= displayReward(found);
var livesleft= document.getElementById("chances");
livesleft.innerHTML= "Lives left: " + numOfLives;
life(numOfLives,count);
}

function display(id,guess)
{
var cell= document.getElementById(id);
cell.innerHTML= guess;
}

function displayReward(found)
{
 var scoreboard= document.getElementById("scoreboard");
 if(found)
   { 
    score=score+(10*found);
    alert("You found a letter!");
    scoreboard.innerHTML= "Score: " + score;
    return lives;
   }
  else
   {
    score=score-10;
    lives--;
    scoreboard.innerHTML= "Score: " + score;
    return lives;
   }  
}
  
function track(guess)
 {
  
  allGuesses.push(guess);
   if(allGuesses.length==1)
   {
    return true;
   }
  else{
  for(var i=0; i<allGuesses.length-1;i++)
  {
    if(guess == allGuesses[i]) 
    return false;
  }
  return true;
      }
  
  
  }

function life(numOfLives,count)
{
  if(numOfLives==0)
  {
   alert("Game Over!"); 
   window.location.reload();
  }
 else
  {
    if(count==word.length) 
     {
      alert("Congratulations. You Won!");
      window.location.reload();
     }
  }
}

