class Good extends Phaser.Scene {
    constructor() {
        super({ key: 'Good' });
    }

    preload() {
        // Load the background and glow images
        this.load.image('cabinBackground', 'assets/images/Cabin_001.png');
        this.load.image('glow_01', 'assets/images/glow_01.png');
        this.load.image('glow_02', 'assets/images/glow_02.png');
    }

    create() {
        // Display the background image
        const background = this.add.image(0, 0, 'cabinBackground').setOrigin(0, 0); // Position it at the top-left corner

        // Display the first glow image in the same position as the cabin background
        const glow = this.add.image(0, 0, 'glow_01').setOrigin(0, 0);
        glow.setScale(background.width / glow.width, background.height / glow.height); // Scale glow to match background size

        // Create a tween to switch between glow_01 and glow_02
        this.time.addEvent({
            delay: 500, // Change image every 500ms (adjust as needed)
            loop: true,
            callback: () => {
                // Alternate between glow_01 and glow_02
                if (glow.texture.key === 'glow_01') {
                    glow.setTexture('glow_02');
                } else {
                    glow.setTexture('glow_01');
                }
            }
        });
    }
}
