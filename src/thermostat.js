function Thermostat() {
  this._temperature = 20;
  this.MIN_TEMP = 10;
}
Thermostat.prototype =   {
  temperature: function(){
    return this._temperature;
  },

  tempUp: function() {
    this._temperature += 1;
  },

  tempDown: function() {
    if (this._temperature > this.MIN_TEMP) {
      this._temperature -= 1;
    }
  }

};
