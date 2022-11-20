//write a function called countdown that accepts a number as a parameter and every second decrements by 1 until it reaches zero and stops.

function countdown(num) {
    let id = setInterval(function() {
        num--;
        if (num <= 0) {
            clearInterval(id);
            console.log("Done!")
        }
        else {
            console.log(num);
        }
        }, 1000);
        
}

//Write a function called randomGame that selects a random number between 0 and 1 every 1000 milliseconds and each time that a random number is picked, add 1 to a counter. If the number is greater than .75, stop the timer and console.log the number of tries it took before we found a number greater than .75.

function randomGame() {
    let attempts = 0;
    let timer = setInterval(function() {
        let gameNumber = Math.random();
        attempts++;
        if (gameNumber > 0.75) {
            clearInterval(timer);
            console.log(`It took ${attempts} attempts to win!`);
        }
        else {
            console.log(attempts);
            console.log(gameNumber);
        }
    }, 1000);
    
}
        

let randomNum;

function randomNumber() {
    randomNum = (Math.random) * 100;
    console.log(randomNum);
}