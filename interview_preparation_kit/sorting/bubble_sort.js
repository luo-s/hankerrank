/*
Given an array of integers, sort the array in ascending order using the Bubble 
Sort algorithm above. Once sorted, print the following three lines:

Array is sorted in numSwaps swaps., where  is the number of swaps that took place.
First Element: firstElement, where  is the first element in the sorted array.
Last Element: lastElement, where  is the last element in the sorted array.
*/

// https://www.hackerrank.com/challenges/ctci-bubble-sort/problem?isFullScreen=true&h_l=interview&playlist_slugs%5B%5D=interview-preparation-kit&playlist_slugs%5B%5D=sorting

function countSwaps(a) {
  let count = 0;
  for (let i = 0; i < a.length; i++) {
    for (let j = 0; j < a.length - i; j++) {
      if (a[j] > a[j + 1]) {
        count++;
        [a[j], a[j + 1]] = [a[j + 1], a[j]];
      }
    }
  }
  console.log(`Array is sorted in ${count} swaps.`);
  console.log(`First Element: ${a[0]}`);
  console.log(`Last Element: ${a[a.length - 1]}`);
}
