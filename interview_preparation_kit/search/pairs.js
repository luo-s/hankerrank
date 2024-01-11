/*
Given an array of integers and a target value, determine the number of pairs 
of array elements that have a difference equal to the target value.
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
