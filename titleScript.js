(() => {
    const startButton = document.getElementById('start-button');
    const clickSound = document.getElementById('click-sound');
    const glowImage = document.getElementById('animation-glow');

    // Preload the glow images
    const images = [
        'Boil_Anim_001.png',
        'Boil_Anim_002.png',
        'Boil_Anim_003.png'
    ];

    images.forEach((src) => {
        const img = new Image();
        img.src = src;
    });

    let currentImageIndex = 0;

    // Alternate between glow images every 500ms
    setInterval(() => {
        currentImageIndex = (currentImageIndex + 1) % images.length;  // Cycle through images
        glowImage.src = images[currentImageIndex];
    }, 200); // Change image every 100ms

    // Next page logic
    startButton.addEventListener('click', () => {
        clickSound.currentTime = 0.002;
        clickSound.play();
        clickSound.onended = () => {
            console.log('Next button clicked on intro01 page');
            loadNextPage(); 
        };
    });
})();