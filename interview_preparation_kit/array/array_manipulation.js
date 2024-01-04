/*
Starting with a 1-indexed array of zeros and a list of operations, for each 
operation add a value to each the array element between two given indices, 
inclusive. Once all operations have been performed, return the maximum value 
in the array.

3 <= n <= 10^7
1 <= m <= 2 * 10^5
1 <= a <= b <= n
0 <= k <= 10^9
*/

// https://www.hackerrank.com/challenges/crush/problem?isFullScreen=true&h_l=interview&playlist_slugs%5B%5D=interview-preparation-kit&playlist_slugs%5B%5D=arrays

// brute force
// time complexity: O(m * n)
// space complexity: O(n)
function arrayManipulation(n, queries) {
  // initialize an array of length n + 1
  let arr = new Array(n + 1).fill(0);
  // loop through queries
  for (let query of queries) {
    let [start, end, value] = query;
    // add value
    for (let i = start; i <= end; i++) {
      arr[i] += value;
    }
  }
  return Math.max(...arr);
}
