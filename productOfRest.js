/* Given an array of integers, return a new array such that each element at index i of the new array is the product of all the numbers in the original array except the one at i.

For example, if our input was [1, 2, 3, 4, 5], the expected output would be [120, 60, 40, 30, 24]. If our input was [3, 2, 1], the expected output would be [2, 3, 6].

Follow-up: what if you can't use division?
 */

// input is arr of nums
// output is arr of nums
function productOfRest(arr) {
  var a = 1;
  var result = [];
  // step one : [1, a[0], a[0]*a[1], a[0]*a[1]*a[2]....]
  for (let i = 0; i < arr.length; i++) {
    result[i] = a;
    a *= arr[i];
  }
  // step two : multiply the result backwards
  a = 1;
  for (let i = arr.length - 1; i >= 0; i--) {
    result[i] *= a;
    a *= arr[i];
  }
  return result;
}

productOfRest([3, 2, 1]);
