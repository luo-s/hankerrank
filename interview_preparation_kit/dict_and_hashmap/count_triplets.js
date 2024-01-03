/*
You are given an array and you need to find number of tripets of indices (i,j,k) 
such that the elements at those indices are in geometric progression for a given 
common ratio r and i < j < k.
*/

// https://www.hackerrank.com/challenges/count-triplets-1/problem?isFullScreen=true&h_l=interview&playlist_slugs%5B%5D=interview-preparation-kit&playlist_slugs%5B%5D=dictionaries-hashmaps

// // brute force solution
// // time complexity: O(n^3)
// // space complexity: O(1)
// function countTriplets(arr, r) {
//   let count = 0;
//   for (let i = 0; i < arr.length - 2; i++) {
//     for (let j = i + 1; j < arr.length - 1; j++) {
//       for (let k = j + 1; k < arr.length; k++) {
//         if (arr[i] * r === arr[j] && arr[j] * r === arr[k]) {
//           count++;
//         }
//       }
//     }
//   }
//   return count;
// }

// // optimized solution
// // time complexity: O(n^3)
// // space complexity: O(n)
// function countTriplets(arr, r) {
//   let count = 0;
//   let tracker = [];
//   for (let i = 0; i < arr.length - 1; i++) {
//     for (let j = i + 1; j < arr.length; j++) {
//       if (arr[i] * r === arr[j]) {
//         for (let pair of tracker) {
//           if (i === pair[1]) count++;
//         }
//         tracker.push([i, j]);
//       }
//     }
//   }
//   return count;
// }

// optimized solution
function countTriplets(arr, r) {
  let count = 0;
  if (r === 1) {
    let map = new Map();
    for (let num of arr) {
      if (map.has(num)) {
        map.set(num, map.get(num) + 1);
      } else {
        map.set(num, 1);
      }
    }
    for (let [key, value] of map) {
      if (value >= 3) {
        count += (value * (value - 1) * (value - 2)) / 6;
      }
    }
    return count;
  }

  let map = new Map();
  for (let i = 0; i < arr.length - 1; i++) {
    for (let j = i + 1; j < arr.length; j++) {
      if (arr[i] * r === arr[j]) {
        if (map.has([arr[i], arr[j]].join("@"))) {
          count += map.get([arr[i], arr[j]].join("@"));
        }
        if (map.has([arr[j], arr[j] * r].join("@"))) {
          map.set(
            [arr[j], arr[j] * r].join("@"),
            map.get([arr[j], arr[j] * r].join("@")) + 1
          );
        } else {
          map.set([arr[j], arr[j] * r].join("@"), 1);
        }
        console.log(map, count);
      }
    }
  }
  return count;
}

console.log(countTriplets([1, 2, 2, 4], 2)); // 2
console.log(countTriplets([1, 3, 9, 9, 27, 81], 3)); // 6
console.log(countTriplets([1, 5, 5, 25, 125], 5)); // 4
