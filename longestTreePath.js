// Write a function in javascript to find the longest path from the document element to any leaf node in the DOM tree.


function longestTreePath(node) {
  if (!node.childNodes || !node.childNodes.length) {
    return 1;
  }

  return Math.max.apply(this, [].slice.call(node.childNodes).map(function(childNode) {
    return 1 + longestTreePath(childNode);
  }));
}

var node = {
  childNodes: [
    {
      childNodes: [
        {
          childNodes: [
            {
              childNodes: [
                { end: true }
              ]
            }
          ]
        }
      ]
    },
    {
      childNodes: [
        { end: true }
      ]
    }
  ]
};
console.log(longestTreePath(node)); // 5
