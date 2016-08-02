function Thermostat() {
  this._temperature = 20;
  this.MIN_TEMP = 10;
  this.MAX_TEMP = 25;
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

  powerMode: function() {
    return this._powerMode;

  },

  setPowerMode: function(mode) {
    this._powerMode = mode;
    if (mode === true ) {
      this.MAX_TEMP = 25;
    }
    else {
      this.MAX_TEMP = 32;
    }
  }
};
