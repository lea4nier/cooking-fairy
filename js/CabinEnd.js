class CabinEnd extends Phaser.Scene {
    constructor() {
        super({ key: 'CabinEnd' });
    }

    preload() {
        // Load the background and glow images
        this.load.image('cabinBackground', 'assets/images/Cabin_001.png');
        // this.load.image('glow_01', 'assets/images/glow_01.png');
        // this.load.image('glow_02', 'assets/images/glow_02.png');

        // Load the arrow image
        this.load.image('arrow', 'assets/images/arrow.png');
    }

    create() {
        // Display the background image
        const background = this.add.image(0, 0, 'cabinBackground').setOrigin(0, 0);

        // Display the arrow image at the bottom center
        const arrow = this.add.image(this.cameras.main.width / 2, this.cameras.main.height - 50, 'arrow'); // Adjust 50 for the size of the arrow
        arrow.setOrigin(0.5, 1); // Set the anchor point to the bottom center

        // Make the arrow interactive
        arrow.setInteractive();

        // Add a click event listener to the arrow
        arrow.on('pointerdown', () => {
            window.location.href = 'ending.html'; // Replace with the HTML page you want to redirect to
        });

        // // Create a hitbox in the center of the screen
        // const hitbox = this.add.rectangle(
        //     this.cameras.main.width / 2, // X position (center)
        //     this.cameras.main.height / 2, // Y position (center)
        //     400, // Width of the hitbox
        //     400, // Height of the hitbox
        // );
        // hitbox.setInteractive(); // Make the hitbox interactive

        // // Add a click event listener to the hitbox
        // hitbox.on('pointerdown', () => {
        //     this.scene.start('Page2'); // Transition to the Page2 scene
        // });
    }
}
