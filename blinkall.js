var five = require('johnny-five');

var board = new five.Board();


board.on('ready', function(){
  // Default to pin 13
  var led6 = new five.Led(6);
  var led7 = new five.Led(7);
  var led8 = new five.Led(8);
  var led9 = new five.Led(9);
  var led10 = new five.Led(10);
  var led11 = new five.Led(11);
  var led12 = new five.Led(12);
  var led13 = new five.Led(13);
  
  led6.blink(600);
  led7.blink(700);
  led8.blink(800);
  led9.blink(900);
  led10.blink(1000);
  led11.blink(1100);
  led12.blink(1200);
  led13.blink(1300);
});

board.on('error', function(err){
  browserbots.speak('HEY! ' + err);
});
