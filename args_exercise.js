function sum() {
  let args = Array.from(arguments);
  let total = 0;
  args.forEach ((el) => {
    total += el;
  });
  return total;
}

Function.prototype.myBind = function(ctx, ...args) {
  return (...callArgs) => { 
    return this.apply(ctx, args.concat(callArgs)); };
};

function curriedSum(numArgs) {
  let numbers = [];
  return function _curriedSum(num) {
    numbers.push(num);
    if (numbers.length === numArgs){
      return sum(...numbers);
    } else {
      return _curriedSum;
    }
  };
} 

Function.prototype.curry = function(numArgs) {
  let args = [];
  return arg => {
    args.push(arg);
    if (args.length === numArgs) {
      return this.apply(this, args);
    } else {
      return _curriedFunction;
    }
  };
};

Function.prototype.curry = function(numArgs) {
  let args = [];
  return arg => {
    args.push(arg);
    if (args.length === numArgs) {
      return this.call(this, ...args);
    } else {
      return _curriedFunction;
    }
  };
};
