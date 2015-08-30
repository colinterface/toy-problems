
var Node = function(value) {
  this.value = value;
  this.next = null;
};

Node.prototype.appendToTail = function(value) {
  var node = this;
  while (node.next !== null) {
    node = node.next;
  }
  node.next = new Node(value);
};

Node.prototype.delete = function() {
  if (this.next !== null) {
    this.next = this.next.next;
  } else {
    return console.log('can\'t delete the last node!');
  }
};


Node.prototype.forEach = function(callback) {
  var node = this;
  while (node) {
    callback(node);
    node = node.next;
  }
};


// Write code to remove duplicates from an unsorted linked list.
// How would you solve this problem if a temporary buffer is not allowed?
Node.prototype.removeDuplicates = function() {
  // doing this without the hash table would involve 2 iterators
  // time complexity becomes O(n^2) but space becomes constant
  var values = {};
  values[this.value] = true;

  this.forEach(function(node) {
    if (node.next === null) {
      return;
    }
    if (values[node.next.value]) {
        node.delete();
    } else {
      values[node.next.value] = true;
    }
  });
};

var list = new Node(1);
list.appendToTail(2);
list.appendToTail(2);
list.appendToTail(3);
// logEach(list);
// list.removeDuplicates();
// logEach(list);

// Implement an algorithm to find the kth to last element of a singly linked list.
Node.prototype.kthToLast = function(k) {
  var length = 0;
  this.forEach(function(node) {
    length++;
  });
  var counter = 0;
  var result;
  this.forEach(function(node) {
    if (counter === length - k) {
      result = node;
      return;
    }
    counter++;
  });
  return result;
};

function logEach(list) {
  list.forEach(function(node) {
    console.log(node.value);
  });
}
