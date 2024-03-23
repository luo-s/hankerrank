/*
You are given an array and you need to find number of tripets of indices (i,j,k) 
such that the elements at those indices are in geometric progression for a given 
common ratio r and i < j < k.
*/

// https://www.hackerrank.com/challenges/count-triplets-1/problem?isFullScreen=true&h_l=interview&playlist_slugs%5B%5D=interview-preparation-kit&playlist_slugs%5B%5D=dictionaries-hashmaps

// brute force solution
// time complexity: O(n^3)
// space complexity: O(1)
function countTriplets(arr, r) {
  let count = 0;
  for (let i = 0; i < arr.length - 2; i++) {
    for (let j = i + 1; j < arr.length - 1; j++) {
      for (let k = j + 1; k < arr.length; k++) {
        if (arr[i] * r === arr[j] && arr[j] * r === arr[k]) {
          count++;
        }
      }
    }
  }
  return count;
}

// optimized solution
// time complexity: O(n^3)
// space complexity: O(n)
function countTriplets(arr, r) {
  let count = 0;
  let tracker = [];
  for (let i = 0; i < arr.length - 1; i++) {
    for (let j = i + 1; j < arr.length; j++) {
      if (arr[i] * r === arr[j]) {
        for (let pair of tracker) {
          if (i === pair[1]) count++;
        }
        tracker.push([i, j]);
      }
    }
  }
  return count;
}

// optimized solution
// time complexity: O(n)
// space complexity: O(n)
function countTriplets(arr, r) {
  const n = arr.length;
  const map1 = new Map(); // Map to store the count of potential second elements
  const map2 = new Map(); // Map to store the count of potential third elements
  let count = 0;

  for (let i = 0; i < n; i++) {
    // check end element first to avoid double counting
    // Check if arr[i] is the end of a triplet
    if (map2.has(arr[i])) {
      count += map2.get(arr[i]);
    }

    // if arr[i] is the middle of a triplet
    if (map1.has(arr[i])) {
      // update the count of potential third elements in map2
      map2.set(arr[i] * r, (map2.get(arr[i] * r) || 0) + map1.get(arr[i]));
    }

    // update the count of potential second elements in map1
    map1.set(arr[i] * r, (map1.get(arr[i] * r) || 0) + 1);
  }
  return count;
}
