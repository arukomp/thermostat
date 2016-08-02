"use strict";

describe("Thermostat", function() {
  var thermostat;
  beforeEach(function(){
    thermostat = new Thermostat();
  });

  it ("starts at 20 degrees", function() {
    expect(thermostat.getCurrentTemperature()).toEqual(thermostat.DEFAULT_TEMP);
  });

  it ("increase the temperature by pushing the up button",function() {
      thermostat.up();
      expect(thermostat.getCurrentTemperature()).toEqual(21);
  });

  it ("decreases the temperature", function() {
    thermostat.down();
    expect(thermostat.getCurrentTemperature()).toEqual(19);
  })

  it ("has a minimum temperature of 10 degrees", function() {
    for(var i = 1; i <= 10; i++) {
      thermostat.down();
    }
    thermostat.down();
    expect(thermostat.getCurrentTemperature()).toEqual(thermostat.MIN_TEMP);
  })

  it ("has a power mode and it is on by default",function(){
    expect(thermostat.isPowerSavingModeOn()).toEqual(true);
  })

  it("can switch the power mode off", function() {
    thermostat.switchPowerSavingModeOff();
    expect(thermostat.isPowerSavingModeOn()).toBe(false);
  })

  it("can switch the power saving mode back on again", function() {
    thermostat.switchPowerSavingModeOff();
    expect(thermostat.isPowerSavingModeOn()).toBe(false);
    thermostat.switchPowerSavingModeOn();
    expect(thermostat.isPowerSavingModeOn()).toBe(true);
  })

  it("has max degrees 25 if power mode is on",function(){
    for(var i = 0; i<5; i++) {
      thermostat.up();
    }
    thermostat.up();
    expect(thermostat.getCurrentTemperature()).toEqual(25);

  })

  it ("has max degrees of 32 if power mode is off", function() {
    thermostat.switchPowerSavingModeOff();
    for(var i = 0; i < 12; i++) {
      thermostat.up();
    }
    thermostat.up();
    expect(thermostat.getCurrentTemperature()).toEqual(32);
  })

  it("can reset the temperature to 20", function() {
    thermostat.up();
    thermostat.resetTemperature();
    expect(thermostat.getCurrentTemperature()).toEqual(thermostat.DEFAULT_TEMP);
  })

  describe("usage levels", function() {
    it("is green when below 18 temp", function() {
      thermostat.temperature = 17;
      expect(thermostat.colour()).toEqual("low-usage");
    })
    it("is yellow when below 25 temp", function() {
      expect(thermostat.colour()).toEqual("medium-usage");
    })
    it("is red when above 24 temp", function() {
      thermostat.temperature = 26;
      expect(thermostat.colour()).toEqual("high-usage");
    })
  })

});
