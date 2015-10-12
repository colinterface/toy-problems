/* Parsing an API response
 *
 * Suppose you are calling a JSON API that responds to requests using a nested
 * hash table (associative array), where the values are either other hash tables,
 * or strings, with no other possible options.
 *
 * Given a sequence of keys, write a method that traverses the hash table to return
 * the string stored at the terminal key in the sequence.
 */

function parse(hashtable, keys) {
  if (keys.length === 1) {
    return hashtable[keys[0]];
  } else {
    return parse(hashtable[keys.shift()], keys);
  }
}

var input = {
  k1: 'v1',
  k2: {
    k21: 'v21',
    k22: {
      k221: 'v221'
    }
  },
  k3: {
    k31: 'v31'
  }
};

var output = parse(input, ['k2', 'k22', 'k221']);
if (output === 'v221') {
  console.log('Success!');
} else {
  console.log('Output did not match "v221"', output);
}
