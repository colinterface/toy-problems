// Given a binary tree t and an integer s,
// determine whether there is a root to leaf path in t
// such that the sum of vertex values equals s.

function hasPathWithGivenSum(t, s) {
  let result = false;
  findPaths(t);
  return result;

  function findPaths(node, sum = 0) {
    sum += node.value;

    if (sum === s) {
      result = true;
      return;
    }

    if (node.left) {
      findPaths(node.left, sum);
    }

    if (node.right) {
      findPaths(node.right, sum);
    }

  }
}

const t = {
    "value": 4,
    "left": {
        "value": 1,
        "left": {
            "value": -2,
            "left": null,
            "right": {
                "value": 3,
                "left": null,
                "right": null
            }
        },
        "right": null
    },
    "right": {
        "value": 3,
        "left": {
            "value": 1,
            "left": null,
            "right": null
        },
        "right": {
            "value": 2,
            "left": {
                "value": -2,
                "left": null,
                "right": null
            },
            "right": {
                "value": -3,
                "left": null,
                "right": null
            }
        }
    }
};

const s = 7;

console.log(hasPathWithGivenSum(t, s)); // true
