  'use strict';

  function Thermostat() {
    this.MINIMUM_TEMPERATURE = 10;
    this.temperature = 20;
    this.PowerSavingModeOn = true;
    this.MAX_TEMP_PSM_ON = 25;
    this.MAX_TEMP_PSM_OFF = 32;
  }

  Thermostat.prototype.getCurrentTemperature = function() {
    return this.temperature;
  };

  Thermostat.prototype.increaseTemperature = function() {
    if (this.isMaximumTemperature()) {
      return;
    }
    this.temperature += 1;
  };

  Thermostat.prototype.isMinimumTemperature =  function() {
    return this.temperature === this.MINIMUM_TEMPERATURE;
  };

  Thermostat.prototype.isMaximumTemperature = function() {
    if (this.isPowerSavingModeOn()) {
      return this.temperature === this.MAX_TEMP_PSM_ON;
    }
    return this.temperature === this.MAX_TEMP_PSM_OFF;
  };

  Thermostat.prototype.decreaseTemperature = function() {
    if (this.isMinimumTemperature()) {
      return;
    }
    this.temperature -= 1;
  };

  Thermostat.prototype.isPowerSavingModeOn = function () {
    return this.PowerSavingModeOn === true;
  };

  Thermostat.prototype.switchPowerSavingModeOff = function() {
    this.PowerSavingModeOn = false;
  };

  Thermostat.prototype.switchPowerSavingModeOn = function() {
    this.PowerSavingModeOn = true;
  };

  Thermostat.prototype.reset =  function() {
    this.temperature = 20;
  };

  Thermostat.prototype.getColor = function() {
    if (this.getCurrentTemperature() < 18) {
      return 'green';
    };

    if (this.getCurrentTemperature() < 25) {
      return 'yellow';
    };
    
    return 'red';

  };
