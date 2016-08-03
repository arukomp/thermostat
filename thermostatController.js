$(document).ready(function(){


  var thermostat = new Thermostat();

  $('#powerModeOff').click(function() {
    thermostat.switchPowerSavingModeOff();
    $('#powerMode').text('off');
  });

  $('#powerModeOn').click(function() {
    thermostat.switchPowerSavingModeOn();
    $('#powerMode').text('on');
  });

  $('#temperatureUp').click(function(){
    thermostat.increaseTemperature();
    updateTemp();
  });

  $('#temperatureDown').click(function(){
    thermostat.decreaseTemperature();
    updateTemp();
  });

  $('#temperatureReset').click(function() {
    thermostat.reset();
    updateTemp();
  });

  var updateTemp = function () {
    $('#temperature').text(thermostat.getCurrentTemperature());
  };
})
