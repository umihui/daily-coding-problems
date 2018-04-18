/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
var isSubsequence = function(s, t) {
    // t is really long
    // s.length is less than 100
    // put every letter of t in an obj, indexed
    var arr = t.split('');
    console.log(arr);
    var cache = {};
    arr.forEach((l, i) => {
      if (cache[l]) {
        cache[l].push(i);
      } else {
        cache[l] =[i];
      }
    })
    var index = 0;
    var result = true;
    var arrOfS = s.split('');
    // check if exist
    // check if index is great than former letter
    var first = arrOfS[0];
    if (!cache[first]) {
      return false;
    } else {
      index = cache[first][0];
      for (i = 1; i < arrOfS.length; i++) {
        console.log(arrOfS[i])
        if (!cache[arrOfS[i]]) {
          return false;
        } else {
          if(!(cache[arrOfS[i]].find(el => el > index))) {
            return false;
          }
        }
      }
    }
    return true;
};

console.log(isSubsequence('abc', 'abcb'));
