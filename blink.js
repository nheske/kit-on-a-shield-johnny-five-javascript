/* 
 You have the following variables available to your script:

 io  = the firmata instance for the connected hardware
 browserbots  = namespace of APIs and controls to use in your script
 require  = subset of the NodeJS require with bundled robotics, IoT, and utility libs 
*/ 

var five = require('johnny-five');
var board = new five.Board();
board.on('ready', function(){
  // Default to pin 13
  var led = new five.Led(13);
  led.blink(2000);
});

board.on('error', function(err){
  browserbots.speak('HEY! ' + err);
});
