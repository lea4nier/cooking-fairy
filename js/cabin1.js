// Cabin1.js

class Cabin1 extends Phaser.Scene {
    constructor() {
        super({ key: 'Cabin1' });
    }

    preload() {
        // Load assets for Cabin1 scene (add images or sounds if needed)
    }

    create() {
        // Set up the text or images for the Cabin1 scene
        this.add.text(300, 250, 'Welcome to Cabin 1!', {
            font: '32px Arial',
            fill: '#ffffff',
        });
    }
}
