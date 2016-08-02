"use strict";

describe("Thermostat", function() {
  var thermostat;
  beforeEach(function(){
    thermostat = new Thermostat();
  });
  it ("starts at 20 degrees", function() {
    expect(thermostat.temperature()).toEqual(thermostat.DEFAULT_TEMP);
  });

  it ("increase the temperature by pushing the up button",function() {
      thermostat.tempUp();
      expect(thermostat.temperature()).toEqual(21);
  });

  it ("decreases the temperature", function() {
    thermostat.tempDown();
    expect(thermostat.temperature()).toEqual(19);
  })

  it ("has a minimum temperature of 10 degrees", function() {
    for(var i = 1; i <= 10; i++) {
      thermostat.tempDown();
    }
    thermostat.tempDown();
    expect(thermostat.temperature()).toEqual(thermostat.MIN_TEMP);
  })

  it ("has a power mode and it is on by default",function(){
    expect(thermostat.powerMode()).toEqual(true);
  })

  it("has max degrees 25 if power mode is on",function(){
    for(var i = 0; i<5; i++) {
      thermostat.tempUp();
    }
    thermostat.tempUp();
    expect(thermostat.temperature()).toEqual(25);

  })

  it ("has max degrees of 32 if power mode is off", function() {
    thermostat.setPowerMode(false);
    for(var i = 0; i < 12; i++) {
      thermostat.tempUp();
    }
    thermostat.tempUp();
    expect(thermostat.temperature()).toEqual(32);
  })

  it("can reset the temperature to 20", function() {
    thermostat.tempUp();
    thermostat.reset();
    expect(thermostat.temperature()).toEqual(thermostat.DEFAULT_TEMP);
  })

  describe("colours", function() {
    it("is green when below 18 temp", function() {
      thermostat._temperature = 17;
      expect(thermostat.colour()).toEqual("green");
    })
    it("is yellow when below 25 temp", function() {
      expect(thermostat.colour()).toEqual("yellow");
    })
    it("is red when above 24 temp", function() {
      thermostat._temperature = 26;
      expect(thermostat.colour()).toEqual("red");
    })
  })

});
