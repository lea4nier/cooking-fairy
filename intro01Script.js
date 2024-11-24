(() => {
    const textElement = document.getElementById('text-text');
    const nextButton = document.getElementById('image-button');
    const clickSound = document.getElementById('click-sound');

    const text = `After several days of travel, you see a familiar sight appear in the distance. Your grandmother’s cabin.\n\nYou used to stay there during harvest season, spending quality time with your grandmother and the forest.\n\nYour parents would share a knowing look and a silent chuckle whenever you returned home, filled with stories of fairies, magic, and the strange wonders of the forest next door. But you always swore it felt real.\n\nNow, decades later, you’re back with only one thing on your mind: Peace. Rest. A chance to breathe. And maybe, just maybe, to see if those childhood memories were more than just the musings of an overactive imagination...`     
    
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

