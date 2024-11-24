class Boil extends Phaser.Scene {
    constructor() {
        super({ key: 'Boil' });
    }

    preload() {
        // Load the images for the boil animation
        this.load.image('boil1', 'assets/images/Boil_Anim_001.png');
        this.load.image('boil2', 'assets/images/Boil_Anim_002.png');
        this.load.image('boil3', 'assets/images/Boil_Anim_003.png');
    }

    create() {
        const canvasWidth = this.game.config.width;
        const canvasHeight = this.game.config.height;

        // Display the initial boil image scaled to fit the canvas
        const boilImage = this.add.image(0, 0, 'boil1').setOrigin(0, 0);
        boilImage.setDisplaySize(canvasWidth, canvasHeight); // Scale to canvas size


        // Add buttons at the bottom center
        const buttonPadding = 10;
        const buttonWidth = 150;
        const buttonHeight = 50;

        // "Start Boil" button
        const startBoilButton = this.add.text(
            canvasWidth / 2 - buttonWidth - buttonPadding,
            canvasHeight - 100,
            'Start Boil',
            { fontSize: '20px', color: '#ffffff', backgroundColor: '#007bff', padding: 10 }
        )
            .setOrigin(0.5, 0.5)
            .setInteractive()
            .on('pointerdown', () => this.startBoilAnimation(boilImage));

        // "End Boil" button
        const endBoilButton = this.add.text(
            canvasWidth / 2 + buttonWidth + buttonPadding,
            canvasHeight - 100,
            'End Boil',
            { fontSize: '20px', color: '#ffffff', backgroundColor: '#ff0000', padding: 10 }
        )
            .setOrigin(0.5, 0.5)
            .setInteractive()
            .on('pointerdown', () => this.scene.start('Cabin2')); // Transition back to 'Cabin2' scene
    }

    startBoilAnimation(boilImage) {
        const frames = ['boil1', 'boil2', 'boil3']; // Array of animation frames
        let currentFrame = 0;

        // Create a timer to cycle through the frames
        const animationTimer = this.time.addEvent({
            delay: 200, // Time in ms between frames
            loop: true,
            callback: () => {
                currentFrame = (currentFrame + 1) % frames.length; // Cycle frames
                boilImage.setTexture(frames[currentFrame]); // Update image texture
            }
        });

        // Stop the animation after 3 seconds
        this.time.delayedCall(3000, () => {
            animationTimer.remove(); // Stop the timer
            boilImage.setTexture('boil1'); // Reset to the initial frame
        });
    }
}
