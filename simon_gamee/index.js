const buttonColours = ["red", "blue", "green", "yellow"];
let gamePattern = [];
let userClickedPattern = [];
let started = false;
let level = 0;

$(document).keydown(function() {

    if(!started) {
        $('#level-title').html('Level ' + level);
        nextSequence();
        started = true;
    }

})

$(".btn").click(function() {

    var userChosenColour = $(this).attr("id");
    userClickedPattern.push(userChosenColour);

    playSound(userChosenColour);
    pressedAnimation(userChosenColour);

    checkAnswer(userClickedPattern.length-1);

})


function playSound(name) {

    const audio = new Audio(`./sounds/${name}.mp3`);
    audio.play();

}

function pressedAnimation(currentColour) {

    $('#' + currentColour).click(function() {

        $('#' + currentColour).addClass('pressed');

        setTimeout(() => {
            $('#' + currentColour).removeClass('pressed');
        }, 100)

    })

}

function startOver() {

    started = false;
    level = 0;
    gamePattern = [];

}

function checkAnswer(currentLevel) {
    console.log(gamePattern, userClickedPattern)


    if(gamePattern[currentLevel] === userClickedPattern[currentLevel]) {

        if (userClickedPattern.length === gamePattern.length) {

            setTimeout(function () {
              nextSequence();
            }, 1000);
    
        }
        
    }

    else {

        playSound('wrong');

        $('#level-title').html('Game-Over, Press Any Key to Restart');

        $('body').addClass('game-over');
        setTimeout(() => {
            $('body').removeClass('game-over');
        }, 200);
        
        startOver();

    }

}

function nextSequence() {

    userClickedPattern = [];

    level++;
    $('#level-title').html('Level ' + level);
    
    const randomNumber = Math.floor(Math.random() * 4);
    let randomColour = buttonColours[randomNumber];
    gamePattern.push(randomColour);

    // animation when the new sequence starts
    $('.' + randomColour).fadeOut('fast').fadeIn('fast');

    // play sound according with the button clicked
    playSound(randomColour);
  
}
