"use strict";

function Thermostat() {
  this.DEFAULT_TEMP = 20;
  this.temperature = this.DEFAULT_TEMP;
  this.MIN_TEMP = 10;
  this.MAX_TEMP_PSM_ON = 25;
  this.MAX_TEMP_PSM_OFF = 32;
  this.powerSavingMode = true;
}
Thermostat.prototype =   {
  getCurrentTemperature: function(){
    return this.temperature;
  },

  up: function() {
    if (!this.isMaximumTemperature()){
      this.temperature += 1;
    }
  },

  down: function() {
    if (!this.isMinimumTemperature()) {
      this.temperature -= 1;
    }
  },

  resetTemperature: function() {
    this.temperature = this.DEFAULT_TEMP;
  },

  isMinimumTemperature: function() {
    return this.temperature <= this.MIN_TEMP;
  },

  isMaximumTemperature: function() {
    if (this.isPowerSavingModeOn() === true) {
      return this.temperature === this.MAX_TEMP_PSM_ON;
    }
    return this.temperature === this.MAX_TEMP_PSM_OFF;
  },

  isPowerSavingModeOn: function() {
    return this.powerSavingMode === true;

  },

  switchPowerSavingModeOff: function() {
    this.powerSavingMode = false;
  },

  switchPowerSavingModeOn: function() {
    this.powerSavingMode = true;
  },

  colour: function() {
    if (this.temperature < 18) {
      return "low-usage";
    } else if (this.temperature < 25) {
      return "medium-usage";
    } else {
      return "high-usage";
    }
  }
};
