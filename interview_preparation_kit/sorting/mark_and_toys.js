/*
Mark wants to buy some toys with only a certain amount to spend, 
Given a list of toy prices and an amount to spend, 
determine the maximum number of gifts he can buy.
Note Each toy can be purchased only once.
*/

// https://www.hackerrank.com/challenges/mark-and-toys/problem?isFullScreen=true&h_l=interview&playlist_slugs%5B%5D=interview-preparation-kit&playlist_slugs%5B%5D=sorting

// sorting: always pick the cheapest toy
// time complexity: O(nlogn)
// space complexity: O(1)
function maximumToys(prices, k) {
  prices.sort((a, b) => a - b);
  let count = 0;
  for (let i = 0; i < prices.length; i++) {
    if (prices[i] <= k) {
      count++;
      k -= prices[i];
    }
  }
  return count;
}

// count sorting
// time complexity: O(n)
// sapce complexity: O(max - min)
// extremely slow when the range of prices is large
function maximumToys(prices, k) {
  const min = Math.min(...prices);
  const max = Math.max(...prices);
  const count = new Array(max - min + 1).fill(0);
  for (let i = 0; i < prices.length; i++) {
    count[prices[i] - min]++;
  }
  let sorted = [];
  for (let i = 0; i < count.length; i++) {
    while (count[i] > 0) {
      sorted.push(i + min);
      count[i]--;
    }
  }
  let num = 0;
  for (let i = 0; i < sorted.length; i++) {
    if (sorted[i] <= k) {
      num++;
      k -= sorted[i];
    }
  }
  return num;
}
