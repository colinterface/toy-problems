var Stack = function() {
  this.storage = {};
  this.index = 0;
  this.min = [Number.POSITIVE_INFINITY];
};

Stack.prototype.push = function(value) {
  this.storage[this.index] = value;
  if (value < this.min[this.min.length - 1]) {
    this.min.push(value);
  }
  this.index++;
};

Stack.prototype.pop = function() {
  var top = this.storage[this.index - 1];
  if (this.index > 0) {
    delete this.storage[this.index - 1];
    this.index--;
  }
  if (top === this.min[this.min.length - 1]) {
    this.min.pop();
  }
  return top;
};

Stack.prototype.peek = function() {
  return this.storage[this.index - 1];
};

Stack.prototype.size = function() {
  return this.index;
};

Stack.prototype.min = function() {
  return this.min[this.min.length - 1];
};

var stack = new Stack();
stack.push(1);
stack.push(-1);
stack.push(3);
stack.pop();
stack.pop();
console.log(stack);
