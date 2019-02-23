//Analog 04 = LM34 Temperature Sensor / I2C SDA
const five = require("johnny-five");
const board = new five.Board();

board.on("ready", function () {

    // Access the temperature sensor on pin A0
    const thermometer = new five.Thermometer({
        controller: "LM34",
        pin: "A4",
        freq: 1000
    });

    // Data event listener with callback function
    // Will capture incoming sensor readings
    thermometer.on("data", function () {

        // Callback has readings in celsius, fahrenheit and kelvin
        console.log(this.celsius + "°C");
        console.log(this.fahrenheit + "°F");
        console.log(this.kelvin + "°K");
        console.log("========");
    });
});
