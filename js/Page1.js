class Page1 extends Phaser.Scene {
    constructor() {
        super({ key: 'Page1' });
    }

    preload() {
        // Load the background image
        this.load.image('page1', 'assets/images/Book_Day01.png');

        // Load the PageFlip sound
        this.load.audio('pageFlip', 'assets/sounds/PageFlip.mp3');

        // Load the arrow image
        this.load.image('arrow', 'assets/images/arrow.png');
    }

    create() {
        // Play the PageFlip sound as soon as the scene starts
        this.sound.play('pageFlip');

        const canvasWidth = this.game.config.width;
        const canvasHeight = this.game.config.height;

        // Set up the background image and scale it to fit the canvas while maintaining aspect ratio
        const background = this.add.image(0, 0, 'page1');
        background.setOrigin(0, 0);  // Set the origin to the top-left corner

        // Scale the background proportionally to fit the canvas size
        const scaleX = canvasWidth / background.width;
        const scaleY = canvasHeight / background.height;
        const scale = Math.max(scaleX, scaleY); // Choose the larger scale to ensure it fits both width and height

        background.setScale(scale);  // Apply the scaling factor
        background.setPosition(0, 0);  // Position the background at the top-left corner

        // Create the arrow image and position it at the bottom-right corner
        const arrow = this.add.image(canvasWidth - 200, canvasHeight - 150, 'arrow'); // Adjust position based on your needs
        arrow.setOrigin(0.5, 0.5); // Set the origin to the center of the arrow

        // Make the arrow interactive
        arrow.setInteractive();

        // Add a click event listener to the arrow
        arrow.on('pointerdown', () => {
            this.scene.start('Cabin1'); // Transition to the Cabin1 scene
        });

        // Create a large invisible hitbox in the bottom-right corner (you can keep this if you want it to be invisible as well)
        const hitbox = this.add.zone(canvasWidth - 100, canvasHeight - 100, 400, 400).setOrigin(1, 1);
        hitbox.setInteractive();

        // Make the hitbox clickable to transition to the next scene
        hitbox.on('pointerdown', () => {
            this.scene.start('Cabin1');
        });
    }
}
