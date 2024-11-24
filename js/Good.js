class Good extends Phaser.Scene {
    constructor() {
        super({ key: 'Good' });
    }

    preload() {
        // Load the background and glow images
        this.load.image('cabinBackground', 'assets/images/Cabin_001.png');
        this.load.image('glow_01', 'assets/images/glow_01.png');
        this.load.image('glow_02', 'assets/images/glow_02.png');

        // Load the sound
        this.load.audio('correctSound', 'assets/sounds/Correct.mp3');
    }

    create() {
        // Add a small delay before playing the Correct sound
        this.time.delayedCall(1000, () => {
            // Play the Correct sound after the transition delay
            this.sound.play('correctSound');
        });

        // Display the background image
        const background = this.add.image(0, 0, 'cabinBackground').setOrigin(0, 0);

        // Display the first glow image in the same position as the cabin background
        const glow = this.add.image(0, 0, 'glow_01').setOrigin(0, 0);
        glow.setScale(
            background.width / glow.width,
            background.height / glow.height
        );

        // Create a tween to switch between glow_01 and glow_02
        this.time.addEvent({
            delay: 500, // Change image every 500ms
            loop: true,
            callback: () => {
                // Alternate between glow_01 and glow_02
                if (glow.texture.key === 'glow_01') {
                    glow.setTexture('glow_02');
                } else {
                    glow.setTexture('glow_01');
                }
            },
        });

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
