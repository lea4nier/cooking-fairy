class Day1Feather extends Phaser.Scene {
    constructor() {
        super({ key: 'Day1Feather' });
    }

    preload() {
        // Load the 3 images for selection
        this.load.image('feather1', 'assets/images/feather1.png');
        this.load.image('feather2', 'assets/images/feather2.png');
        this.load.image('feather3', 'assets/images/feather3.png');

        // Load the sound files
        this.load.audio('correctSound', 'assets/sounds/Click.mp3');
        this.load.audio('wrongSound', 'assets/sounds/Wrong.mp3');
    }

    create() {
        const canvasWidth = this.game.config.width;
        const canvasHeight = this.game.config.height;

        // Set up the background color to light brown
        this.cameras.main.setBackgroundColor('#D6D1BF');

        // Define the spacing and center the images equally
        const spacing = 600; // Adjust this value for the desired spacing
        const offsetX = 50; // Move the images right by half an inch (approximately 50px)
        const startX = (canvasWidth - (spacing * 2)) / 2 + offsetX; // Center the images and adjust position

        // Create 3 images for the player to choose from, spaced equally
        const imageObj1 = this.add.image(startX, canvasHeight / 2, 'feather1').setInteractive();
        const imageObj2 = this.add.image(startX + spacing, canvasHeight / 2, 'feather2').setInteractive();
        const imageObj3 = this.add.image(startX + spacing * 2, canvasHeight / 2, 'feather3').setInteractive();

        // Set up pointer events for each image
        imageObj1.on('pointerdown', () => this.handleSelection(1)); // Feather 1 is correct
        imageObj2.on('pointerdown', () => this.handleSelection(2)); // Feather 2 is incorrect
        imageObj3.on('pointerdown', () => this.handleSelection(3)); // Feather 3 is incorrect
    }

    handleSelection(selectedId) {
        // The correct item is Feather 1 (for this example)
        const correctItem = 1;

        // Play sound based on selection
        if (selectedId === correctItem) {
            this.sound.play('correctSound'); // Play "Click" sound if correct
        } else {
            this.sound.play('wrongSound'); // Play "Wrong" sound if incorrect
        }

        // Update the collected item status in the Cabin1 scene
        const cabinScene = this.scene.manager.getScene('Cabin1');
        if (selectedId === correctItem) {
            cabinScene.itemsCollected[0] = 1;  // Correct selection for Day1Feather
        } else {
            cabinScene.itemsCollected[0] = -1; // Incorrect selection
        }

        // Return to the Cabin1 scene after selection
        this.scene.start('Cabin1');
    }
}
