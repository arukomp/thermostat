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

  var updateWeather = function(city) {
    var url = 'http://api.openweathermap.org/data/2.5/weather?q=' + city;
    var units = '&units=metric';
    var key = '&APPID=7f22eb9c5945899f54a9c78714e1932a';
    $.get(url + units + key, function(data){
       $('#display').text(data.main.temp);
       $('#cityName').text(data.name);
    });
  };

  $('#getTemp').click(function(){
    var city = $('#city').val();
    updateWeather(city);
  });

  updateWeather("Rome");



});
