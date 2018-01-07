// Definition for singly-linked list:
function ListNode(x) {
  this.value = x;
  this.next = null;
}
//
//

ListNode.prototype.forEach = function(action) {
  var node = this;
  while (node) {
    action(node);
    node = node.next;
  }
};

ListNode.prototype.delete = function() {
  if (this.next !== null) {
    this.next = this.next.next;
  } else {
    return console.log('cannot delete last node');
  }
};

ListNode.prototype.appendToTail = function(value) {
  var node = this;
  while (node.next !== null) {
    node = node.next;
  }
  node.next = new ListNode(value);
};

const list = new ListNode(1);
list.appendToTail(2);
list.appendToTail(3);

list.forEach((node) => {
  if (node.value === 2) {
    node.delete();
  }
});

console.log(list);
//
// list.forEach(({ value }) => {
//   console.log(value);
// })

// console.log(list);

// function removeKFromList(l, k) {
//
// }
