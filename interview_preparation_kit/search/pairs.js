/*
Given an array of integers and a target value, determine the number of pairs 
of array elements that have a difference equal to the target value.

2 <= n <= 10^5
0 < k < 10^9
0 < arr[i] < 2^31 - 1
each integer arr[i] will be unique
*/

// https://www.hackerrank.com/challenges/pairs/problem?isFullScreen=true&h_l=interview&playlist_slugs%5B%5D=interview-preparation-kit&playlist_slugs%5B%5D=search

// brute force
// time complexity O(n^2)
// space  complexity O(1)
function pairs(k, arr) {
  let count = 0;
  for (let i = 0; i < arr.length - 1; i++) {
    for (let j = i + 1; j < arr.length; j++) {
      if (Math.abs(arr[j] - arr[i]) === k) {
        count++;
      }
    }
  }
  return count;
}

// hash table
// time complexity O(n)
// space complexity O(n)
function pairs(k, arr) {
  let count = 0;
  let map = new Map();
  for (let i = 0; i < arr.length; i++) {
    map.set(arr[i], true);
  }
  for (let i = 0; i < arr.length; i++) {
    if (map.get(arr[i] + k)) {
      count++;
    }
  }
  return count;
}
