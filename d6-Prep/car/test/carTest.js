const chai = require('chai'); // 1
const assert = chai.assert;

const shouldBuyCar = require('../shouldBuyCar.js'); // 2

// 3 describe what is expected to be tested
describe("#shouldBuyCar()", function() {

    it("should return false if it's a hatchback", function() {
      //it describes the individual test cases
      const car = {
        type: "hatchback"
      };
      const shouldBuy = shouldBuyCar(car);
      assert.isFalse(shouldBuy);
    });
    //closing the it for hatchback

    it("should return undefined when there is no car", function(){
      let car;
      const shouldBuy = shouldBuyCar(car);
      assert.isUndefined(shouldBuy);
    });

    it("should return false when there are no details about the car", function(){
      let car = {};
      const shouldBuy = shouldBuyCar(car);
      assert.isFalse(shouldBuy);
    });
    it("should return true when the car is pink", function() {
      let car = {colour: "pink"};
      const shouldBuy = shouldBuyCar(car);
      assert.isFalse(shouldBuy);
    });
    it("should return false when the car is a hatchback", function() {
      let car = {type: "hatchback"};
      const shouldBuy = shouldBuyCar(car);
      assert.isFalse(shouldBuy);
    });
    it("should return false when the car is a hatchback and pink", function() {
      let car = { 
        type: "hatchback",
        colour: "pink"};
      const shouldBuy = shouldBuyCar(car);
      assert.isFalse(shouldBuy);
    });
    it("should return true when the car has 6 litres/100km and is under or equal to $5,000", function() {
      let car = {
        litresPer100km: "6",
        price: "5000"};
      const shouldBuy = shouldBuyCar(car);
      assert.isTrue(shouldBuy);
    });
    it("should return true when the car has 11 litres/100km and is under or equal to $5,000", function() {
      let car = {
        litresPer100km: "11",
        price: "5000"};
      const shouldBuy = shouldBuyCar(car);
      assert.isTrue(shouldBuy);
    });
    it("should return false when the car has 6 litres/100km and is over $5,000", function() {
      let car = {
        litresPer100km: "6",
        price: "5001"};
      const shouldBuy = shouldBuyCar(car);
      assert.isFalse(shouldBuy);
    });
    it("should return false when the car has 11 litres/100km and is over $5,000", function() {
      let car = {
        litresPer100km: "11",
        price: "5001"};
      const shouldBuy = shouldBuyCar(car);
      assert.isFalse(shouldBuy);
    });
    it("should return false when the car has 5 litres/100km and is under or equal to $5,000", function() {
      let car = {
        litresPer100km: "5",
        price: "5000"};
      const shouldBuy = shouldBuyCar(car);
      assert.isFalse(shouldBuy);
    });
    it("should return false when the car has 12 litres/100km and is under or equal to $5,000", function() {
      let car = {
        litresPer100km: "12",
        price: "5000"};
      const shouldBuy = shouldBuyCar(car);
      assert.isFalse(shouldBuy);
    });
});
//end of describe