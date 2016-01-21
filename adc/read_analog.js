var five = require('johnny-five');
var ConvertBase = require('convert-base');

var converter = new ConvertBase();

var board = new five.Board();

board.on('ready', function() {
  var sensor = new five.Sensor('A0');
  sensor.on('data', function() {
    console.log(this.value, converter.convert(this.value, 10, 2), converter.convert(this.value, 10, 16));
  });
});
