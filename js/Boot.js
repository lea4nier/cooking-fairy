class Boot extends Phaser.Scene {
    constructor() {
        super({ key: 'Boot' });
    }

    preload() {
        // You can load any assets here if needed
        this.load.image('loading', 'assets/loading.png');  // Example loading screen asset
    }

    create() {
        // Setup any configurations before starting the actual game
        this.scene.start('Page1');  // Start the first scene (Page1)
    }
}

export default Boot;
