class Page1 extends Phaser.Scene {
    constructor() {
        super({ key: 'Page1' });
    }

    preload() {
        // Load the background image
        this.load.image('page1', 'assets/images/Book_Day01.png');
    }

    create() {
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

        // Create a large invisible hitbox in the bottom-right corner
        const hitbox = this.add.zone(canvasWidth - 100, canvasHeight - 100, 400, 400).setOrigin(1, 1);
        hitbox.setInteractive();

        // Make the hitbox clickable to transition to the next scene
        hitbox.on('pointerdown', () => {
            this.scene.start('Cabin1');
        });
    }
}
