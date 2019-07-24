const salesTaxRates = {
  AB: 0.05,
  BC: 0.12,
  SK: 0.10,
};

const companySalesData = [
  {
    name: "Telus",
    province: "BC",
    sales: [ 100, 200, 400 ]
  },
  {
    name: "Bombardier",
    province: "AB",
    sales: [ 80, 20, 10, 100, 90, 500 ]
  },
  {
    name: "Telus",
    province: "SK",
    sales: [ 500, 100 ]
  }
];

const calculateSalesTax = function(salesData, taxRates) {
  result = {};
  var initialValue = 0;
  var totalSales = 0;
  var totalTaxes = 0;
  for (var i = 0; i < salesData.length; i++) {
    switch(salesData[i].province) {
      case "AB": salesData[i].taxes = calculateTax(salesData[i].sales, taxRates.AB); break;
      case "BC": salesData[i].taxes = calculateTax(salesData[i].sales, taxRates.BC); break;
      case "SK": salesData[i].taxes = calculateTax(salesData[i].sales, taxRates.SK); break;
    default: break;
    }
    salesData[i].totalSales = salesData[i].sales.reduce(function (accumulator, currentValue) { return accumulator + currentValue;},initialValue);
    salesData[i].totalTaxes = salesData[i].taxes.reduce(function (accumulator, currentValue) { return accumulator + currentValue;},initialValue);
  }
  //console.log(salesData);
var groupedComp = sumIf(salesData, 'name');
console.log(groupedComp);
  return undefined;
}

const sumIf = function (objectArray, property) {
  result = {};

  for(i = 0; i < objectArray.length; i++) {
    var key = objectArray[i][property];
    //console.log(i + key);
    if (!result[key]) {
      result[key] = {};
      result[key].totalSales = objectArray[i].totalSales;
      result[key].totalTaxes = objectArray[i].totalTaxes;
    } else {
    result[key].totalSales += objectArray[i].totalSales;
    result[key].totalTaxes += objectArray[i].totalTaxes;
    }
    //console.log(result);
  }

    return result;
}
const calculateTax = function(salesData, taxRate) {
  let taxes = [];

  for (var i = 0; i < salesData.length; i++) {
    taxes[i] = Math.round(salesData[i] * taxRate * 100)/100;
  }
  return taxes;
}

/* test case */
calculateSalesTax(companySalesData, salesTaxRates)