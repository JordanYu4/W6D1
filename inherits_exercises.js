class Surrogate {
  constructor() {}
}

Function.prototype.inherits = function(parentClass) {
  Surrogate.prototype = parentClass.prototype;
  this.prototype = new Surrogate();
  this.prototype.constructor = this;
};

Function.prototype.inherits = function(parentClass) {
  this.prototype = Object.create(parentClass.prototype);
  this.prototype.constructor = this;
};

//// Tests ////

function MovingObject () {}

// MovingObject.prototype.hello = function() {
//   console.log("hello");
// };

function Ship () {}
Ship.inherits(MovingObject);

function Asteroid () {}
Asteroid.inherits(MovingObject);

let ship = new Ship();
let asteroid = new Asteroid();

// ship.hello();
// asteroid.hello();

// console.log(Ship.prototype.__proto__.prototype);
// console.log(Asteroid.prototype.__proto__.prototype);
// console.log("");
// console.log(ship.__proto__); // MovingObject
// console.log(asteroid.__proto__); // MovingObject
