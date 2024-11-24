(() => {
    const textElement = document.getElementById('text-text');
    const nextButton = document.getElementById('next-button');
    const clickSound = document.getElementById('click-sound');

    const text = `You make your way inside the cabin, the memories of falling asleep to your grandmother’s stories, waking to the scent of freshly baked bread, and the comforting sound of chicken soup simmering above the hearth, come flooding back.\n\nThen, a low rumble pulls you back to the present. You haven’t had anything substantial to eat along your journey. You light the fire, fill the cauldron with fresh rainwater, and head out toward the forest, eager to gather the herbs and ingredients for a stew of your own. You pick some familiar berries, a few savory herbs, and as dusk falls and just before you head back, you catch a glimpse of a saucer of milk that is glowing in the moonlight. You have no idea how it got there, but it smells good and you are hungry. \n\nYou get to work chopping, stirring and simmering your concoction away until at last you have created a delicious stew that would make your grandmother proud, the milk adding a familiar sweetness you hadn’t tasted since childhood.`
        
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
