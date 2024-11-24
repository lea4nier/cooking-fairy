class CabinEnd extends Phaser.Scene {
    constructor() {
        super({ key: 'CabinEnd' });
    }

    preload() {
        // Load the cycling images for animation
        this.load.image('Good_Potion_01', 'assets/images/Good_Potion_01.png');
        this.load.image('Good_Potion_02', 'assets/images/Good_Potion_02.png');

        // Load the sound
        this.load.audio('correctSound', 'assets/sounds/Correct.mp3');

        // Load the arrow image
        this.load.image('arrow', 'assets/images/arrow.png');
    }

    create() {
        const canvasWidth = this.cameras.main.width;
        const canvasHeight = this.cameras.main.height;

        this.sound.play('correctSound');

        // Add the first frame of the cycling animation
        const background = this.add.image(0, 0, 'Good_Potion_01').setOrigin(0, 0);

        // Set up animation cycling between the two images
        let currentFrame = 0;
        const frames = ['Good_Potion_01', 'Good_Potion_02'];
        this.time.addEvent({
            delay: 500, // Cycle every 500ms (adjust for desired speed)
            loop: true,
            callback: () => {
                currentFrame = (currentFrame + 1) % frames.length; // Alternate between 0 and 1
                background.setTexture(frames[currentFrame]); // Change the texture of the background
            }
        });

        // Display the arrow image at the bottom center
        const arrow = this.add.image(canvasWidth / 2, canvasHeight - 50, 'arrow'); // Adjust 50 for the size of the arrow
        arrow.setOrigin(0.5, 1); // Set the anchor point to the bottom center

        // Make the arrow interactive
        arrow.setInteractive();

        // Add a click event listener to the arrow
        arrow.on('pointerdown', () => {
            window.location.href = 'ending.html'; // Replace with the HTML page you want to redirect to
        });
    }
}
