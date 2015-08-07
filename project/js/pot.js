var millisec = 0;
var seconds = 0;
var timer;

function display() {

    if (millisec >= 9) {
        millisec = 0;
        seconds += 1;
    } else
        millisec += 1;
    $('#time').text(seconds + '.' + millisec);
    //fix fullstack error, use literals with care...
    timer = setTimeout('display()', 100);
    if(seconds == 5){
        $('#time').trigger('timeout');
    }
}

function startTimer() {

    if (timer > 0) {
        return;
    }
    display();
}

function stopTimer() {
    clearTimeout(timer);
    timer = 0;
}

function startStopTimer() {
    if (timer > 0) {
        clearTimeout(timer);
        timer = 0;
    } else {
        display();
    }
}

function resetTimer() {
    millisec = 0;
    seconds = 0;
    $('#time').text(seconds + '.' + millisec);
}

$(document).keypress(function(event) {
    //console.log(event.charCode);
    if (event.charCode == 115) {
        startStopTimer();
    } else if (event.charCode == 114) {
        resetTimer();
    }
    //TODO: add "Enter" event
});
// words randomization
function shuffle(array) {
    var currentIndex = array.length,
        temporaryValue, randomIndex;

    // While there remain elements to shuffle...
    while (0 !== currentIndex) {

        // Pick a remaining element...
        randomIndex = Math.floor(Math.random() * currentIndex);
        currentIndex -= 1;

        // And swap it with the current element.
        temporaryValue = array[currentIndex];
        array[currentIndex] = array[randomIndex];
        array[randomIndex] = temporaryValue;
    }

    return array;
}
