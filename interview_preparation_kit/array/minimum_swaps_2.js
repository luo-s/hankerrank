/*
You are given an unordered array consisting of consecutive integers in 
[1, 2, 3, ..., n] without any duplicates. 
You are allowed to swap any two elements. 
Find the minimum number of swaps required to sort the array in ascending order.
*/

// https://www.hackerrank.com/challenges/minimum-swaps-2/problem?isFullScreen=true&h_l=interview&playlist_slugs%5B%5D=interview-preparation-kit&playlist_slugs%5B%5D=arrays

// modularized solution
// swap the most out of place element with the most in place element
// time complexity: O(n^2)
// space complexity: O(n)
function minimumSwaps(arr) {
  // swap function
  var swap = function (array, pos) {
    let targetPos =
      Math.max(...pos) > Math.abs(Math.min(...pos))
        ? Math.max(...pos)
        : Math.min(...pos);
    let targetIndex = pos.indexOf(targetPos);
    let target = array[targetIndex];
    [array[targetIndex], array[target - 1]] = [
      array[target - 1],
      array[targetIndex],
    ];
  };
  let count = 0;
  // initialize an array of relative position
  let relativePos = arr.map((ele, index) => ele - index - 1);
  console.log(arr, relativePos);
  // keep swapping until all elements are in the right position
  while (relativePos.some((ele) => ele !== 0)) {
    swap(arr, relativePos);
    relativePos = arr.map((ele, index) => ele - index - 1);
    console.log(arr, relativePos);
    count++;
  }
  return count;
}

// optimized solution
// time complexity: O(n)
// space complexity: O(1)
function minimumSwaps(arr) {
  let count = 0;
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] !== i + 1) {
      let temp = arr[i];
      arr[i] = arr[temp - 1];
      arr[temp - 1] = temp;
      count++;
      i--;
    }
  }
  return count;
}
