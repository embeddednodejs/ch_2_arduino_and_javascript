// The Firmata protocol provides a simple protocol to an embedded system
var Board = require('firmata');
const LED = 5;

var brightness = 0;
var fadeAmount = 5;
Board.requestPort(function(error, port) {

  if (error) {
     console.log(error);
     return; 
  }

  var board = new Board(port.comName);
  board.on("ready", function() {

    // Configure pin as output
    board.pinMode(LED, board.MODES.PWM);
  
    // Fade the LED every 30ms
    function fadeLed() {
      brightness += fadeAmount;

      if (brightness == 0 || brightness == 255) {
        fadeAmount = -fadeAmount;
      }
      board.analogWrite(LED, brightness);
      setTimeout(fadeLed, 30);
    }
    fadeLed();
  });
});
