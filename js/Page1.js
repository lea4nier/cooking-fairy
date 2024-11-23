// Page1.js

class Page1 extends Phaser.Scene {
    constructor() {
        super({ key: 'Page1' });
    }

    preload() {
        this.load.image('page1', 'assets/images/Page_1.png');
        this.load.image('arrow', 'assets/images/arrow.png');
    }

    create() {
        // Set background image for Page1 scene
        this.add.image(400, 300, 'page1').setDisplaySize(800, 600);

        // Create the arrow button
        const arrow = this.add.image(700, 500, 'arrow').setInteractive();

        // On click, transition to Cabin1 scene
        arrow.on('pointerdown', () => {
            this.scene.start('Cabin1');
        });
    }
}
