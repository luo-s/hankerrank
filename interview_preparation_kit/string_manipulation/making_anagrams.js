/*
Given two strings, a and b, that may or may not be of the same length, 
determine the minimum number of character deletions required to make a and b 
anagrams. Any characters can be deleted from either of the strings.
The strings a and b consist of lowercase English alphabetic letters, ascii[a-z].
*/

// https://www.hackerrank.com/challenges/ctci-making-anagrams/problem?isFullScreen=true&h_l=interview&playlist_slugs%5B%5D=interview-preparation-kit&playlist_slugs%5B%5D=strings

// time complexity: O(n)
// space complexity: O(n + m)
function makeAnagram(a, b) {
  let aMap = new Map();
  let bMap = new Map();
  let count = 0;
  for (let char of a) {
    aMap.set(char, (aMap.get(char) || 0) + 1);
  }
  for (let char of b) {
    bMap.set(char, (bMap.get(char) || 0) + 1);
  }
  for (let [key, value] of aMap) {
    if (bMap.has(key)) {
      count += Math.abs(value - bMap.get(key));
    } else {
      count += value;
    }
  }
  for (let [key, value] of bMap) {
    if (!aMap.has(key)) count += value;
  }
  return count;
}

// different approach
// time complexity: O(n)
// space complexity: O(1)
function makeAnagram(a, b) {
  let aKey = new Array(26).fill(0);
  let bKey = new Array(26).fill(0);
  let count = 0;
  for (let char of a) {
    aKey[char.charCodeAt(0) - "a".charCodeAt(0)]++;
  }
  for (let char of b) {
    bKey[char.charCodeAt(0) - "a".charCodeAt(0)]++;
  }
  for (let i = 0; i < 26; i++) {
    count += Math.abs(aKey[i] - bKey[i]);
  }
  return count;
}
