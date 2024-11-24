(() => {
    const textElement = document.getElementById('text-text');
    const nextButton = document.getElementById('image-button');
    const clickSound = document.getElementById('click-sound');

    const text ='You wake up the next morning ready to take on the day repairing, cleaning and settling in for a few weeks of rest, but when you go to open the door...'        
    
    const timings = {
        baseSpeed: 40,
        periodPause: 500,
        commaPause: 300,
        colonPause: 400,
        dashPause: 400,
        variance: 0,
    };

    let index = 0;
    let typingInProgress = true;

    function typeText() {
        if (index < text.length && typingInProgress) {
            const char = text[index];
            let delay = timings.baseSpeed + Math.random() * timings.variance;

            if (char === '.') delay = timings.periodPause;
            else if (char === ',') delay = timings.commaPause;
            else if (char === ':') delay = timings.colonPause;
            else if (char === '-') delay = timings.dashPause;

            textElement.textContent += char;
            index++;

            setTimeout(typeText, delay);
        } else if (index >= text.length) {
            typingInProgress = false;
            nextButton.classList.add('show');
        }
    }

    function skipText() {
        typingInProgress = false;
        textElement.textContent = text;
        nextButton.classList.add('show');
    }

    // Start the typing animation
    typeText();

    // Allow skipping animation with a key press
    document.addEventListener('keydown', skipText);

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
