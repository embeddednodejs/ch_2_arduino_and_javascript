// The Firmata protocol provides a simple protocol to an embedded system
var Board = require('firmata');
var LED = 5;

Board.requestPort(function(error, port) {

   if (error) {
     console.log(error);
     return; 
  }

  var board = new Board(port.comName);
  board.on("ready", function() {
  // Main part

  var ledOn = true;
  // Configure pin 13 as output
  board.pinMode(LED, board.MODES.OUTPUT);

  // Blink the LED
  setInterval(function() {
        if (ledOn) {
           console.log('ON');
           board.digitalWrite(LED, board.HIGH);
        } else {
           console.log('OFF');
           board.digitalWrite(LED, board.LOW);
        }
        ledOn = !ledOn;
      }, 500);
  });
});
