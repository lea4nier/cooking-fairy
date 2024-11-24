(() => {
    const nextButton = document.getElementById('next-button');
    const clickSound = document.getElementById('click-sound');
        
    // Next page logic
    nextButton.addEventListener('click', () => {
        clickSound.currentTime = 0.002;
        clickSound.play();
        clickSound.onended = () => {
            console.log('Next button clicked on intro01 page');
            loadNextPage(); 
        };
    });
})();
