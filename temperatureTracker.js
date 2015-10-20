/*
Write a class TempTracker with these methods:

insert()—records a new temperature
get_max()—returns the highest temp we've seen so far
get_min()—returns the lowest temp we've seen so far
get_mean()—returns the mean ↴ of all temps we've seen so far
get_mode()—returns the mode ↴ of all temps we've seen so far
Optimize for space and time.
Favor speeding up the getter functions
(get_max(), get_min(), get_mean(), and get_mode()) over speeding up the insert() function.

get_mean() should return a float, but the rest of the getter functions can return integers.
Temperatures will all be inserted as integers. We'll record our temperatures in Fahrenheit,
so we can assume they'll all be in the range 0..1100..110.

If there is more than one mode, return any of the modes.
*/

var TempTracker = function TempTracker() {
  this.temps = [];

  this.max = Number.NEGATIVE_INFINITY;
  this.min = Number.POSITIVE_INFINITY;

  this.sum = 0;
  this.mean = null;

  this.mode = null;
  this.valueCounts = {};
  this.modeOccurrences = 0;
};

TempTracker.prototype.insert = function(value) {

  // add value to temperature log (timestamp added for funsies)
  this.temps.push({ value: value, timestamp: new Date() });

  // see if new value is replaces max or min
  if (value > this.max) {
    this.max = value;
  } else if (value < this.min) {
    this.min = value;
  }

  // add value to sum and calculate mean
  this.sum += value;
  this.mean = this.sum / this.temps.length;

  // add value to valueCounts table or increment its count
  if (!this.valueCounts[value]) {
    this.valueCounts[value] = 1;
  } else {
    this.valueCounts[value]++;
  }

  // replace mode if new count is greater than modeOccurrences
  if (this.valueCounts[value] > this.modeOccurrences) {
    this.mode = value;
    this.modeOccurrences = this.valueCounts[value];
  }

};

TempTracker.prototype.getMax = function() {
  return this.max;
};

TempTracker.prototype.getMin = function() {
  return this.min;
};

TempTracker.prototype.getMean = function() {
  return this.mean;
};

TempTracker.prototype.getMode = function() {
  return this.mode;
};



var tracker = new TempTracker();
while (tracker.temps.length < 100) {
  tracker.insert(Math.floor(Math.random() * 100));
}
console.log(tracker.getMax());
console.log(tracker.getMin());
console.log(tracker.getMean());
console.log(tracker.getMode());
// console.log(tracker);
