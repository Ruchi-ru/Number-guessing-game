const minNum= 1;
const maxNum= 100;
const answer= Math.floor(Math.random()*(maxNum - minNum +1 ))+ minNum;

let running= true;
let attempts = 0;
let guess;

while(running){
  guess= window.prompt(`Enter a number between ${minNum} - ${maxNum}`);
  guess = Number(guess);
  
  if(isNaN(guess))
    {
      window.alert(`Enter valid number`);
    }
    else if(guess < minNum || guess > maxNum){
      window.alert(`Enter valid number`);
    }
    else{
      attempts++;
      if (guess > answer){
        window.alert(`Number is lower than ${guess}`);
      }
      else if(guess < answer){
        window.alert(`Number is higher than ${guess}`);
      }
      else{
        window.alert(`Your answer is ${answer} You guessed it in ${attempts} attempts`);
      running = false;
    }
  }
  }
