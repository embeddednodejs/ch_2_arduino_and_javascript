// The Firmata protocol provides a simple protocol to an embedded system
var Board = require('firmata');


// pin definitions
const LED = 5;
const POT = 0;

// init variables
var ledOn = 0;  // whether LED is ON or OFF
var delay = 0;  // blink delay

function map(x, in_min, in_max, out_min, out_max)
{
    return (x - in_min) * (out_max - out_min) / (in_max - in_min) + out_min;
}

// make connection
Board.requestPort(function(error, port) {

  if (error) {
     console.log(error);
     return; 
  }

  var board = new Board(port.comName);

  // wait for connection
  board.on("ready", function() {

    function blink() {
      board.digitalWrite(LED, ledOn);
      ledOn = !ledOn;
      setTimeout(blink, delay);
    }

    // update variable
    board.analogRead(0, function(d) {
      delay = map(d, 0, 1023, 400, 1600);
    });

    blink();
  });
});
