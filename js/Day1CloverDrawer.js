class Day1CloverDrawer extends Phaser.Scene {
    constructor() {
        super({ key: 'Day1CloverDrawer' });
    }

    preload() {
        // Load the 3 images for selection
        this.load.image('clover1', 'assets/images/clover1.png');
        this.load.image('clover2', 'assets/images/clover2.png');
        this.load.image('clover3', 'assets/images/clover3.png');
    }

    create() {
        const canvasWidth = this.game.config.width;
        const canvasHeight = this.game.config.height;

        // Set up the background color to white
        this.cameras.main.setBackgroundColor('#736785');

        // Define the spacing and center the images equally
        const spacing = 600; // Adjust this value for the desired spacing
        const offsetX = 50; // Move the images right by half an inch (approximately 50px)
        const startX = (canvasWidth - (spacing * 2)) / 2 + offsetX; // Center the images and adjust position

        // Create 3 images for the player to choose from, spaced equally
        const imageObj1 = this.add.image(startX, canvasHeight / 2, 'clover1').setInteractive();
        const imageObj2 = this.add.image(startX + spacing, canvasHeight / 2, 'clover2').setInteractive();
        const imageObj3 = this.add.image(startX + spacing * 2, canvasHeight / 2, 'clover3').setInteractive();

        // Set up pointer events for each image
        imageObj1.on('pointerdown', () => this.handleSelection(1)); // Clover 1 is correct
        imageObj2.on('pointerdown', () => this.handleSelection(2)); // Clover 2 is incorrect
        imageObj3.on('pointerdown', () => this.handleSelection(3)); // Clover 3 is incorrect
    }

    handleSelection(selectedId) {
        // The correct item is Clover 1 (for this example)
        const correctItem = 1;

        // If Clover 1 is selected, go to the 'Good' scene
        if (selectedId === correctItem) {
            this.scene.start('Good'); // Go to the Good scene
        } else {
            // If an incorrect clover is selected, stay in the current scene
            this.scene.start('Day1CloverDrawer'); // Stay in this scene
        }
    }
}
