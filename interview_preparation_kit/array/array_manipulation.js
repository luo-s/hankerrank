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

// brute force -- time limit exceeded
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

/* optimized solution: prefix sum can unnest the nested loop -> 2 indiviaul loops
original: arr = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
queries: [[1, 5, 3], [4, 8, 7], [6, 9, 1]]
after 1st query:     [3, 0, 0, 0, -3, 0, 0, 0, 0, 0] 
  prefix sum (arr) = [3, 3, 3, 3, 3, 0, 0, 0, 0, 0]
after 2nd query:     [3, 0, 0, 7, 0, -3, 0, 0, -7, 0]
  prefix sum (arr) = [3, 3, 3, 10, 10, 7, 7, 7, 0, 0]
after 3rd query:     [3, 0, 0, 7, 0, -2, 0, 0, -7, -1] 
  prefix sum (arr) = [3, 3, 3, 10, 10, 8, 8, 8, 1, 0]
*/
// time complexity: O(n + m)
// sapce complexity: O(n)
function arrayManipulation(n, queries) {
  // initialize an array of length n + 1
  let arr = new Array(n + 1).fill(0),
    max = 0;
  // loop through queries, add value to start index, and subtract value from end index
  for (let [start, end, value] of queries) {
    arr[start - 1] += value;
    arr[end] -= value;
  }
  let prefixSum = 0;
  for (let i = 0; i < n; i++) {
    prefixSum += arr[i];
    max = Math.max(max, prefixSum);
  }
  return max;
}
