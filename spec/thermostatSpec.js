describe("Thermostat", function() {
  var thermostat;
  beforeEach(function(){
    thermostat = new Thermostat();
  });
  it ("starts at 20 degrees", function() {
    expect(thermostat.temperature()).toEqual(20);
  });

  it ("increase the temperature by pushing the up button",function() {
      thermostat.tempUp();
      expect(thermostat.temperature()).toEqual(21);
  });







});
