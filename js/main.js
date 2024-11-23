// main.js

// Start the game when the "Start Game" button is clicked
document.getElementById('start-button').addEventListener('click', () => {
    // Hide the intro screen and show the Phaser game container
    document.getElementById('intro-container').style.display = 'none';
    document.getElementById('game-container').style.display = 'block';

    // Start Phaser game with Page1 and Cabin1 scenes
    new Phaser.Game({
        type: Phaser.AUTO,
        width: 2160,
        height: 1500,
        parent: 'game-container',
        scene: [Page1, Cabin1], // List of scenes
    });
});
