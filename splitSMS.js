// Write a function, `splitSms`, that accepts a string as its parameter.
// The goal of `splitSms` is to return an array of strings,
// each of which would fit into a standardized 160-character tweet.
// If there are multiple elements within this array,
// we should also give some sort of visual indicator within that string
// for the recipient to tell how many messages are incoming and which specific index this message is,
// in case the recipient's carrier delivers those messages in an unordered fashion.

function splitSms(longString) {

  if (longString.length <= 160) {
    return [longString];
  }

  // before numbers the indicator is 4 characters long: '[/] '
  // we need to figure out much extra space to reserve
  var indicatorLength = 4 + (Math.ceil(longString.length / 156).toString().length) * 2;
  var maxContentLength = 160 - indicatorLength;

  var numTexts = Math.ceil(longString.length / maxContentLength);
  var texts = [];

  for (var i = 1; i <= numTexts; i++) {
    var start = (i - 1) * maxContentLength;
    var end;
    if (longString[start + maxContentLength]) {
      end = start + maxContentLength;
    } else {
      end = longString.length - 1;
    }
    var content = longString.substring(start, end);
    texts.push('[' + i + '/' + numTexts + '] ' + content);
  }
  return texts;
}

console.log(splitSms('Write a function, `splitSms`, that accepts a string as its parameter. The goal of `splitSms` is to return an array of strings, each of which would fit into a standardized 160-character tweet. If there are multiple elements within this array, we should also give some sort of visual indicator within that string for the recipient to tell how many messages are incoming and which specific index this message is, in case the recipient\'s carrier delivers those messages in an unordered fashion.'));
