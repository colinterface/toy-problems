
function merge(left, right) {
  var result = [];
  var leftIndex = 0;
  var rightIndex = 0;

  while (leftIndex < left.length && rightIndex < right.length) {
    if (left[leftIndex] < right[rightIndex]) {
      result.push(left[leftIndex++]);
    } else {
      result.push(right[rightIndex++]);
    }
  }

  return result.concat(left.slice(leftIndex)).concat(right.slice(rightIndex));
}

function mergeSort(items) {

  if (items.length < 2) {
    return items;
  }

  var middle = Math.floor(items.length / 2);
  var left = items.slice(0, middle);
  var right = items.slice(middle);

  return merge(mergeSort(left), mergeSort(right));
}

function generateRandomArray(length) {
  var result = [];
  for (var i = 0; i < length; i++) {
    result.push(Math.floor(Math.random() * 1000));
  }
  return result;
}

var randomArray = generateRandomArray(100);
console.log('=== UNSORTED ARRAY ===\n' + randomArray);
var sortedArray = mergeSort(randomArray);
console.log(('=== SORTED ARRAY ===\n' + sortedArray));
