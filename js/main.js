document.addEventListener('DOMContentLoaded', () => {
    // Start the Phaser game directly without needing a button click
    new Phaser.Game({
        type: Phaser.AUTO,
        width: 2160,
        height: 1500,
        parent: 'game-container',  // This is where the game will be placed
        scene: [
            Page1,             // First scene, where the game starts
            Cabin1,            // Next scene after Page1
            Day1Feather,       // Make sure this matches the name in Day1Feather.js
            Day1Flower,        // This one too
            Day1CloverDrawer,
            Good,
            Page2,
            Cabin2,
            Boil,
            CabinEnd  // This one too
        ],
        scale: {
            mode: Phaser.Scale.ScaleModes.FIT, // Fit canvas to screen
            autoCenter: Phaser.Scale.CENTER_BOTH, // Center canvas on screen
        },
    });
});
