function radixSort(items) {
  // TODO: implement in place radix sort
  return items;
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
var sortedArray = radixSort(randomArray);
console.log(('=== SORTED ARRAY ===\n' + sortedArray));
