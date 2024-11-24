class Cabin2 extends Phaser.Scene {
    constructor() {
        super({ key: 'Cabin2' });
    }

    preload() {
        // Load the background and item images
        this.load.image('cabinBackground', 'assets/images/Cabin_001.png');
        this.load.image('item1', 'assets/images/feather1.png'); // Replace with actual item image paths
        this.load.image('item2', 'assets/images/flower1.png');
        this.load.image('item3', 'assets/images/clover1.png');
    }

    create() {
        const canvasWidth = this.game.config.width;
        const canvasHeight = this.game.config.height;

        // Set up the background
        const background = this.add.image(0, 0, 'cabinBackground');
        background.setOrigin(0, 0);
        background.setDisplaySize(canvasWidth, canvasHeight);

        // Create the hitbox in the center
        const hitbox = this.add.rectangle(
            canvasWidth / 2, // Center X
            canvasHeight / 2.25, // Center Y
            400, // Width
            400, // Height
            0xff0000, // Semi-transparent red for visibility
            0.3 // Opacity
        );
        hitbox.setStrokeStyle(2, 0xffffff); // Add a white border
        hitbox.setInteractive();

        // Function to create a draggable item
        const createDraggableItem = (x, y, texture, scale) => {
            const item = this.add.image(x, y, texture).setInteractive();
            item.setScale(scale); // Scale the item
            this.input.setDraggable(item);

            // Dragging events
            item.on('drag', (pointer, dragX, dragY) => {
                item.x = dragX; // Update the item's X position
                item.y = dragY; // Update the item's Y position
            });

            // Drop events
            item.on('dragend', () => {
                if (
                    Phaser.Geom.Intersects.RectangleToRectangle(
                        item.getBounds(),
                        hitbox.getBounds()
                    )
                ) {
                    // Destroy the item if it is dropped inside the hitbox
                    item.destroy();
                }
            });

            return item;
        };

        // Create draggable items at the bottom left with scaling
        const scale = 0.4; // Adjust the scale (40% of the original size)
        const padding = 20; // Spacing between items
        const startX = 150; // Starting X position
        const startY = canvasHeight - 300; // Adjusted Y position for better visibility
        const item1 = createDraggableItem(startX, startY, 'item1', scale);
        const item2 = createDraggableItem(startX + item1.width * scale + padding, startY, 'item2', scale);
        const item3 = createDraggableItem(
            startX + 2 * (item1.width * scale + padding),
            startY,
            'item3',
            scale
        );
    }
}
