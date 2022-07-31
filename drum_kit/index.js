const drumButtons = document.querySelectorAll('.drum');

function makeSound(keyPressed) {

    switch(keyPressed) {

        case 'w':
            const crash = new Audio('./sounds/crash.mp3');
            crash.play();
            break;

        case 'a':
            const kick = new Audio('./sounds/kick-bass.mp3');
            kick.play();
            break;

        case 's':
            const snare = new Audio('./sounds/snare.mp3');
            snare.play();
            break;

        case 'd':
            const tom1 = new Audio('./sounds/tom-1.mp3');
            tom1.play();
            break;

        case 'j':
            const tom2 = new Audio('./sounds/tom-2.mp3');
            tom2.play();
            break;
        
        case 'k':
            const tom3 = new Audio('./sounds/tom-3.mp3');
            tom3.play();
            break;
        
        case 'l':
            const tom4 = new Audio('./sounds/tom-4.mp3');
            tom4.play();
            break;

        default:
            throw new Error('valid keys: [w,a,s,d,j,k,l]', './index.js');

    }

}

function buttonAnimation(keyPressed) {

    const validChars = ['w', 'a', 's', 'd', 'j', 'k', 'l'];

    if (!validChars.includes(keyPressed)) {
        return makeSound();
    }

    const buttonPlayed = document.querySelector(`.${keyPressed}`);

    // button animation
    buttonPlayed.classList.add('pressed');
    setTimeout(() => buttonPlayed.classList.remove('pressed'), 250);

}

// eventListeners for click and keypressed
// iterate over the amount of elements with the class .drum
for(let i = 0; i < drumButtons.length; i++) {
    drumButtons[i].addEventListener('click', () => {

        makeSound(drumButtons[i].innerHTML);
        buttonAnimation(drumButtons[i].innerHTML);

    });
}

addEventListener('keydown', (event) => {

    makeSound(event.key);
    buttonAnimation(event.key);

});