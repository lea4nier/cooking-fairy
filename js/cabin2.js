class Cabin2 extends Phaser.Scene {
    constructor() {
        super({ key: 'Cabin2' });
    }

    preload() {
        // Load the Cabin1 background image
        this.load.image('cabinBackground', 'assets/images/Cabin_001.png');
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



    }


}
