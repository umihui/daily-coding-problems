var CashAmount = function(money) {
  this.money = money; //number
  this.moneyStr = this.money.toFixed(2); //string
  this.integer = Number(this.moneyStr.split('.')[0]);
  this.decimal = Number(this.moneyStr.split('.')[1]);
}

CashAmount.prototype.totalInPennies = function() {
  return this.money * 100;
}

CashAmount.prototype.addDoubleAmount = function(addMoney) {

  this.addMoneyStr = addMoney.toFixed(2);
  this.addInteger = Number(this.addMoneyStr.split('.')[0]);
  this.addDecimal = Number(this.addMoneyStr.split('.')[1]);

  var tempDecimal = this.addDecimal + this.decimal;

  if (tempDecimal >= 100) {
    var totalDecimal = (tempDecimal / 100).toFixed(2).split('.')[1];
    var moreInteger = (tempDecimal / 100).toFixed(2).split('.')[0];
    var totalInteger = this.addInteger + this.integer + Number(moreInteger);

    this.money = Number(([totalInteger, totalDecimal]).join('.'));
    this.moneyStr = this.money.toFixed(2); //string
    this.integer = Number(this.moneyStr.split('.')[0]);
    this.decimal = Number(this.moneyStr.split('.')[1]);
  } else {
    var totalDecimal = tempDecimal;
    var totalInteger = this.addInteger + this.integer;

    this.money = Number(([totalInteger, totalDecimal]).join('.'));
    this.moneyStr = this.money.toFixed(2); //string
    this.integer = Number(this.moneyStr.split('.')[0]);
    this.decimal = Number(this.moneyStr.split('.')[1]);
  }
}


CashAmount.prototype.quantityOfEachDenomination = function() {
  var quantity = {};
  quantity.hundreds = Math.floor(this.integer / 100);
  quantity.fifties = Math.floor((this.integer % 100) / 50);
  quantity.twenties = Math.floor(((this.integer % 100) % 50 ) / 20);
  quantity.tens = Math.floor((((this.integer % 100) % 50) % 20) / 10);
  quantity.fives = Math.floor(((((this.integer % 100) % 50) % 20) %10) / 5);
  quantity.ones = ((((this.integer % 100) % 50) % 20) %10) % 5;
  quantity.quarters = Math.floor(this.decimal / 25);
  quantity.dimes = Math.floor((this.decimal % 25) / 10);
  quantity.nickels = Math.floor(((this.decimal % 25) %10) / 5);
  quantity.penny = ((this.decimal % 25) %10) % 5;
  return quantity;
}
var test = new CashAmount(123.72);
var result = Object.getPrototypeOf(test);
console.log(result);


CashAmount.prototype.toDouble = function() {

}

CashAmount.prototype.toDoubleString = function() {

}

// class TestSuite {
//   runTests() {
//     // your code here
//   }
//
//   testFoo() { /* some test code */ }
//   testBar() { /* some test code */ }
//   testBaz() { /* some test code */ }
//  }
//
//  const suite = new TestSuite();
//  suite.runTests(); // testFoo, testBar, and testBaz are executed
