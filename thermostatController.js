$(document).ready(function(){


  var thermostat = new Thermostat();

  // var switchPowerSavingModeOff = function() {
  //   thermostat.switchPowerSavingModeOff();
  //   $('#powerMode').text('off');
  // };

  $('#powerModeOff').click(function() {
    thermostat.switchPowerSavingModeOff();
    $('#powerMode').text('off');
  });

  // var switchPowerSavingModeOn = function() {
  //   thermostat.switchPowerSavingModeOn();
  //   $('#powerMode').text('on');
  // };

  $('#powerModeOn').click(function() {
    thermostat.switchPowerSavingModeOn();
    $('#powerMode').text('on');
  });

  // var increaseTemperature = function () {
  //   thermostat.increaseTemperature();
  //   updateTemp();
  // };

  $('#temperatureUp').click(function(){
    thermostat.increaseTemperature();
    updateTemp();
  });

  // var decreaseTemperature = function () {
  //   thermostat.decreaseTemperature();
  //   updateTemp();
  // };

  $('#temperatureDown').click(function(){
    thermostat.decreaseTemperature();
    updateTemp();
  });

  // var reset = function () {
  //   thermostat.reset();
  //   updateTemp();
  // };
  $('#temperatureReset').click(function() {
    thermostat.reset();
    updateTemp();
  });

  var updateTemp = function () {
    $('#temperature').text(thermostat.getCurrentTemperature());
  };
})
