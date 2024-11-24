class CabinEnd extends Phaser.Scene {
    constructor() {
        super({ key: 'CabinEnd' });
    }

    preload() {
        // Load the background and glow images
        this.load.image('cabinBackground', 'assets/images/Cabin_001.png');
        this.load.image('glow_01', 'assets/images/glow_01.png');
        this.load.image('glow_02', 'assets/images/glow_02.png');
    }

    create() {
        // Display the background image
        const background = this.add.image(0, 0, 'cabinBackground').setOrigin(0, 0);

        // Create a hitbox in the center of the screen
        const hitbox = this.add.rectangle(
            this.cameras.main.width / 2, // X position (center)
            this.cameras.main.height / 2, // Y position (center)
            400, // Width of the hitbox
            400, // Height of the hitbox

        );
        hitbox.setInteractive(); // Make the hitbox interactive

        // Add a click event listener to the hitbox
        hitbox.on('pointerdown', () => {
            this.scene.start('Page2'); // Transition to the Page2 scene
        });
    }
}