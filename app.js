function intro() {
  alert(`Welcome to 20! This is a competition to see which player gets closer to the number 20. You are going to be playing against the computer.
   
  You will draw numbers from 1 to 10, the computer will stop at 16.
   
  Pay attention to the screen to see what your total is, and if you need another number, press 'y'`);
  alert("Now... It is your turn.");
    
  }
  var pcwins = 0;
  var userwins = 0;
  play = 0;
  round = 1;  
   
   
   function randNum() {
   var rNum = Math.floor(Math.random() * 10) + 1;
   return rNum
   }
   
   function user() {
     var user = 0;
     alert(`Your number is ${user}`);
     var userConfirm = confirm("Draw another number?");
   
       do {
           var newNum = randNum();
           user = user + newNum
           alert(`You rolled a ${newNum}, your new total is ${user}`);
            
           if (user > 20) {
             break;
           }
           userConfirm = confirm("Draw another number?");
        
        
       } while ((userConfirm == true) && (user < 21))
         if (user > 20) {
           alert("Oops, you went over 20. The round is forfeit. Computer Wins!")
           pcwins++
         } else if (userConfirm == false) {
           alert(`Your final number was ${user}`);
         }
    return user
   }
   
  
   function pc() {
    var pc = 0;
   
    do {
     var newNum = randNum();
     pc = pc + newNum
     alert(`The computer rolled a ${newNum}, it's new total is ${pc}`);
     if (pc > 20) {
       break;
     }
   } while (pc < 16)
     if (pc < 21) {
       alert(`The computer has finished and his final number was ${pc}.`);
     } else if (pc > 20) {
       alert("Oops, Computer went over 20. The round is forfeit. You Win!")
       userwins++
     }
    return pc
  }
    
   
    
   function compareNum(human, computer) {
     if (human == computer) {
         alert(`Both you and the computer both ended with ${human}. Its a tie!`)
         userwins++
         pcwins++
     } else if (human > computer) {
         alert(`You got ${human} and PC got ${computer}. Congratulations, You Win!`)
         userwins++
     } else if (computer > human) {
         alert(`You got ${human} and PC got ${computer}. Computer Wins!`)
         pcwins++
       }
   }
   
    
  function master() {
    compareNum(user(randNum()),pc(randNum()))
    var playagain = prompt("Do you want to play again? Press 1 for yes.")
    if (playagain == "1") {
      round++
      alert(`Round ${round}!`);
      // master() // recursive function
    // when pc goes over 20 it loops comparing values even though it is over 20
      compareNum(user(randNum()),pc(randNum()))
      master()
    } 
  }
   
  intro()
  master()
  
  alert(`Thank you for playing, you played ${round} rounds and your final score was:
         Computer: ${pcwins}
         You: ${userwins}`);
  
  