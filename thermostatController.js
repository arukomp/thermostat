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
    $('#temperature').css('color',thermostat.getColor());
  };

  $.get('http://api.openweathermap.org/data/2.5/weather?q=London&units=metric&APPID=7f22eb9c5945899f54a9c78714e1932a', function(data){
     temp = data.main.temp;
     $('#display').text(temp);
  });

});
