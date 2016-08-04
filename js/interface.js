// interface.js
$(document).ready(function() {
  var thermostat = new Thermostat();
  // updateTemperature();
  $.getJSON('http://localhost:4567/temperature', function(data) {
      thermostat.temperature = data.temp;
      thermostat.powerSavingMode = data.psm;
      updateTemperature();
      updatePowerMode();
      });

  $('#temp-up').click(function() {
    thermostat.up();
    updateTemperature();
  });

  $('#temp-down').click(function() {
    thermostat.down();
    updateTemperature();
  });

  $('#temp-reset').click(function() {
    thermostat.resetTemperature();
    updateTemperature();
  });

  $('#psm-on').click(function() {
    thermostat.switchPowerSavingModeOn();
    // $('#power-saving').text('on')
    updatePowerMode();
    updateTemperature();
  });

  $('#psm-off').click(function() {
    thermostat.switchPowerSavingModeOff();
    // $('#power-saving').text('off')
    updatePowerMode();
    updateTemperature();
  });

  function updateTemperature() {
    $('#temperature').text(thermostat.temperature);
    $('#temperature').attr('class', thermostat.energyUsage());
    $.post('http://localhost:4567/temperature', { temp: thermostat.temperature, psm: thermostat.isPowerSavingModeOn() }, function(){});
  }

  $('#select-city').submit(function(event) {
    event.preventDefault();
    var city = $('#current-city').val();
    displayWeather(city);
  })

  function displayWeather(city) {
    var url = 'http://api.openweathermap.org/data/2.5/weather?q=' + city;
    var token = '&appid=a3d9eb01d4de82b9b8d0849ef604dbed';
    var units = '&units=metric';
    $.get(url + token + units, function(data) {
      $('#current-temperature').text(data.main.temp);
    });
  }

  function updatePowerMode() {
    if (thermostat.isPowerSavingModeOn()) {
      $('#power-saving').text('on');
    } else {
      $('#power-saving').text('off');
    }
  }

});
