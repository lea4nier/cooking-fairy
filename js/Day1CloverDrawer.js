class Day1CloverDrawer extends Phaser.Scene {
    constructor() {
        super({ key: 'Day1CloverDrawer' });
    }

    preload() {
        // Preload your images for Day1CloverDrawer scene
        // this.load.image('clover1', 'assets/images/clover1.png');
        // this.load.image('clover2', 'assets/images/clover2.png');
        // this.load.image('clover3', 'assets/images/clover3.png');
    }

    create() {
        // const gameWidth = this.sys.game.config.width;
        // const gameHeight = this.sys.game.config.height;

        // const padding = 50;
        // const imageWidth = 400;
        // const imageHeight = 300;
        // const totalWidth = (imageWidth * 3) + (padding * 2);

        // const startX = (gameWidth - totalWidth) / 2;
        // const startY = gameHeight / 2 - imageHeight / 2;

        // this.add.image(startX, startY, 'clover1').setDisplaySize(imageWidth, imageHeight);
        // this.add.image(startX + imageWidth + padding, startY, 'clover2').setDisplaySize(imageWidth, imageHeight);
        // this.add.image(startX + 2 * (imageWidth + padding), startY, 'clover3').setDisplaySize(imageWidth, imageHeight);
    }
}


