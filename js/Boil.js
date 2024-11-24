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

        // Display the initial boil image and scale it to cover the entire screen
        const boilImage = this.add.image(canvasWidth / 2, canvasHeight / 2, 'boil1');

        // Calculate scaling factor to cover the entire screen
        const scaleX = canvasWidth / boilImage.width;
        const scaleY = canvasHeight / boilImage.height;
        const scale = Math.max(scaleX, scaleY); // Use the larger scale to cover the screen

        boilImage.setScale(scale);

        // Timer text to display countdown
        this.timerText = this.add.text(canvasWidth / 2, 50, 'Timer: 15', {
            fontSize: '50px',
            color: '#ffffff',
            backgroundColor: '#000000',
            padding: 10
        }).setOrigin(0.5, 0.5);
        this.timerText.setVisible(false); // Hide initially

        // Add buttons at the bottom center
        const buttonPadding = 10;
        const buttonWidth = 150;

        // "Start Boil" button
        this.add.text(
            canvasWidth / 2 - buttonWidth - buttonPadding,
            canvasHeight - 100,
            'Start Boil',
            { fontSize: '20px', color: '#ffffff', backgroundColor: '#007bff', padding: 10 }
        )
            .setOrigin(0.5, 0.5)
            .setInteractive()
            .on('pointerdown', () => this.startBoilAnimation(boilImage, scale));

        // "End Boil" button
        this.add.text(
            canvasWidth / 2 + buttonWidth + buttonPadding,
            canvasHeight - 100,
            'End Boil',
            { fontSize: '20px', color: '#ffffff', backgroundColor: '#ff0000', padding: 10 }
        )
            .setOrigin(0.5, 0.5)
            .setInteractive()
            .on('pointerdown', () => this.scene.start('CabinEnd')); // Transition back to 'Cabin2' scene
    }

    startBoilAnimation(boilImage, scale) {
        const frames = ['boil1', 'boil2', 'boil3']; // Array of animation frames
        let currentFrame = 0;

        // Create a timer to cycle through the frames
        const animationTimer = this.time.addEvent({
            delay: 200, // Time in ms between frames
            loop: true,
            callback: () => {
                currentFrame = (currentFrame + 1) % frames.length; // Cycle frames
                boilImage.setTexture(frames[currentFrame]); // Update image texture
                boilImage.setScale(scale); // Ensure the image covers the screen
            }
        });

        // Countdown timer logic
        let timeLeft = 15;
        this.timerText.setVisible(true);
        this.timerText.setText(`Timer: ${timeLeft}`);
        const countdownTimer = this.time.addEvent({
            delay: 1000, // 1 second
            loop: true,
            callback: () => {
                timeLeft--;
                this.timerText.setText(`Timer: ${timeLeft}`);

                // Hide the timer text when timeLeft is 13
                if (timeLeft === 11) {
                    this.timerText.setVisible(false);
                }

                if (timeLeft <= 0) {
                    countdownTimer.remove(); // Stop countdown
                    animationTimer.remove(); // Stop boil animation
                    boilImage.setTexture('boil1'); // Reset to initial frame
                }
            }
        });
    }

}
