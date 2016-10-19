// imagine a two-dimensional landscape of blocks,
// represented as an array of integers.
// each integer represents the height of a column.
// for a given landscape which is flooded with water,
// find the "area" of water retained by the landscape
// (assuming each block is 1x1 unit).
// create a visual representation of the flooded landscape.

const width = 20;
const maxHeight = 10;
const symbols = {
  water: '~~~',
  block: '[X]',
  air: '   '
};

const landscape = generateLandscape(width, maxHeight);
simulateFlood(landscape);

function generateLandscape(width, maxHeight) {
  const result = [];
  while (result.length < width) {
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

  const totalArea = maxBoth.reduce((sum, item, i) => {
    if (landscape[i] < item) {
      return sum + item - landscape[i];
    } else {
      return sum;
    }
  }, 0);

  // draw flooded landscape as ascii art
  for (var y = maxHeight; y > 0; y--) {
    var row = '';
    for (var x = 0; x < width; x++) {
      if (landscape[x] >= y) {
        row += symbols.block;
      } else if (maxBoth[x] >= y) {
        row += symbols.water;
      } else {
        row += symbols.air;
      }

    }
    console.log(row);
  }

  console.log('\n');
  console.log(`total water area: ${totalArea} square units`);

}
