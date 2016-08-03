  'use strict';

  function Thermostat() {
    this.MINIMUM_TEMPERATURE = 10;
    this.temperature = 20;
    this.isPowerSavingModeOn = true;
  }

  Thermostat.prototype.getCurrentTemperature = function() {
    return this.temperature;
  };

  Thermostat.prototype.increaseTemperature = function() {
    this.temperature += 1;
  };

  Thermostat.prototype.isMinimumTemperature =  function() {
    return this.temperature === this.MINIMUM_TEMPERATURE;
  };

  Thermostat.prototype.decreaseTemperature = function() {
    if (this.MINIMUM_TEMPERATURE()) {
      return;
    }
    this.temperature -= 1;
  };

  Thermostat.prototype.isPowerSavingModeOn = function () {
    return this.isPowerSavingModeOn === true;
  };

  Thermostat.prototype.switchPowerSavingModeOff = function() {
    this.isPowerSavingModeOn = false;
  };

  Thermostat.prototype.switchPowerSavingModeOn = function() {
    this.isPowerSavingModeOn = true;
  };
