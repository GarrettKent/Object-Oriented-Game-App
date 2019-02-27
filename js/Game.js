class Game {
    constructor() {
        this.missed = 0;
        this.phrases = this.createPhrases();
        this.activePhrase = null;
    }
/**
* Creates phrases for use in game
* @return {array} An array of phrases that could be used in the game
*/
createPhrases() {
    const array = [
        new Phrase('just keep swimming'),
        new Phrase('hasta la vista baby'),
        new Phrase('stay classy san diego'),
        new Phrase('i love lamp'),
        new Phrase('thinking of phrases is tough'),
                  ];
    return array;
  };
  /**
* Selects random phrase from phrases property
* @return {Object} Phrase object chosen to be used
*/
getRandomPhrase() {
    const randomPhrase = this.phrases[Math.floor(Math.random() * this.phrases.length)];
        return randomPhrase;
    };
    /**
* Begins game by selecting a random phrase and displaying it to user
*/
startGame() {
    document.querySelector('#overlay').style.display = 'none';
    this.activePhrase = this.getRandomPhrase();
    this.activePhrase.addPhraseToDisplay();
    this.resetGame();   
    };
    /**
* Checks for winning move
* @return {boolean} True if game has been won, false if game wasn't
won
*/
checkForWin() {    
    if(document.getElementsByClassName('hide').length === 0){
       return true; 
    } return false;
    };
    /**
* Increases the value of the missed property
* Removes a life from the scoreboard
* Checks if player has remaining lives and ends game if player is out
*/
removeLife() {
    this.missed += 1;
        if(this.missed === 5){
            this.gameOver(false);
        };
        document.querySelectorAll('.tries img')[this.missed -1].src = 'images/lostHeart.png';        
    };
    /**
* Displays game over message
* @param {boolean} gameWon - Whether or not the user won the game
*/
gameOver(gameWon) {
    const overlay = document.getElementById('overlay'),
          message = document.getElementById('game-over-message');
    if (gameWon){
        overlay.style.display = '';
        overlay.className = 'win';
        message.innerHTML ='You win!';
    }else {   
        overlay.style.display = '';
        overlay.className = 'lose';
        message.innerHTML = 'You lose!';
    };
    };
    /**
* Handles onscreen keyboard button clicks
* @param (HTMLButtonElement) button - The clicked button element
*/
handleInteraction(button) {
    if (button.tagName === 'BUTTON') {
        let char = button.textContent;
        button.disabled = true;       
           if (game.activePhrase.checkLetter(char)) {
               button.className = 'chosen';
               game.activePhrase.showMatchedLetter(char);
               this.checkForWin();  
        }  else {
               button.className = 'wrong';
               this.removeLife();               
           };
       }; 
       if (this.checkForWin() === true) { 
           this.gameOver(true); 
       }; 
    };
    /***  
        I created a resetGame() method so when 'Start Game' is pressed, a new game would appear.
    The resetGame() method would be called in the StartGaem() method.
    ***/  
    resetGame() {
        const ul = document.querySelector('ul'),
              li = ul.querySelectorAll('li'),
              qwerty = document.getElementById('qwerty'),
              buttons = qwerty.querySelectorAll('button'),
              img = document.querySelectorAll('img');
        this.missed = 0;
        //I removed all of the li elements for when a new phrase would pop up and the last phrase would disappear.
        for (let i = 0; i < li.length; i+=1) {
            li[i].remove();       
        };
        //I picked whichever random phrase, then added that random phrase to the display. 
        this.activePhrase = this.getRandomPhrase();
        this.activePhrase.addPhraseToDisplay();
        //I made it when every button that was disabled previously, would now not be disabled.
        for (let i = 0; i < buttons.length; i+=1) {
            buttons[i].disabled = false;
            buttons[i].className = 'key';
        };
        //Lastly, whenever 'Start Game' would be clicked on, every heart image would be replaced with a liveHeart.
        img.forEach(image => image.src = 'images/liveHeart.png'); 
    };
};