(() => {
    const textElement = document.getElementById('text-text');
    const nextButton = document.getElementById('next-button');
    const clickSound = document.getElementById('click-sound');

    const text = `After several days of travel you see a familiar sight appear in the distance. The cabin where your grandmother used to watch you during the harvest season.\n\nYour parents would often share a knowing look and a silent chuckle whenever you returned home, filled with stories of fairies, magic, and the strange wonders of that place. But you always swore it felt real—at least, until you grew up and forgot about it.\n\nNow, decades later, after countless harvests of your own, you’re back with only one thing on your mind: rest. Peace. A chance to breathe, and maybe, just maybe, see if those childhood memories were more than just the musings of an overactive imagination.`
    
    const timings = {
        baseSpeed: 50,
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
