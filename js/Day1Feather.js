// Day1Feather.js
class Day1Feather extends Phaser.Scene {
    constructor() {
        super({ key: 'Day1Feather' });
    }

    preload() {
        // Preload your images
        this.load.image('image1', 'assets/images/feather1.png');
        this.load.image('image2', 'assets/images/feather2.png');
        this.load.image('image3', 'assets/images/feather3.png');
    }

    create() {
        // Get the game dimensions
        const gameWidth = this.sys.game.config.width;
        const gameHeight = this.sys.game.config.height;

        // Calculate positions for images to be next to each other
        const padding = 50; // space between images
        const imageWidth = 400; // set the width for the images
        const imageHeight = 300; // set the height for the images
        const totalWidth = (imageWidth * 3) + (padding * 2); // width for 3 images with padding

        // Position the images centrally on the screen
        const startX = (gameWidth - totalWidth) / 2; // center images horizontally
        const startY = gameHeight / 2 - imageHeight / 2; // center images vertically

        // Add the three images
        this.add.image(startX, startY, 'image1').setDisplaySize(imageWidth, imageHeight);
        this.add.image(startX + imageWidth + padding, startY, 'image2').setDisplaySize(imageWidth, imageHeight);
        this.add.image(startX + 2 * (imageWidth + padding), startY, 'image3').setDisplaySize(imageWidth, imageHeight);
    }
}


