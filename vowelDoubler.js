var a = ['w','h','a','t',' ','o','n',' ','e','a','r','t','h',' ','a','r','e',' ','y','o','u',' ','t','a','l','k','i','n','g',' ','a','b','o','u','t','?'];
var b = ['w','h','a','t']
// Vowel doubler

var vowelDoubler = function(arr) {
  //input is arr of charater
  //constraint: O(n)
  //define vowels
  var vowels = {
    'a':true,
    'o':true,
    'e':true,
    'i':true,
    'u':true
  }

  var length = arr.length;
  var vowelCount = 0;
  for ( let char of arr) {
    if(vowels[char]){
      vowelCount++;
    }
  }

  var newLength = length + vowelCount;
  while (newLength > 0 && length > 0) {
    if (vowels[arr[length - 1]]) {
      arr[newLength - 1] = arr[length - 1];
      arr[newLength - 2] = arr[length - 1];
      newLength -= 2;
      length --;
    } else {
      arr[newLength - 1] = arr [length - 1];
      newLength--;
      length--;
    }
  }
  console.log(arr);
  return arr;
}

vowelDoubler(a);
