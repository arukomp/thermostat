'use strict';

function Thermostat () {
  this.DEFAULT_TEMPERATURE = 20;
  this.temperature = this.DEFAULT_TEMPERATURE;
  this.MINIMUM_TEMPERATURE = 10;
  this.MEDIUM_ENERGY_USAGE_LIMIT = 18;
  this.MAXIMUM_TEMPERATURE_POWERSAVE_ON = 25;
  this.MAXIMUM_TEMPERATURE_POWERSAVE_OFF = 32;
  this.PowerSavingMode = true;
}

Thermostat.prototype.getCurrentTemperature = function() {
  return this.temperature;
};

Thermostat.prototype.up = function() {
  if (this.isMaximumTemperature()) {
    return;
  }
  this.temperature ++ ;
};

Thermostat.prototype.down = function() {
  if (this.isMinimumTemperature()) {
    return;
  }
  this.temperature -- ;
};

Thermostat.prototype.resetTemperature = function(){
  this.temperature = this.DEFAULT_TEMPERATURE;
};

Thermostat.prototype.isMinimumTemperature = function(){
  return (this.temperature === this.MINIMUM_TEMPERATURE);
};

Thermostat.prototype.isPowerSavingModeOn = function(){
  return this.PowerSavingMode === true;
};

Thermostat.prototype.switchPowerSavingModeOff = function(){
  this.PowerSavingMode = false;
};

Thermostat.prototype.switchPowerSavingModeOn = function(){
  this.PowerSavingMode = true;
};

Thermostat.prototype.isMaximumTemperature = function(){
  if (this.isPowerSavingModeOn()) {
    return (this.temperature === this.MAXIMUM_TEMPERATURE_POWERSAVE_ON);
  }
  return (this.temperature === this.MAXIMUM_TEMPERATURE_POWERSAVE_OFF);
};

Thermostat.prototype.EnergyUsage = function(){
  if (this.temperature < this.MEDIUM_ENERGY_USAGE_LIMIT){
    return 'low-usage';
  }
  if (this.temperature >= this.MEDIUM_ENERGY_USAGE_LIMIT && this.temperature <= this.MAXIMUM_TEMPERATURE_POWERSAVE_ON){
    return 'medium-usage';
  }
    return 'high-usage';
};

Thermostat.prototype.PowerSaving = function(){
  if (this.PowerSavingMode === false){
    return 'power-saving-off';
  }
  if (this.PowerSavingMode === true){
    return 'power-saving-on';
  }
};
