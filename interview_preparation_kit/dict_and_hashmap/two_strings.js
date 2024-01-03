/*
Given two strings, determine if they share a common substring. 
A substring may be as small as one character.
*/

// https://www.hackerrank.com/challenges/two-strings/problem?isFullScreen=true&h_l=interview&playlist_slugs%5B%5D=interview-preparation-kit&playlist_slugs%5B%5D=dictionaries-hashmaps

// if the have a multi-character common substring, they must have a single character common substring.
// thus, we can just check if they have common letters.
// time complexity: O(n+m)
// space complexity: O(n)
function twoStrings(s1, s2) {
  let set1 = new Set(s1);
  for (let char of s2) {
    if (set1.has(char)) {
      return "YES";
    }
  }
  return "NO";
}

// different approach
// time complexity: O(n+m)
// space complexity: O(26)
function twoStrings(s1, s2) {
  var generateKey = (str) => {
    const key = new Array(26).fill(0);
    for (let char of str) {
      key[char.charCodeAt(0) - "a".charCodeAt(0)]++;
    }
    return key;
  };
  const key1 = generateKey(s1);
  const key2 = generateKey(s2);
  for (let i = 0; i < 26; i++) {
    if (key1[i] > 0 && key2[i] > 0) {
      return "YES";
    }
  }
  return "NO";
}
