class Cabin1 extends Phaser.Scene {
    constructor() {
        super({ key: 'Cabin1' });
    }

    preload() {
        // Load the Cabin1 background image
        this.load.image('cabinBackground', 'assets/images/Cabin_001.png');

        // Load the Hearth sound
        this.load.audio('hearth', 'assets/sounds/Hearth.mp3');
    }

    create() {
        const canvasWidth = this.game.config.width;
        const canvasHeight = this.game.config.height;

        // Initialize itemsCollected to track selections
        // 0 = Day1Feather, 1 = Day1Flower, 2 = Day1CloverDrawer, etc.
        this.itemsCollected = [null, null, null];  // Placeholder for 3 item selections

        // Set up the background image and scale it proportionally to fit the screen
        const background = this.add.image(0, 0, 'cabinBackground');
        background.setOrigin(0, 0);  // Set origin to top-left corner
        background.setDisplaySize(canvasWidth, canvasHeight);  // Fit background to canvas size

        // Play the Hearth sound in a loop
        this.hearthSound = this.sound.add('hearth', { loop: true, volume: 0.5 });
        this.hearthSound.play();

        // Top-left corner hitbox (to transition to Day1Feather)
        const hitboxTopLeft = this.add.rectangle(0, 0, 300, 300, 0x000000, 0)  // invisible box
            .setOrigin(0, 0)  // Place at the top-left corner
            .setInteractive();

        hitboxTopLeft.on('pointerdown', () => {
            this.scene.start('Day1Feather');
        });

        // Top-right corner hitbox (to transition to Day1Flower)
        const hitboxTopRight = this.add.rectangle(canvasWidth - 300, 0, 300, 300, 0x000000, 0)  // invisible box
            .setOrigin(0, 0)  // Place at the top-right corner
            .setInteractive();

        hitboxTopRight.on('pointerdown', () => {
            this.scene.start('Day1Flower');
        });

        // Bottom-right corner hitbox (to transition to Day1CloverDrawer)
        const hitboxBottomRight = this.add.rectangle(canvasWidth - 300, canvasHeight - 300, 300, 300, 0x000000, 0)  // invisible box
            .setOrigin(0, 0)  // Place at the bottom-right corner
            .setInteractive();

        hitboxBottomRight.on('pointerdown', () => {
            this.scene.start('Day1CloverDrawer');
        });
    }

    // Add a method to handle updating the feedback based on selections
    updateFeedback() {
        const correctItems = this.itemsCollected.filter(item => item === 1).length;
        const incorrectItems = this.itemsCollected.filter(item => item === -1).length;

        this.selectionFeedback.setText(`Correct: ${correctItems}, Incorrect: ${incorrectItems}`);
    }

    // This can be called when transitioning back to Cabin1 after selections
    setItemSelectionResults(items) {
        this.itemsCollected = items;
        this.updateFeedback();
    }
}
