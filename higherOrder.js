function filter(array, predicate) {
  var filteredArray = [];

  array.forEach(function(item) {
    if (predicate(item)) {
      filteredArray.push(item);
    }
  });

  return filteredArray;
}

var array = [1, 2, 3, 4, 5, 6, 7, 8];

var evensOnly = filter(array, function(item) {
  return !(item % 2);
});

console.log(evensOnly);
