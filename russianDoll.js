//input is array of array
//output is number
//edge case empty input

var maxEnvelopes = function(envelopes) {
  // sort the arr by compare width in each element
  if (envelopes.length > 0) {
    var count = 1;
  } else {
    return 0;
  }
  envelopes.sort((a,b) => a[0]-b[0]); 
  var helper = (i, compared) => {
    var compared = compared || envelopes[i];
    if (!envelopes[i + 1]) {
      return;
    } else {
      if (compared[0] < envelopes[i + 1][0] && compared[1] < envelopes[i + 1][1]) {
        count++;
        helper(i + 1);
      } else {
        helper(i + 1, compared);
      }
    }
  }
  helper(0);
  return count;
};


var test = maxEnvelopes([[5,4],[6,4],[6,7],[7,8],[2,3]]);
console.log(test);

// failed
// should find the highest count of different combinations