//I created my Phrase class with the neccessary parameter and property.
class Phrase {
    constructor(phrase){
        this.phrase = phrase.toLowerCase();
    }
    //Display phrase on game board
    addPhraseToDisplay(){
        for (let i = 0; i < this.phrase.length; i+=1){      
            const list = document.createElement('li');
            list.textContent = this.phrase[i];
            list.textContent.split('');
            if (this.phrase[i] === ' ') {
                list.className = `space`;
            } else {
                list.className = `hide letter ${list.textContent}`;
            }
            const phraseContainer = document.getElementById('phrase');
            phraseContainer.querySelector('ul').appendChild(list);
        };
    };
    /**
* Checks if passed letter is in phrase
* @param (string) letter - Letter to check
*/
checkLetter(letter) {
    return (this.phrase.includes(letter)) ? true : false;
    }
     /**
* Displays passed letter on screen after a match is found
* @param (string) letter - Letter to display
*/
showMatchedLetter(letter) {
    const theList = document.getElementById('phrase').firstElementChild.children;
    for(let i = 0; i < theList.length; i+=1){
        if(theList[i].textContent === letter){
            theList[i].classList.add('show');
            theList[i].classList.remove('hide');
        }
    };   
    };   
}