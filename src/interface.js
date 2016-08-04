'use strict';

$( document ).ready(function() {

  $('#select-city').submit(function(event){
    event.preventDefault();
    var city = $("#current-city").val();
    displayWeather(city);
  });

  function updateTemperature(){
    $('#temperature').text(thermostat.temperature) + "˚C";
    $('#temperature').attr('class', thermostat.EnergyUsage());
  };

  function displayWeather(city){
    var url = 'http://api.openweathermap.org/data/2.5/weather?q=' + city;
    var token = '&appid=bcebb95329f7ace43020439afcb4e214';
    var units = '&units=metric';
    $.get(url + token + units, function(data) {
      $('#current-temperature').text(data.main.temp) +"C";
    });
  };

  var thermostat = new Thermostat();
  updateTemperature();

  $('#temp-up').on('click', function(){
    thermostat.up();
    updateTemperature();
  });

  $('#temp-down').click(function(){
    thermostat.down();
    updateTemperature();
  });

  $('#temp-reset').click(function(){
    thermostat.resetTemperature();
    updateTemperature();
  });

  $('#power-saving-on').click(function(){
    thermostat.switchPowerSavingModeOn();
    $('#power-saving-status').text('ON');
    $('#power-saving-status').attr('class', thermostat.PowerSaving());
  });

  $('#power-saving-off').click(function(){
    thermostat.switchPowerSavingModeOff();
    $('#power-saving-status').text('OFF');
    $('#power-saving-status').attr('class', thermostat.PowerSaving());
  });

});
