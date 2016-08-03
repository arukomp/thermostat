'use strict';

function Thermostat(){
  this.DEFAULT_TEMPERATURE = 20;
  this._temperature = this.DEFAULT_TEMPERATURE;
  this.MINIMUM_TEMPERATURE = 10;
  this.powerSavingMode = true;
  this.MAX_LIMIT_PSM_ON = 25;
  this.MAX_LIMIT_PSM_OFF = 32;
  this.MEDIUM_ENERGY_USAGE_LIMIT = 18;

}

Thermostat.prototype.down = function() {
  if (this.isMinimumTemperature()){
    return;
  } else {
    this._temperature -= 1;
  }
}

Thermostat.prototype.up = function() {
  if (this.isMaximumTemperature()) {
    return;
  }
  this._temperature += 1;
}

Thermostat.prototype.getCurrentTemperature = function() {
  return this._temperature;
}

Thermostat.prototype.isMaximumTemperature = function() {
  if (this.isPowerSavingModeOn() === false) {
    return this._temperature === this.MAX_LIMIT_PSM_OFF;
  }
  return this._temperature === this.MAX_LIMIT_PSM_ON;
}

Thermostat.prototype.isMinimumTemperature = function(){
  return this._temperature === this.MINIMUM_TEMPERATURE;
}

Thermostat.prototype.isPowerSavingModeOn = function() {
  return this.powerSavingMode === true;
}

Thermostat.prototype.switchPowerSavingModeOff = function() {
  return this.powerSavingMode = false;
}

Thermostat.prototype.switchPowerSavingModeOn = function() {
  return this.powerSavingMode = true;
}

Thermostat.prototype.resetTemperature = function() {
  this._temperature = this.DEFAULT_TEMPERATURE;
}

Thermostat.prototype.energyUsage = function() {
  if (this._temperature < this.MEDIUM_ENERGY_USAGE_LIMIT){
    return 'low-usage';
  }
  if (this._temperature >= this.MEDIUM_ENERGY_USAGE_LIMIT && this._temperature <= this.MAX_LIMIT_PSM_ON){
    return 'medium-usage';
  }
  return 'high-usage';

}
