/*
You are given an unordered array consisting of consecutive integers in 
[1, 2, 3, ..., n] without any duplicates. 
You are allowed to swap any two elements. 
Find the minimum number of swaps required to sort the array in ascending order.
*/

// https://www.hackerrank.com/challenges/minimum-swaps-2/problem?isFullScreen=true&h_l=interview&playlist_slugs%5B%5D=interview-preparation-kit&playlist_slugs%5B%5D=arrays

// if sorted: arr[i] = i + 1 -> i = arr[i] - 1
// brute force
// time complexity: O(n)
// space complexity: O(1)
function minimumSwaps(arr) {
  let count = 0;
  for (let i = 0; i < arr.length; i++) {
    // if out of place
    if (arr[i] !== i + 1) {
      // swap to the correct position
      let correctIndex = arr[i] - 1; // arr[i] = correctIndex + 1
      arr[i] = arr[correctIndex];
      arr[correctIndex] = correctIndex + 1;
      // update count
      count++;
      // decrement i to check the swapped element
      i--;
    }
  }
  return count;
}
