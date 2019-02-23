const five = require("johnny-five");
const board = new five.Board();

board.on("ready", function () {

    // Access pot01 on pin A0
    const potentiometer = new five.Thermometer({
        controller: "LM34",
        pin: "A0",
        freq: 1000
    });

    // Data event listener with callback function
    // Will capture incoming sensor readings
    potentiometer.on("data", function () {

        // Callback has readings in celsius, fahrenheit and kelvin
        console.log(this.celsius + "°C");
        console.log(this.fahrenheit + "°F");
        console.log(this.kelvin + "°K");
        console.log("========");
    });
});
