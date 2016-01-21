var five = require('johnny-five');

var board = new five.Board({
  repl: false
});

board.on('ready', function() {
  var led = new five.Led(3);
  var fading = true;

  function fadeInOut() {
    console.log(fading);
    fading = !fading;
    if (fading) {
      led.fadeIn(500);
    } else {
      led.fadeOut(500);
    }
  };

  setInterval(fadeInOut, 800);
});
