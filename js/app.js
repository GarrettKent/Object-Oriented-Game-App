//I made it to where each time the 'Start Game' button is clicked, a new game would appear.
let game = new Game();
document.getElementById('btn__reset').addEventListener('click', function() {
    game.startGame()
}); 
//I allowed for the letters to be clicked on so they could do what's needed from them in my handleInteraction method.
document.getElementById('qwerty').addEventListener('click', function(event){
    game.handleInteraction(event.target);
});