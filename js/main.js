document.addEventListener('DOMContentLoaded', () => {
    const startButton = document.getElementById('start-button');
    if (startButton) {
        startButton.addEventListener('click', () => {
            // Hide the intro screen and show the Phaser game container
            document.getElementById('intro-container').style.display = 'none';
            document.getElementById('game-container').style.display = 'block';

            // Start Phaser game with the scenes in the correct order
            new Phaser.Game({
                type: Phaser.AUTO,
                width: 2160,
                height: 1500,
                parent: 'game-container',
                scene: [
                    Page1,             // First scene, where the game starts
                    Cabin1,            // Next scene after Page1
                    Day1Feather,       // Make sure this matches the name in Day1Feather.js
                    Day1Flower,        // This one too
                    Day1CloverDrawer,
                    Good,
                    Page2,
                    Cabin2  // This one too
                ],
                scale: {
                    mode: Phaser.Scale.ScaleModes.FIT, // Fit canvas to screen
                    autoCenter: Phaser.Scale.CENTER_BOTH, // Center canvas on screen
                },
            });
        });
    } else {
        console.log("Start button not found");
    }
});
