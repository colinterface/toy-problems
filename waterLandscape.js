// imagine a two-dimensional landscape of blocks,
// represented as an array of integers.
// each integer represents the height of a column.
// for a given landscape which is flooded with water,
// first find the resulting water level,
// then find the "area" of water retained by the landscape
// (assuming each block is 1x1 unit).
// finally, create a visual representation of the flooded landscape.

const landscape = generateLandscape(10, 10);
console.log(landscape);
simulateFlood(landscape);

// TODO: draw flooded landscape as ascii art

function generateLandscape(width, maxHeight) {
  const result = [];
  for (var i  = 0; i < width; i++) {
    result.push(Math.ceil(Math.random() * maxHeight));
  }
  return result;
}

function simulateFlood(landscape) {
  const maxLeft = []
  var max = 0;

  landscape.forEach((column) => {
    maxLeft.push(max);
    if (column > max) {
      max = column;
    }
  });

  const maxRight = [];
  max = 0;

  for (var i = landscape.length - 1; i >= 0; i--) {
    maxRight.push(max);
    if (landscape[i] > max) {
      max = landscape[i];
    }
  }

  maxRight.reverse();

  const maxBoth = maxLeft.map((item, i) => {
    return Math.min(item, maxRight[i]);
  });

  const waterLevel = Math.max.apply(null, maxBoth);

  const totalArea = maxBoth.reduce((sum, item, i) => {
    if (landscape[i] < item) {
      return sum + item - landscape[i];
    } else {
      return sum;
    }
  }, 0);

  console.log(`water level: ${waterLevel}`);
  console.log(`total water area: ${totalArea} square units`);

}
