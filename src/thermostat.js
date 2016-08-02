"use strict";

function Thermostat() {
  this.DEFAULT_TEMP = 20;
  this._temperature = this.DEFAULT_TEMP;
  this.MIN_TEMP = 10;
  this.MAX_TEMP = 25;
  this.MAX_TEMP_PSM_ON = 25;
  this.MAX_TEMP_PSM_OFF = 32;
  this._powerMode = true;
}
Thermostat.prototype =   {
  temperature: function(){
    return this._temperature;
  },

  tempUp: function() {
    if (this._temperature < this.MAX_TEMP){
        this._temperature += 1;
    }

  },

  tempDown: function() {
    if (this._temperature > this.MIN_TEMP) {
      this._temperature -= 1;
    }
  },

  reset: function() {
    this._temperature = this.DEFAULT_TEMP;
  },

  powerMode: function() {
    return this._powerMode;

  },

  setPowerMode: function(mode) {
    this._powerMode = mode;
    if (mode === true ) {
      this.MAX_TEMP = this.MAX_TEMP_PSM_ON;
    }
    else {
      this.MAX_TEMP = this.MAX_TEMP_PSM_OFF;
    }
  },

  colour: function() {
    if (this._temperature < 18) {
      return "green";
    } else if (this._temperature < 25) {
      return "yellow";
    } else {
      return "red";
    }
  }
};
