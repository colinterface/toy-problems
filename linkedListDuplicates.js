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


Node.prototype.forEach = function(callback) {
  var node = this;
  while (node.next !== undefined) {
    callback(node);
    if (node.next) {
      node = node.next;
    } else {
      break;
    }
  }
};

Node.prototype.removeDuplicates = function() {
  var values = {};
  values[this.value] = true;

  this.forEach(function(node) {
    if (node.next === null) {
      return;
    }
    if (values[node.next.value]) {
        node.next = node.next.next;
    } else {
      values[node.next.value] = true;
    }
  });
};

var list = new Node(1);
list.appendToTail(2);
list.appendToTail(2);
list.appendToTail(3);
logEach(list);
list.removeDuplicates();
logEach(list);


function logEach(list) {
  list.forEach(function(node) {
    console.log(node.value);
  });
}
