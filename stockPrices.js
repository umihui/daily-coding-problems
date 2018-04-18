var stockPricesYesterday = [10, 7, 5, 8, 11, 9];

function getMaxProfit(arr, max = 0) {
  if (arr.length === 1) {
    return max;
  }
  let startIndex = 0;
  let currentIndex = 0;
  let endIndex = 1;
  if (arr[endIndex] <= arr[currentIndex]) {
    return getMaxProfit(arr.slice(endIndex),max);
  } else {
    while (arr[endIndex] > arr[currentIndex]) {
      endIndex++;
      currentIndex++;
    }
    max = Math.max(arr[endIndex] - arr[startIndex],max);
    return getMaxProfit(arr.slice(endIndex),max);
  }
};

console.log(getMaxProfit(stockPricesYesterday));