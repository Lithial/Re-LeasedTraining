'use strict';

// const Person = function (firstName, birthYear) {
//   this.firstName = firstName;
//   this.birthYear = birthYear;
// };

// const james = new Person('james', 1992);
// console.log(james);

//1: Empty object created
//2: function is called. this = {}
//3: {} linked to prototype
//: function automatically returns {}

// Person.prototype.calcAge = function () {
//   console.log(2020 - this.birthYear);
// };
// james.calcAge();
// console.dir(Person.prototype);
// Object.prototype.isACoolDude = function () {
//   console.log('This is hax');
// };
// james.isACoolDude();
// [1, 2, 3, 4, 5].isACoolDude();

// const Car = function (make, speed) {
//   this.speed = speed;
//   this.make = make;
// };
// Car.prototype.accelerate = function () {
//   this.speed += 10;
//   console.log(`${this.make} is going ${this.speed}kph`);
// };

// Car.prototype.brake = function () {
//   this.speed -= 5;
//   console.log(`${this.make} is going ${this.speed}kph`);
// };

// const bmw = new Car('Bmw', 120);
// const mercedes = new Car('Mercedes', 95);
// bmw.accelerate();
// bmw.accelerate();
// bmw.accelerate();
// bmw.brake();
// bmw.brake();
// bmw.brake();
// mercedes.accelerate();
// mercedes.accelerate();
// mercedes.accelerate();
// mercedes.accelerate();
// mercedes.accelerate();
// mercedes.accelerate();
// mercedes.accelerate();
// mercedes.brake();
// mercedes.brake();
// mercedes.brake();
// mercedes.brake();
// mercedes.brake();
// class PersonCL = class{

// }
// class PersonCl {
//   constructor(firstName, birthYear) {
//     this.firstName = firstName;
//     this.birthYear = birthYear;
//   }
//   calcAge() {
//     console.log(2020 - this.birthYear);
//   }
// }

// const jessica = new PersonCl('Jessica', 1996);

// console.log(jessica);
// jessica.calcAge();

// class CarCL {
//   constructor(make, speed) {
//     this.speed = speed;
//     this.make = make;
//   }
//   accelerate = function () {
//     this.speed += 10;
//     console.log(`${this.make} is going ${this.speed}kph`);
//   };

//   brake = function () {
//     this.speed -= 5;
//     console.log(`${this.make} is going ${this.speed}kph`);
//   };
//   get speedUS() {
//     return this.speed / 1.6;
//   }
//   set speedUS(speed) {
//     return this.speed * 1.6;
//   }
// }
// const Car = function (make, speed) {
//   this.speed = speed;
//   this.make = make;
// };
// Car.prototype.accelerate = function () {
//   this.speed += 10;
//   console.log(`${this.make} is going ${this.speed}kph`);
// };

// Car.prototype.brake = function () {
//   this.speed -= 5;
//   console.log(`${this.make} is going ${this.speed}kph`);
// };
// const EV = function (charge) {
//   Car.call(this, make, speed);
//   this.charge = charge;
// };
// EV.prototype.chargeBattery = function () {
//   this.charge = chargeTo;
// };
// EV.prototype.accelerate = function () {
//   this.speed += 20;
//   this.charge--;
// };
// EV.prototype = Object.create(Car);

class Account {
  #movements;
  constructor(owner, currency, pin) {
    this.owner = owner;
    this.currency = currency;
    this.pin = pin;
    //protected
    this.#movements = [];
    this.locale = navigator.language;
    console.log(`Thanks for opening an account, ${owner}`);
  }
  deposit(val) {
    this.#movements.push(val);
    return this;
  }
  withdraw(val) {
    this.deposit(-val);
    return this;
  }
  getMovements() {
    return this.#movements;
  }
  requestLoan(val) {
    if (this.approveLoan(val)) {
      this.deposit(val);
      console.log(`Loan Approved`);
    }
  }
  approveLoan(val) {
    return true;
  }
}
const acc1 = new Account('James', 'Eur', 1111);
acc1.deposit(250);
acc1.withdraw(140);

console.log(acc1);
acc1.requestLoan(500);

console.log(acc1);
acc1.deposit(600).deposit(600).withdraw(250).withdraw(40);

console.log(acc1);
