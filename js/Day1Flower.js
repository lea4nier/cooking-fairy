class Day1Flower extends Phaser.Scene {
    constructor() {
        super({ key: 'Day1Flower' });
    }

    preload() {
        // Load the 3 images for selection (adjust based on your assets)
        this.load.image('flower1', 'assets/images/flower1.png');
        this.load.image('flower2', 'assets/images/flower2.png');
        this.load.image('flower3', 'assets/images/flower3.png');
    }

    create() {
        const canvasWidth = this.game.config.width;
        const canvasHeight = this.game.config.height;

        // Set up the background color to white
        this.cameras.main.setBackgroundColor('#debdcf');

        // Define the spacing and center the images equally
        const spacing = 600; // Adjust this value for the desired spacing
        const offsetX = 50; // Move the images right by half an inch (approximately 50px)
        const startX = (canvasWidth - (spacing * 2)) / 2 + offsetX; // Center the images and adjust position
        // Create 3 images for the player to choose from, spaced equally
        const imageObj1 = this.add.image(startX, canvasHeight / 2, 'flower1').setInteractive();
        const imageObj2 = this.add.image(startX + spacing, canvasHeight / 2, 'flower2').setInteractive();
        const imageObj3 = this.add.image(startX + spacing * 2, canvasHeight / 2, 'flower3').setInteractive();

        // Set up pointer events for each image
        imageObj1.on('pointerdown', () => this.handleSelection(1)); // Flower 1 is correct
        imageObj2.on('pointerdown', () => this.handleSelection(2)); // Flower 2 is incorrect
        imageObj3.on('pointerdown', () => this.handleSelection(3)); // Flower 3 is incorrect
    }

    handleSelection(selectedId) {
        // The correct item is Flower 1 (for this example)
        const correctItem = 1;

        // Update the collected item status in the Cabin1 scene
        const cabinScene = this.scene.manager.getScene('Cabin1');
        if (selectedId === correctItem) {
            cabinScene.itemsCollected[2] = 1;  // Correct selection for Day1Flower
        } else {
            cabinScene.itemsCollected[2] = -1; // Incorrect selection
        }

        // Return to the Cabin1 scene after selection
        this.scene.start('Cabin1');
    }
}
