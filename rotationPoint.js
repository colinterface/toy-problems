// given an array of strings which is alphabetical, but rotated,
// find the index of the rotation point

const words = [
  'ptolemaic',
  'retrograde',
  'supplant',
  'undulate',
  'xenoepist',
  'asymptote', // <-- rotates here!
  'babka',
  'banoffee',
  'engender',
  'karpatka',
  'othellolagkage',
];

console.log(findRotationPoint(words));

function findRotationPoint(words) {
  var min = 0;
  var max = words.length - 1
  var i = 0;
  var rotationPoint = null;

  function areAlphabetical(a, b) {
    return words[a][0] < words[b][0];
  }

  function midpoint(a, b) {
    return Math.ceil((a + b) / 2);
  }

  if (!areAlphabetical(max, i)) {
    rotationPoint = 0;
  } else {
    i = midpoint(i, max);
  }

  while (rotationPoint === null) {
    if (areAlphabetical(i, i - 1)) {
      rotationPoint = i;
    } else if (areAlphabetical(i, 0)) {
      max = i;
      i = midpoint(i, min);
    } else if (areAlphabetical(max, i)) {
      min = i;
      i = midpoint(i, max);
    }
  }

  return rotationPoint;

}
