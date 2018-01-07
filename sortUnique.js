function sortUnique(array) {
  return array.sort((a, b) => a - b).reduce((aggregate, item) => {
    if (item === aggregate[aggregate.length - 1]) {
      return aggregate;
    } else {
      return aggregate.concat(item);
    }
  }, []);
}

const testArray = [10, 0, -1, -1, 9, 8, 7, 7, 6, 5, 4, 3, 2, 1];
const result = sortUnique(testArray);
console.log(result);
